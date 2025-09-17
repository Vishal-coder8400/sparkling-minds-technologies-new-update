"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Search,
  Filter,
  ArrowRight,
  Heart,
  Coffee,
  Zap,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react"

// Mock job data
const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / New York",
    type: "Full-time",
    salary: "$120k - $160k",
    experience: "5+ years",
    description:
      "Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.",
    requirements: [
      "5+ years of full-stack development experience",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong understanding of database design and optimization",
      "Experience with CI/CD pipelines and DevOps practices",
    ],
    benefits: ["Health Insurance", "Remote Work", "Stock Options", "Learning Budget"],
    posted: "2024-01-10",
  },
  {
    id: 2,
    title: "AI/ML Engineer",
    department: "AI Research",
    location: "San Francisco / Remote",
    type: "Full-time",
    salary: "$140k - $180k",
    experience: "3+ years",
    description:
      "Develop cutting-edge AI solutions for healthcare and enterprise clients using machine learning and deep learning techniques.",
    requirements: [
      "MS/PhD in Computer Science, AI, or related field",
      "3+ years of experience in machine learning",
      "Proficiency in Python, TensorFlow, and PyTorch",
      "Experience with NLP and computer vision",
      "Strong mathematical and statistical background",
    ],
    benefits: ["Health Insurance", "Research Budget", "Conference Attendance", "Flexible Hours"],
    posted: "2024-01-08",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    department: "Design",
    location: "Los Angeles / Remote",
    type: "Full-time",
    salary: "$90k - $120k",
    experience: "3+ years",
    description:
      "Create intuitive and beautiful user experiences for web and mobile applications across various industries.",
    requirements: [
      "3+ years of UX/UI design experience",
      "Proficiency in Figma, Sketch, and Adobe Creative Suite",
      "Strong portfolio demonstrating design thinking",
      "Experience with user research and usability testing",
      "Understanding of front-end development principles",
    ],
    benefits: ["Health Insurance", "Design Tools Budget", "Remote Work", "Creative Freedom"],
    posted: "2024-01-05",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Austin / Remote",
    type: "Full-time",
    salary: "$110k - $140k",
    experience: "4+ years",
    description:
      "Build and maintain scalable infrastructure and deployment pipelines for our growing portfolio of applications.",
    requirements: [
      "4+ years of DevOps/Infrastructure experience",
      "Expertise in Docker, Kubernetes, and cloud platforms",
      "Experience with Infrastructure as Code (Terraform, CloudFormation)",
      "Strong scripting skills (Python, Bash)",
      "Knowledge of monitoring and logging tools",
    ],
    benefits: ["Health Insurance", "Remote Work", "Tech Budget", "Certification Support"],
    posted: "2024-01-03",
  },
  {
    id: 5,
    title: "Product Manager",
    department: "Product",
    location: "Chicago / Remote",
    type: "Full-time",
    salary: "$100k - $130k",
    experience: "4+ years",
    description:
      "Lead product strategy and development for our enterprise software solutions, working closely with engineering and design teams.",
    requirements: [
      "4+ years of product management experience",
      "Experience with B2B/Enterprise software",
      "Strong analytical and problem-solving skills",
      "Excellent communication and leadership abilities",
      "Understanding of agile development methodologies",
    ],
    benefits: ["Health Insurance", "Remote Work", "Stock Options", "Professional Development"],
    posted: "2023-12-28",
  },
  {
    id: 6,
    title: "Junior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$70k - $90k",
    experience: "1-2 years",
    description:
      "Start your career with us building modern web applications using React and TypeScript in a supportive, learning-focused environment.",
    requirements: [
      "1-2 years of frontend development experience",
      "Proficiency in JavaScript, React, and CSS",
      "Understanding of responsive design principles",
      "Familiarity with version control (Git)",
      "Eagerness to learn and grow",
    ],
    benefits: ["Health Insurance", "Mentorship Program", "Learning Budget", "Remote Work"],
    posted: "2023-12-25",
  },
]

const departments = ["All", "Engineering", "AI Research", "Design", "Infrastructure", "Product"]
const locations = ["All", "Remote", "New York", "San Francisco", "Los Angeles", "Austin", "Chicago"]

const benefits = [
  { name: "Competitive Salary", icon: DollarSign, description: "Market-leading compensation packages" },
  { name: "Health & Wellness", icon: Heart, description: "Comprehensive health, dental, and vision insurance" },
  { name: "Remote Flexibility", icon: Zap, description: "Work from anywhere with flexible hours" },
  { name: "Learning Budget", icon: GraduationCap, description: "$3,000 annual budget for courses and conferences" },
  { name: "Stock Options", icon: Award, description: "Equity participation in company growth" },
  { name: "Great Culture", icon: Coffee, description: "Collaborative, inclusive, and fun work environment" },
]

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const [selectedLocation, setSelectedLocation] = useState("All")

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment
    const matchesLocation = selectedLocation === "All" || job.location.includes(selectedLocation)
    return matchesSearch && matchesDepartment && matchesLocation
  })

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-balance">
              Join Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-pretty">
              Build the future of technology with passionate professionals who are transforming businesses worldwide.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
              >
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Work With Us?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We believe in creating an environment where talented people can do their best work.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.name} className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white mb-4">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">{benefit.name}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600 text-center">{benefit.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Department:</span>
                <div className="flex flex-wrap gap-2">
                  {departments.map((dept) => (
                    <Button
                      key={dept}
                      variant={selectedDepartment === dept ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedDepartment(dept)}
                      className={selectedDepartment === dept ? "bg-gradient-to-r from-blue-600 to-teal-600" : ""}
                    >
                      {dept}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">Location:</span>
                <div className="flex flex-wrap gap-2">
                  {locations.map((location) => (
                    <Button
                      key={location}
                      variant={selectedLocation === location ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedLocation(location)}
                      className={selectedLocation === location ? "bg-gradient-to-r from-blue-600 to-teal-600" : ""}
                    >
                      {location}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Open Positions</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {filteredJobs.length} position{filteredJobs.length !== 1 ? "s" : ""} available
            </p>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No positions found matching your criteria.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-gray-900 mb-2">{job.title}</CardTitle>
                        <CardDescription className="text-gray-600 mb-4">{job.description}</CardDescription>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {job.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {job.salary}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {job.experience}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant="secondary">{job.department}</Badge>
                        <span className="text-xs text-gray-500">
                          Posted {new Date(job.posted).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.benefits.map((benefit) => (
                          <Badge key={benefit} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 flex items-center justify-between">
                      <Button
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                      >
                        View Details
                      </Button>
                      <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Life at SMT Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Life at SMT</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover what makes our workplace special through the eyes of our team members.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                quote:
                  "The collaborative environment and cutting-edge projects make every day exciting. I've grown more in my first year here than in my previous three years combined.",
                author: "Alex Chen",
                role: "Senior Developer",
                image: "/team-member-1.jpg",
              },
              {
                quote:
                  "SMT truly values work-life balance. The flexibility to work remotely while being part of such an innovative team is incredible.",
                author: "Maria Rodriguez",
                role: "UX Designer",
                image: "/team-member-2.jpg",
              },
              {
                quote:
                  "The learning opportunities are endless. From conferences to internal tech talks, SMT invests in our professional development.",
                author: "David Park",
                role: "DevOps Engineer",
                image: "/team-member-3.jpg",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <blockquote className="text-gray-600 mb-6">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg?height=48&width=48&query=team member"}
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Join Our Team?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Don't see the perfect role? We're always looking for talented individuals to join our growing team.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50">
                Send Us Your Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
