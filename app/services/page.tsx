import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  Code,
  Smartphone,
  Cloud,
  Palette,
  Shield,
  ArrowRight,
  CheckCircle,
  Brain,
  Database,
  Globe,
  Zap,
} from "lucide-react"

const services = [
  {
    id: "ai",
    name: "AI & Machine Learning",
    icon: Sparkles,
    description:
      "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent solutions.",
    features: [
      "Custom AI Model Development",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics",
      "Chatbots & Virtual Assistants",
      "Machine Learning Consulting",
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "AWS SageMaker"],
    cta: "Explore AI Solutions",
  },
  {
    id: "web",
    name: "Web Development",
    icon: Code,
    description: "Modern, scalable web applications built with cutting-edge technologies and best practices.",
    features: [
      "Full-Stack Web Applications",
      "Progressive Web Apps (PWA)",
      "E-commerce Platforms",
      "Content Management Systems",
      "API Development & Integration",
      "Performance Optimization",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "GraphQL"],
    cta: "Start Your Project",
  },
  {
    id: "mobile",
    name: "Mobile Applications",
    icon: Smartphone,
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
    features: [
      "iOS & Android Development",
      "Cross-Platform Solutions",
      "Mobile UI/UX Design",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    cta: "Build Your App",
  },
  {
    id: "cloud",
    name: "Cloud Solutions",
    icon: Cloud,
    description: "Scalable cloud infrastructure and migration services that reduce costs and improve reliability.",
    features: [
      "Cloud Migration Strategy",
      "Infrastructure as Code",
      "Serverless Architecture",
      "DevOps & CI/CD",
      "Cloud Security",
      "Cost Optimization",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    cta: "Migrate to Cloud",
  },
  {
    id: "design",
    name: "UI/UX Design",
    icon: Palette,
    description: "User-centered design that creates intuitive interfaces and memorable digital experiences.",
    features: [
      "User Experience Research",
      "Interface Design",
      "Prototyping & Wireframing",
      "Design Systems",
      "Usability Testing",
      "Brand Identity",
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle"],
    cta: "Design With Us",
  },
  {
    id: "qa",
    name: "Quality Assurance",
    icon: Shield,
    description: "Comprehensive testing strategies that ensure your applications are secure, reliable, and bug-free.",
    features: [
      "Automated Testing",
      "Manual Testing",
      "Performance Testing",
      "Security Testing",
      "API Testing",
      "Test Strategy & Planning",
    ],
    technologies: ["Selenium", "Jest", "Cypress", "Postman", "JMeter"],
    cta: "Ensure Quality",
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
     <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F3FF] via-white to-[#F0F7FF]">
  <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-balance">
        Our{" "}
        <span className="bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF] bg-clip-text text-transparent">
          Services
        </span>
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600 text-pretty">
        Comprehensive IT solutions designed to accelerate your digital transformation and drive business growth.
      </p>
    </div>
  </div>
</section>


    {/* Services Grid */}
<section className="py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid gap-8 lg:grid-cols-2">
      {services.map((service) => (
        <Card
          key={service.id}
          className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4">
              {/* Gradient Icon Background */}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg 
                              bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF] shadow-md">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.name}</CardTitle>
              </div>
            </div>
            <CardDescription className="text-base text-gray-600 mt-2">
              {service.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Features */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#4E26E2] mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs border border-[#4E26E2] text-[#4E26E2] bg-[#F9F5FF]"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                className="w-full bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF] 
                           hover:from-[#1A2CCF] hover:via-[#7231EC] hover:to-[#953DF5] 
                           text-white shadow-md transform hover:scale-105 transition-all duration-300"
              >
                {service.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Process Section */}
<section className="bg-[#F9FAFB] py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
        Our Process
      </h2>
      <p className="mt-6 text-lg leading-8 text-[#4B5563]">
        A proven methodology that ensures successful project delivery and exceeds expectations.
      </p>
    </div>

    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
        {[
          {
            name: "Discovery",
            description:
              "We analyze your requirements, understand your business goals, and define project scope.",
            icon: Brain,
          },
          {
            name: "Planning",
            description:
              "Detailed project planning with timelines, milestones, and resource allocation.",
            icon: Database,
          },
          {
            name: "Development",
            description:
              "Agile development with regular updates, testing, and quality assurance.",
            icon: Globe,
          },
          {
            name: "Deployment",
            description:
              "Seamless deployment, training, and ongoing support for your success.",
            icon: Zap,
          },
        ].map((step, index) => (
          <div key={step.name} className="flex flex-col items-center text-center">
            {/* Icon Circle with Services Grid Gradient */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full 
                            bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF] text-white shadow-md mb-4">
              <step.icon className="h-8 w-8" />
            </div>

            {/* Step Title */}
            <dt className="text-base font-semibold leading-7 text-[#111827]">
              {index + 1}. {step.name}
            </dt>

            {/* Step Description */}
            <dd className="mt-2 text-base leading-7 text-[#4B5563]">
              {step.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
</section>


     {/* CTA Section */}
<section className="bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF]">
  <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Ready to Get Started?
      </h2>

      {/* Paragraph */}
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#F9F5FF]">
        Let's discuss your project requirements and create a custom solution that drives your business forward.
      </p>

      {/* Button */}
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button
          size="lg"
          className="bg-white text-[#0A1B6F] hover:bg-gray-50 shadow-md 
                     transform hover:scale-105 transition-all duration-300"
        >
          Schedule Free Consultation
        </Button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
