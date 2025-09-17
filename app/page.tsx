"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Code,
  Smartphone,
  Cloud,
  Palette,
  Shield,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  Target,
  Rocket,
} from "lucide-react"
import { motion } from "framer-motion"

export default function HomePage() {
    const logos = [
    { src: "/images/logo-microsoft.jpg", alt: "Microsoft" },
    { src: "/images/logo-google.jpg", alt: "Google" },
    { src: "/images/logo-amazon.jpg", alt: "Amazon" },
    { src: "/images/logo-netflix.jpg", alt: "Netflix" },
    { src: "/images/logo-spotify.jpg", alt: "Spotify" },
  ]
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-14 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            {/* Left side - Content */}
            <div className="animate-slide-in-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-balance">
                IT Solutions for Software Companies
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 text-pretty">
                Transform your business with cutting-edge technology solutions. We deliver enterprise-grade AI, web
                development, and cloud services that drive innovation and accelerate growth.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button
                  size="lg"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-lg font-semibold shadow-sm border-0"
                >
                  Get started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-900 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold bg-white"
                >
                  Speak to Sales
                </Button>
              </div>
            </div>

            {/* Right side - Product mockup */}
            <div className="animate-slide-in-right">
              <div className="relative mx-auto w-full max-w-lg">
                <div className="clean-card p-8 transform rotate-3 hover:rotate-1 transition-transform duration-300">
                  <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 p-6">
                    <img
                      src="/images/hero-dashboard.jpg"
                      alt="Modern software dashboard interface"
                      className="h-full w-full rounded-md object-cover shadow-sm border border-gray-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Trusted by leading companies
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
            Powering innovation worldwide
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="mx-auto mt-14 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-10 lg:gap-y-12 max-w-xl lg:max-w-none">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.alt}
              className="flex justify-center items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              animate={{ y: [0, -12, 0] }}   // floating up & down
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3, // stagger each logo
              }}
            >
              <motion.img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto sm:h-14 lg:h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive IT Solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From concept to deployment, we provide end-to-end technology services that transform your business vision
              into reality.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: "AI & Machine Learning",
                  description:
                    "Intelligent solutions that automate processes, predict outcomes, and enhance decision-making capabilities.",
                  icon: Sparkles,
                },
                {
                  name: "Web Development",
                  description:
                    "Modern, responsive web applications built with cutting-edge frameworks and optimized for performance.",
                  icon: Code,
                },
                {
                  name: "Mobile Applications",
                  description:
                    "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
                  icon: Smartphone,
                },
                {
                  name: "Cloud Solutions",
                  description:
                    "Scalable cloud infrastructure and migration services that reduce costs and improve reliability.",
                  icon: Cloud,
                },
                {
                  name: "UI/UX Design",
                  description:
                    "User-centered design that creates intuitive interfaces and memorable digital experiences.",
                  icon: Palette,
                },
                {
                  name: "Quality Assurance",
                  description:
                    "Comprehensive testing strategies that ensure your applications are secure, reliable, and bug-free.",
                  icon: Shield,
                },
              ].map((service) => (
                <div key={service.name} className="clean-card p-8 group">
                  <div className="flex items-center gap-x-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 group-hover:bg-indigo-500 transition-colors">
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 leading-7">{service.description}</p>
                  <div className="mt-6">
                    <Link
                      href="/services"
                      className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-colors"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Projects Delivered", value: "500+", icon: Award },
              { label: "Happy Clients", value: "200+", icon: Users },
              { label: "Years Experience", value: "8+", icon: TrendingUp },
              { label: "Success Rate", value: "98%", icon: CheckCircle },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Clients Say</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Don't just take our word for it. Here's what industry leaders say about working with us.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                content:
                  "SMT transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 300% and reduced operational costs significantly.",
                author: "Sarah Johnson",
                role: "CTO, TechCorp",
                rating: 5,
              },
              {
                content:
                  "The mobile app they developed exceeded our expectations. User engagement increased by 250% within the first month of launch.",
                author: "Michael Chen",
                role: "CEO, StartupXYZ",
                rating: 5,
              },
              {
                content:
                  "Professional, reliable, and innovative. SMT delivered our cloud migration project on time and under budget with zero downtime.",
                author: "Emily Rodriguez",
                role: "IT Director, Enterprise Inc",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="clean-card p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-900 leading-7 mb-6">"{testimonial.content}"</blockquote>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600 font-semibold text-sm">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Case Studies</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Success Stories</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Real results from real projects. See how we've helped businesses transform and grow.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="clean-card overflow-hidden">
              <div className="aspect-[16/9] bg-gray-100">
                <img
                  src="/images/ai-technology.jpg"
                  alt="AI automation dashboard"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">
                    AI & Automation
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">E-commerce AI Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Implemented machine learning algorithms that increased conversion rates by 45% and reduced cart
                  abandonment by 30% for a major retail client.
                </p>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-500 font-semibold"
                >
                  Read full case study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="clean-card overflow-hidden">
              <div className="aspect-[16/9] bg-gray-100">
                <img
                  src="/images/mobile-app-mockup.jpg"
                  alt="Mobile app interface"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                    Mobile Development
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">FinTech Mobile Platform</h3>
                <p className="text-gray-600 mb-4">
                  Developed a secure mobile banking app that processed over $10M in transactions within the first
                  quarter, with 99.9% uptime.
                </p>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-500 font-semibold"
                >
                  Read full case study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Technology Stack</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cutting-Edge Technologies
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We use the latest and most reliable technologies to build scalable, secure, and high-performance
              solutions.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-6">
            {[
              { name: "React", category: "Frontend" },
              { name: "Node.js", category: "Backend" },
              { name: "Python", category: "AI/ML" },
              { name: "AWS", category: "Cloud" },
              { name: "Docker", category: "DevOps" },
              { name: "MongoDB", category: "Database" },
              { name: "TypeScript", category: "Language" },
              { name: "Next.js", category: "Framework" },
              { name: "TensorFlow", category: "AI/ML" },
              { name: "Kubernetes", category: "DevOps" },
              { name: "PostgreSQL", category: "Database" },
              { name: "GraphQL", category: "API" },
            ].map((tech, index) => (
              <div key={index} className="clean-card p-6 text-center group hover:scale-105 transition-transform">
                <div className="h-12 w-12 mx-auto mb-3 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <Code className="h-6 w-6 text-indigo-600 group-hover:text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{tech.name}</h3>
                <p className="text-xs text-gray-600 mt-1">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Process</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How We Work</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our proven methodology ensures successful project delivery from concept to deployment.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your requirements, understand your business goals, and define project scope.",
                icon: Target,
              },
              {
                step: "02",
                title: "Planning",
                description: "Create detailed project roadmap, technical architecture, and timeline with milestones.",
                icon: Zap,
              },
              {
                step: "03",
                title: "Development",
                description: "Agile development with regular updates, testing, and continuous integration practices.",
                icon: Code,
              },
              {
                step: "04",
                title: "Launch",
                description: "Deployment, monitoring, and ongoing support to ensure optimal performance.",
                icon: Rocket,
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-white">
                      <process.icon className="h-8 w-8" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-xs font-bold text-indigo-600">{process.step}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-6">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 border-t border-gray-200">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Let's discuss how our expertise can help you achieve your technology goals and drive innovation in your
              industry.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-lg font-semibold shadow-sm border-0"
              >
                Schedule Free Consultation
              </Button>
              <Link
                href="/contact"
                className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500 transition-colors"
              >
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
