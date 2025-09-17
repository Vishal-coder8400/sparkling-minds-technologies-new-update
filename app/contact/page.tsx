"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar, Users, ArrowRight, CheckCircle } from "lucide-react"

const contactMethods = [
  {
    name: "General Inquiries",
    description: "Questions about our services or company",
    icon: MessageSquare,
    contact: "info@sparklingminds.tech",
    phone: "+1 (555) 123-4567",
  },
  {
    name: "New Projects",
    description: "Ready to start your next project?",
    icon: Users,
    contact: "projects@sparklingminds.tech",
    phone: "+1 (555) 123-4568",
  },
  {
    name: "Schedule a Call",
    description: "Book a consultation with our experts",
    icon: Calendar,
    contact: "meetings@sparklingminds.tech",
    phone: "+1 (555) 123-4569",
  },
]

const offices = [
  {
    city: "New York",
    address: "123 Innovation Drive, Tech City, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "ny@sparklingminds.tech",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM EST",
  },
  {
    city: "San Francisco",
    address: "456 Silicon Valley Blvd, San Francisco, CA 94105",
    phone: "+1 (555) 987-6543",
    email: "sf@sparklingminds.tech",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM PST",
  },
  {
    city: "Austin",
    address: "789 Tech Hub Lane, Austin, TX 73301",
    phone: "+1 (555) 456-7890",
    email: "austin@sparklingminds.tech",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM CST",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    projectType: "",
    budget: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
        projectType: "",
        budget: "",
      })
    }, 3000)
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-balance">
              Get In{" "}
               <span className="bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF] bg-clip-text text-transparent">
          Touch
        </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-pretty">
              Ready to transform your business with innovative technology? Let's discuss your project and explore how we
              can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

     {/* Contact Methods */}
<section className="py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        How Can We Help?
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Choose the best way to reach us based on your needs.
      </p>
    </div>
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        {contactMethods.map((method) => (
          <Card key={method.name} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF] text-white mx-auto mb-4">
                <method.icon className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">{method.name}</CardTitle>
              <CardDescription className="text-gray-600">{method.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <div className="flex items-center justify-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2 text-[#0A1B6F]" />
                <a href={`mailto:${method.contact}`} className="hover:text-[#0A1B6F]">
                  {method.contact}
                </a>
              </div>
              <div className="flex items-center justify-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2 text-[#0A1B6F]" />
                <a href={`tel:${method.phone}`} className="hover:text-[#0A1B6F]">
                  {method.phone}
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </dl>
    </div>
  </div>
</section>


    {/* Contact Form and Map */}
<section className="bg-gray-50 py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Contact Form */}
      <div>
        <div className="mx-auto max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">Send Us a Message</h2>
          {isSubmitted ? (
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#4E26E2] focus:outline-none focus:ring-1 focus:ring-[#4E26E2]"
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="ai-ml">AI/ML Solutions</option>
                        <option value="cloud-solutions">Cloud Solutions</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="consulting">Consulting</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#4E26E2] focus:outline-none focus:ring-1 focus:ring-[#4E26E2]"
                      >
                        <option value="">Select budget</option>
                        <option value="under-25k">Under $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="over-250k">Over $250,000</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF]
                               hover:from-[#1A2CCF] hover:via-[#7231EC] hover:to-[#953DF5]
                               text-white shadow-md transform hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Office Locations */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">Our Offices</h2>
        <div className="space-y-6">
          {offices.map((office) => (
            <Card key={office.city} className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{office.city}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-[#0A1B6F]" />
                  <span>{office.address}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2 text-[#0A1B6F]" />
                  <a href={`tel:${office.phone}`} className="hover:text-[#0A1B6F]">
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2 text-[#0A1B6F]" />
                  <a href={`mailto:${office.email}`} className="hover:text-[#0A1B6F]">
                    {office.email}
                  </a>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2 text-[#0A1B6F]" />
                  <span>{office.hours}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="mt-8">
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-[#0A1B6F] mx-auto mb-2" />
                <p className="text-gray-500">Interactive Map</p>
                <p className="text-sm text-gray-400">Google Maps integration would go here</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quick answers to common questions about our services and process.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {[
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Project timelines vary based on complexity and scope. Simple websites take 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.",
                },
                {
                  question: "Do you work with startups?",
                  answer:
                    "We love working with startups and offer flexible engagement models, including equity partnerships for early-stage companies with promising potential.",
                },
                {
                  question: "What technologies do you specialize in?",
                  answer:
                    "We specialize in modern web technologies (React, Next.js, Node.js), mobile development (React Native, Flutter), AI/ML (Python, TensorFlow), and cloud platforms (AWS, Azure, GCP).",
                },
                {
                  question: "Do you provide ongoing support?",
                  answer:
                    "Yes, we offer comprehensive support and maintenance packages to ensure your applications remain secure, updated, and performing optimally after launch.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF]">
  <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Ready to Start Your Project?
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
        Schedule a free consultation to discuss your project requirements and learn how we can help bring your
        vision to life.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button
          size="lg"
          className="bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF]
                     hover:from-[#1A2CCF] hover:via-[#7231EC] hover:to-[#953DF5]
                     text-white shadow-md transform hover:scale-105 transition-all duration-300"
        >
          Schedule Free Consultation
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
