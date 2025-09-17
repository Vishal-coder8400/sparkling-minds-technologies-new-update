"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Calendar, User, ArrowRight, Filter } from "lucide-react"

// Mock blog data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Healthcare: Transforming Patient Care",
    excerpt:
      "Explore how artificial intelligence is revolutionizing healthcare delivery, from diagnostic tools to personalized treatment plans.",
    content: "Full article content would go here...",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    category: "AI & Healthcare",
    tags: ["AI", "Healthcare", "Innovation"],
    image: "/ai-healthcare-blog.jpg",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Building Scalable Web Applications with Next.js 14",
    excerpt:
      "Learn best practices for developing high-performance web applications using the latest Next.js features and optimizations.",
    content: "Full article content would go here...",
    author: "Michael Chen",
    date: "2024-01-10",
    category: "Web Development",
    tags: ["Next.js", "React", "Performance"],
    image: "/nextjs-development-blog.jpg",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "PropTech Revolution: Smart Buildings and IoT Integration",
    excerpt:
      "Discover how Internet of Things technology is transforming real estate management and creating smarter, more efficient buildings.",
    content: "Full article content would go here...",
    author: "Emily Rodriguez",
    date: "2024-01-05",
    category: "PropTech",
    tags: ["IoT", "Real Estate", "Smart Buildings"],
    image: "/proptech-iot-blog.jpg",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Cloud Migration Strategies for Enterprise Applications",
    excerpt:
      "A comprehensive guide to planning and executing successful cloud migrations for large-scale enterprise systems.",
    content: "Full article content would go here...",
    author: "David Kim",
    date: "2023-12-28",
    category: "Cloud Computing",
    tags: ["Cloud", "Enterprise", "Migration"],
    image: "/cloud-migration-blog.jpg",
    readTime: "15 min read",
  },
  {
    id: 5,
    title: "UX Design Trends Shaping Digital Experiences in 2024",
    excerpt:
      "Explore the latest user experience design trends that are defining how users interact with digital products and services.",
    content: "Full article content would go here...",
    author: "Lisa Thompson",
    date: "2023-12-20",
    category: "Design",
    tags: ["UX", "Design", "Trends"],
    image: "/ux-design-trends-blog.jpg",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "Cybersecurity Best Practices for Modern Applications",
    excerpt:
      "Essential security measures and practices to protect your applications and data from evolving cyber threats.",
    content: "Full article content would go here...",
    author: "James Wilson",
    date: "2023-12-15",
    category: "Security",
    tags: ["Security", "Best Practices", "Applications"],
    image: "/cybersecurity-blog.jpg",
    readTime: "11 min read",
  },
]

const categories = ["All", "AI & Healthcare", "Web Development", "PropTech", "Cloud Computing", "Design", "Security"]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="bg-white">
    {/* Hero Section */}
<section className="relative overflow-hidden bg-gradient-to-br from-[#E5E7FF] via-white to-[#D0F5F2]">
  <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Our{' '}
        <span className="bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF] bg-clip-text text-transparent">
          Blog
        </span>
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Insights, trends, and expertise from our team of technology professionals. Stay updated with the latest in
        digital innovation.
      </p>
    </div>
  </div>
</section>


    {/* Search and Filter */}
<section className="py-12 bg-gradient-to-br from-[#E5E7FF] via-white to-[#D0F5F2]">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-gray-600" />
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
           <Button
  key={category}
  variant={selectedCategory === category ? "default" : "outline"}
  size="sm"
  onClick={() => setSelectedCategory(category)}
  className={
    selectedCategory === category
      ? "bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF] text-white"
      : "border border-[#4E26E2] text-[#4E26E2] bg-white hover:bg-[#4E26E2] hover:text-white"
  }
>
  {category}
</Button>

          ))}
        </div>
      </div>
    </div>
  </div>
</section>

     {/* Blog Posts Grid */}
<section className="py-24 sm:py-32 bg-gradient-to-br from-[#E5E7FF] via-white to-[#D0F5F2]">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    {filteredPosts.length === 0 ? (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No articles found matching your search criteria.</p>
      </div>
    ) : (
      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {filteredPosts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-[1.02] transform"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={post.image || "/placeholder.svg?height=240&width=400&query=blog post image"}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <Badge
                  variant="secondary"
                  className="text-xs bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF] text-white"
                >
                  {post.category}
                </Badge>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#0A1B6F] hover:via-[#4E26E2] hover:to-[#B948FF] transition-all">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </CardTitle>
              <CardDescription className="text-gray-600 line-clamp-3">{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mt-4">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs border-[#4E26E2] text-[#4E26E2] bg-[#F9F5FF]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-sm font-semibold text-white bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF] px-3 py-1 rounded shadow hover:scale-105 transition-transform"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )}

    {/* Pagination */}
    {filteredPosts.length > 6 && (
      <div className="mt-16 flex justify-center">
        <Button
          variant="outline"
          size="lg"
          className="border-[#4E26E2] text-[#4E26E2] hover:bg-gradient-to-r hover:from-[#0A1B6F] hover:via-[#4E26E2] hover:to-[#B948FF] hover:text-white"
        >
          Load More Articles
        </Button>
      </div>
    )}
  </div>
</section>

    {/* Newsletter Signup */}
<section className="bg-gradient-to-br from-[#0A1B6F] via-[#4E26E2] to-[#B948FF]">
  <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Stay Updated
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
        Subscribe to our newsletter and get the latest insights delivered directly to your inbox.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:ring-2 focus:ring-[#4E26E2] focus:border-transparent"
        />
        <Button
          variant="secondary"
          className="bg-white text-[#0A1B6F] hover:bg-gradient-to-r hover:from-[#0A1B6F] hover:via-[#4E26E2] hover:to-[#B948FF] hover:text-white transition-all duration-300"
        >
          Subscribe
        </Button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
