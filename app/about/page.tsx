import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Target,
  Eye,
  Award,
  Globe,
  Lightbulb,
  Shield,
  ArrowRight,
  Calendar,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react"

const values = [
  {
    name: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
    icon: Lightbulb,
  },
  {
    name: "Excellence",
    description: "We deliver exceptional quality in every project, exceeding client expectations consistently.",
    icon: Award,
  },
  {
    name: "Integrity",
    description: "We build trust through transparency, honesty, and ethical business practices.",
    icon: Shield,
  },
  {
    name: "Collaboration",
    description: "We work as partners with our clients, fostering long-term relationships and mutual success.",
    icon: Users,
  },
]

const milestones = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Started with a vision to transform businesses through innovative technology solutions.",
  },
  {
    year: "2019",
    title: "First Major Client",
    description: "Secured our first enterprise client and delivered a successful digital transformation project.",
  },
  {
    year: "2020",
    title: "Team Expansion",
    description: "Grew to 25+ talented professionals across development, design, and consulting.",
  },
  {
    year: "2021",
    title: "AI Specialization",
    description: "Launched our AI and Machine Learning practice, becoming industry leaders in intelligent solutions.",
  },
  {
    year: "2022",
    title: "Global Reach",
    description: "Expanded operations internationally, serving clients across North America and Europe.",
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Received multiple awards for innovation and client satisfaction in the IT services sector.",
  },
  {
    year: "2024",
    title: "200+ Projects",
    description: "Celebrated delivering over 200 successful projects across various industries.",
  },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in technology and business strategy. Former VP at Fortune 500 tech company.",
    image: "/professional-woman-ceo.png",
    linkedin: "#",
    twitter: "#",
    email: "sarah@sparklingminds.tech",
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    bio: "Technical architect with expertise in AI, cloud computing, and scalable systems. PhD in Computer Science.",
    image: "/professional-cto-headshot.png",
    linkedin: "#",
    twitter: "#",
    email: "michael@sparklingminds.tech",
  },
  {
    name: "Emily Rodriguez",
    role: "VP of Engineering",
    bio: "Full-stack development expert leading our engineering teams. 12+ years building enterprise applications.",
    image: "/professional-woman-engineer-headshot.png",
    linkedin: "#",
    twitter: "#",
    email: "emily@sparklingminds.tech",
  },
  {
    name: "David Kim",
    role: "Head of Design",
    bio: "UX/UI design specialist creating intuitive digital experiences. Award-winning designer with agency background.",
    image: "/professional-man-designer-headshot.jpg",
    linkedin: "#",
    twitter: "#",
    email: "david@sparklingminds.tech",
  },
  {
    name: "Lisa Thompson",
    role: "VP of Operations",
    bio: "Operations leader ensuring project success and client satisfaction. MBA with consulting firm experience.",
    image: "/professional-woman-operations-headshot.jpg",
    linkedin: "#",
    twitter: "#",
    email: "lisa@sparklingminds.tech",
  },
  {
    name: "James Wilson",
    role: "Head of AI/ML",
    bio: "Machine learning researcher and practitioner. Former data scientist at leading tech companies.",
    image: "/professional-man-ai-researcher-headshot.jpg",
    linkedin: "#",
    twitter: "#",
    email: "james@sparklingminds.tech",
  },
]

const stats = [
  { name: "Years of Experience", value: "6+", icon: Calendar },
  { name: "Team Members", value: "50+", icon: Users },
  { name: "Countries Served", value: "15+", icon: Globe },
  { name: "Client Satisfaction", value: "98%", icon: Award },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
     {/* About Hero Section */}
<section className="relative overflow-hidden bg-gradient-to-br from-[#F9FAFB] via-white to-[#F0FDFA]">
  <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold tracking-tight text-[#111827] sm:text-6xl text-balance">
        About{" "}
        <span className="bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF] bg-clip-text text-transparent">
          Sparkling Minds
        </span>
      </h1>

      {/* Paragraph */}
      <p className="mt-6 text-lg leading-8 text-[#4B5563] text-pretty">
        We're a team of passionate technologists, designers, and strategists dedicated to transforming businesses
        through innovative digital solutions.
      </p>
    </div>
  </div>
</section>

      {/* Company Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Founded in 2018, Sparkling Minds Technologies emerged from a simple yet powerful vision: to bridge the gap
              between cutting-edge technology and real-world business challenges. Our founders, Sarah Johnson and
              Michael Chen, recognized that many organizations struggled to harness the full potential of digital
              transformation.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              What started as a small consulting firm has grown into a full-service technology partner, serving clients
              from innovative startups to Fortune 500 enterprises. We've built our reputation on delivering not just
              technical solutions, but strategic partnerships that drive measurable business outcomes.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5">
              <figure className="border-l border-blue-600 pl-8">
                <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  <p>
                    "Technology should empower people and businesses, not complicate them. That's the principle that
                    guides everything we do at Sparkling Minds."
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                  <div className="text-sm leading-6">
                    <div className="font-semibold text-gray-900">Sarah Johnson</div>
                    <div className="text-gray-600">CEO & Founder</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
              <p>
                Today, we're proud to be a trusted technology partner for organizations across healthcare, real estate,
                fintech, and enterprise sectors. Our multidisciplinary team combines deep technical expertise with
                industry knowledge to deliver solutions that not only meet current needs but anticipate future
                challenges.
              </p>
              <p className="mt-8">
                We believe in the power of collaboration, innovation, and continuous learning. Every project is an
                opportunity to push boundaries, explore new possibilities, and create lasting impact for our clients and
                their customers.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* Stats Section */}
<section className="bg-[#F9FAFB] py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <div className="text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
          Trusted by Organizations Worldwide
        </h2>

        {/* Paragraph */}
        <p className="mt-4 text-lg leading-8 text-[#4B5563]">
          Our track record speaks for itself - delivering exceptional results across industries and geographies.
        </p>
      </div>

      {/* Stats Grid */}
      <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="flex flex-col bg-white p-8 shadow-md">
            <dt className="text-sm font-semibold leading-6 text-[#4E26E2] flex items-center justify-center gap-2">
              <stat.icon className="h-5 w-5 text-[#0A1B6F]" />
              {stat.name}
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-[#111827]">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
</section>


    {/* Mission & Vision Section */}
<section className="py-24 sm:py-32 bg-[#F9FAFB]">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    {/* Heading */}
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
        Mission & Vision
      </h2>
      <p className="mt-6 text-lg leading-8 text-[#4B5563]">
        Our purpose and aspirations guide every decision we make and every solution we create.
      </p>
    </div>

    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        
        {/* Mission Card */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF] shadow-md">
                <Target className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-[#111827]">Our Mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-[#4B5563] leading-7">
              To empower organizations with innovative technology solutions that drive growth, efficiency, and
              competitive advantage. We're committed to delivering exceptional value through strategic
              partnerships, technical excellence, and unwavering dedication to our clients' success.
            </p>
          </CardContent>
        </Card>

        {/* Vision Card */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF] shadow-md">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-[#111827]">Our Vision</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-[#4B5563] leading-7">
              To be the world's most trusted technology partner, recognized for transforming businesses through
              innovative solutions, exceptional service, and lasting relationships. We envision a future where
              technology seamlessly enhances human potential and business success.
            </p>
          </CardContent>
        </Card>

      </dl>
    </div>
  </div>
</section>


     {/* Values Section */}
<section className="bg-[#F9FAFB] py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    {/* Heading */}
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
        Our Values
      </h2>
      <p className="mt-6 text-lg leading-8 text-[#4B5563]">
        The principles that define our culture and guide our relationships with clients, partners, and each other.
      </p>
    </div>

    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        {values.map((value) => (
          <div key={value.name} className="flex flex-col bg-white p-6 rounded-lg shadow-md">
            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#0A1B6F]">
              <value.icon className="h-5 w-5 flex-none text-[#4E26E2]" aria-hidden="true" />
              {value.name}
            </dt>
            <dd className="mt-4 text-base leading-7 text-[#4B5563]">
              {value.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
</section>

{/* Timeline Section */}
<section className="py-24 sm:py-32 bg-[#F9FAFB]">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    {/* Heading */}
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
        Our Journey
      </h2>
      <p className="mt-6 text-lg leading-8 text-[#4B5563]">
        Key milestones that have shaped our growth and success over the years.
      </p>
    </div>

    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <div key={milestone.year} className="relative flex gap-x-4">
            {/* Timeline Marker */}
            <div className="relative flex h-6 w-6 flex-none items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF]" />
              {index !== milestones.length - 1 && (
                <div className="absolute top-6 h-full w-px bg-gradient-to-b from-[#0A1B6F] via-[#4E26E2] to-[#B948FF]" aria-hidden="true" />
              )}
            </div>

            {/* Timeline Content */}
            <div className="flex-auto bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-x-2 mb-2">
                <Badge variant="outline" className="text-[#4E26E2] border-[#4E26E2]">
                  {milestone.year}
                </Badge>
                <h3 className="text-sm font-semibold leading-6 text-[#111827]">
                  {milestone.title}
                </h3>
              </div>
              <p className="text-sm leading-6 text-[#4B5563]">
                {milestone.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


   {/* Team Section */}
<section className="bg-[#F9FAFB] py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    {/* Heading */}
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
        Meet Our Leadership Team
      </h2>
      <p className="mt-6 text-lg leading-8 text-[#4B5563]">
        Experienced leaders driving innovation and excellence in everything we do.
      </p>
    </div>

    {/* Team Grid */}
    <ul
      role="list"
      className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      {team.map((person) => (
        <li key={person.name}>
          <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg">
            <CardContent className="p-6">
              <img
                className="mx-auto h-32 w-32 rounded-full object-cover border-2 border-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF]"
                src={person.image || "/placeholder.svg"}
                alt={person.name}
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-[#111827] text-center">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-[#4E26E2] text-center">{person.role}</p>
              <p className="mt-4 text-sm leading-6 text-[#4B5563] text-center">{person.bio}</p>
              <div className="mt-6 flex justify-center gap-x-6">
                <a href={person.linkedin} className="text-gray-400 hover:text-[#4E26E2]">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={person.twitter} className="text-gray-400 hover:text-[#4E26E2]">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-5 w-5" />
                </a>
                <a href={`mailto:${person.email}`} className="text-gray-400 hover:text-[#4E26E2]">
                  <span className="sr-only">Email</span>
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  </div>
</section>


    {/* CTA Section */}
<section className="bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF]">
  <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Ready to Work Together?
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#E0E7FF]">
        Let's discuss how our team can help transform your business with innovative technology solutions.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-[#0A1B6F] hover:bg-gray-50 hover:text-[#4E26E2] shadow-md transform hover:scale-105 transition-all duration-300"
        >
          Get in Touch
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
