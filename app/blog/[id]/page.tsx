import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Clock, Share2, Linkedin, Twitter, Facebook } from "lucide-react"

// Mock blog data - same as in the blog index
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Healthcare: Transforming Patient Care",
    excerpt:
      "Explore how artificial intelligence is revolutionizing healthcare delivery, from diagnostic tools to personalized treatment plans.",
    content: `
      <p>Artificial Intelligence (AI) is rapidly transforming the healthcare industry, offering unprecedented opportunities to improve patient outcomes, reduce costs, and enhance the overall quality of care. As we look toward the future, the integration of AI technologies in healthcare promises to revolutionize how we diagnose, treat, and prevent diseases.</p>

      <h2>Current Applications of AI in Healthcare</h2>
      <p>Today's healthcare AI applications span across various domains:</p>
      <ul>
        <li><strong>Medical Imaging:</strong> AI algorithms can analyze medical images with remarkable accuracy, often detecting conditions that human radiologists might miss.</li>
        <li><strong>Drug Discovery:</strong> Machine learning models accelerate the identification of potential drug compounds, reducing development time from years to months.</li>
        <li><strong>Predictive Analytics:</strong> AI systems can predict patient deterioration, readmission risks, and treatment outcomes based on historical data.</li>
        <li><strong>Virtual Health Assistants:</strong> Chatbots and virtual assistants provide 24/7 patient support and preliminary health assessments.</li>
      </ul>

      <h2>The Promise of Personalized Medicine</h2>
      <p>One of the most exciting applications of AI in healthcare is personalized medicine. By analyzing vast amounts of patient data, including genetic information, lifestyle factors, and medical history, AI can help healthcare providers develop tailored treatment plans that are more effective and have fewer side effects.</p>

      <h2>Challenges and Considerations</h2>
      <p>While the potential of AI in healthcare is immense, several challenges must be addressed:</p>
      <ul>
        <li><strong>Data Privacy and Security:</strong> Healthcare data is highly sensitive and requires robust protection measures.</li>
        <li><strong>Regulatory Compliance:</strong> AI systems must meet strict regulatory standards before deployment in clinical settings.</li>
        <li><strong>Integration with Existing Systems:</strong> Healthcare organizations need to seamlessly integrate AI tools with their current infrastructure.</li>
        <li><strong>Training and Adoption:</strong> Healthcare professionals require proper training to effectively use AI-powered tools.</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>The future of AI in healthcare is bright, with emerging technologies like quantum computing and advanced neural networks promising even more sophisticated applications. As we continue to develop and refine these technologies, we can expect to see more accurate diagnoses, more effective treatments, and ultimately, better patient outcomes.</p>

      <p>At Sparkling Minds Technologies, we're committed to helping healthcare organizations harness the power of AI while ensuring compliance, security, and seamless integration with existing systems. Our team of experts works closely with healthcare providers to develop custom AI solutions that address their unique challenges and goals.</p>
    `,
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    category: "AI & Healthcare",
    tags: ["AI", "Healthcare", "Innovation"],
    image: "/ai-healthcare-blog.jpg",
    readTime: "8 min read",
  },
  // Add other blog posts here...
]

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-sm text-gray-500">{post.readTime}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-balance">{post.title}</h1>
            <p className="text-xl leading-8 text-gray-600 text-pretty">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <User className="h-4 w-4 mr-2" />
                <span className="mr-6">{post.author}</span>
                <Calendar className="h-4 w-4 mr-2" />
                <span className="mr-6">{new Date(post.date).toLocaleDateString()}</span>
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Share2 className="h-4 w-4 text-gray-400" />
                <Button variant="ghost" size="sm" className="p-2">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Facebook className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <div className="aspect-video overflow-hidden rounded-lg mb-12">
          <img
            src={post.image || "/placeholder.svg?height=400&width=800&query=blog post hero image"}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-semibold text-gray-900 mr-2">Tags:</span>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <img
                  src="/author-profile.png"
                  alt={post.author}
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{post.author}</h3>
                  <p className="text-blue-600 font-semibold mb-3">CEO & Founder</p>
                  <p className="text-gray-600 leading-relaxed">
                    Dr. Sarah Johnson is a visionary leader with over 15 years of experience in technology and
                    healthcare innovation. She holds a PhD in Computer Science and has led numerous successful digital
                    transformation projects in the healthcare sector.
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <Button variant="ghost" size="sm" className="p-2">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Related Articles</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Explore more insights on {post.category.toLowerCase()}.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedPost.image || "/placeholder.svg?height=240&width=400&query=related blog post"}
                      alt={relatedPost.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {relatedPost.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{relatedPost.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2 mb-2">
                      <Link href={`/blog/${relatedPost.id}`} className="hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">{relatedPost.excerpt}</p>
                    <Link
                      href={`/blog/${relatedPost.id}`}
                      className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500"
                    >
                      Read More
                      <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Get Started?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
