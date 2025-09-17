import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Building,
  Rocket,
  Building2,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react"

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
    description: "Transforming healthcare delivery with secure, compliant, and innovative technology solutions.",
    challenges: [
      "Patient data security and HIPAA compliance",
      "Interoperability between systems",
      "Telemedicine and remote care",
      "Electronic health records (EHR)",
      "Medical device integration",
      "Healthcare analytics and reporting",
    ],
    solutions: [
      "HIPAA-compliant web and mobile applications",
      "Telemedicine platforms",
      "Patient portal development",
      "Healthcare data analytics",
      "Medical device software",
      "EHR system integration",
    ],
    technologies: ["HL7 FHIR", "AWS HIPAA", "React", "Node.js", "MongoDB"],
    caseStudy: "Developed a comprehensive telemedicine platform that increased patient engagement by 300%",
  },
  {
    id: "proptech",
    name: "PropTech / Real Estate",
    icon: Building,
    description: "Revolutionizing real estate with smart property management and innovative PropTech solutions.",
    challenges: [
      "Property management automation",
      "Virtual property tours and showcasing",
      "Real estate CRM and lead management",
      "Market analysis and pricing tools",
      "Tenant and landlord portals",
      "Smart building integration",
    ],
    solutions: [
      "Property management platforms",
      "Virtual reality property tours",
      "Real estate marketplace development",
      "IoT-enabled smart building solutions",
      "Automated valuation models (AVM)",
      "Tenant screening and management systems",
    ],
    technologies: ["React Native", "IoT", "AI/ML", "Blockchain", "AR/VR"],
    caseStudy: "Built a smart property management system that reduced operational costs by 40%",
  },
  {
    id: "startups",
    name: "Startups",
    icon: Rocket,
    description: "Empowering startups with scalable technology solutions that grow with your business.",
    challenges: [
      "Limited budget and resources",
      "Rapid prototyping and MVP development",
      "Scalable architecture planning",
      "Time-to-market pressure",
      "Technical team building",
      "Investor-ready product development",
    ],
    solutions: [
      "MVP development and rapid prototyping",
      "Scalable cloud architecture",
      "Technical consulting and CTO services",
      "Full-stack development teams",
      "Product strategy and roadmap planning",
      "Investor pitch deck technical sections",
    ],
    technologies: ["Next.js", "Vercel", "Supabase", "Stripe", "Firebase"],
    caseStudy: "Helped a fintech startup launch their MVP in 8 weeks, securing $2M in Series A funding",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Building2,
    description: "Enterprise-grade solutions that modernize legacy systems and drive digital transformation.",
    challenges: [
      "Legacy system modernization",
      "Enterprise security and compliance",
      "Large-scale system integration",
      "Change management and adoption",
      "Performance and scalability",
      "Multi-location deployment",
    ],
    solutions: [
      "Legacy system migration and modernization",
      "Enterprise application development",
      "System integration and API development",
      "Cloud migration and infrastructure",
      "Enterprise security implementation",
      "Custom ERP and CRM solutions",
    ],
    technologies: ["Microservices", "Kubernetes", "Enterprise APIs", "SSO", "Azure"],
    caseStudy: "Modernized a Fortune 500 company's legacy system, improving efficiency by 60%",
  },
]

const stats = [
  { name: "Industries Served", value: "15+", icon: Building2 },
  { name: "Successful Projects", value: "200+", icon: CheckCircle },
  { name: "Client Satisfaction", value: "98%", icon: Users },
  { name: "Average ROI Increase", value: "150%", icon: TrendingUp },
]

export default function IndustriesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-balance">
              Industries We{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Serve</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-pretty">
              Deep industry expertise combined with cutting-edge technology to solve your unique business challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600 flex items-center justify-center gap-2">
                  <stat.icon className="h-5 w-5 text-blue-600" />
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Specialized Industry Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We understand the unique challenges and opportunities in each industry we serve.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {industries.map((industry) => (
              <Card
                key={industry.id}
                className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-teal-600">
                      <industry.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">{industry.name}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base text-gray-600 mt-2">{industry.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Challenges */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-red-500" />
                      Key Challenges
                    </h4>
                    <ul className="space-y-1">
                      {industry.challenges.slice(0, 3).map((challenge) => (
                        <li key={challenge} className="flex items-start text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-green-500" />
                      Our Solutions
                    </h4>
                    <ul className="space-y-1">
                      {industry.solutions.slice(0, 3).map((solution) => (
                        <li key={solution} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Success Story</h4>
                    <p className="text-sm text-gray-700">{industry.caseStudy}</p>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white">
                      Learn More About {industry.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Industry Leaders Choose SMT
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our deep industry knowledge combined with technical expertise delivers exceptional results.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: "Industry Expertise",
                  description: "Deep understanding of industry-specific challenges, regulations, and best practices.",
                },
                {
                  name: "Proven Track Record",
                  description: "200+ successful projects across multiple industries with measurable business impact.",
                },
                {
                  name: "End-to-End Solutions",
                  description: "From strategy and design to development and ongoing support, we handle it all.",
                },
              ].map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">{feature.name}</dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Industry?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Let's discuss how our industry expertise can help solve your unique business challenges.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50">
                Schedule Industry Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
