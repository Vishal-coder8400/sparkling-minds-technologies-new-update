import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import StaggerItem from "@/components/animations/stagger-item"

const navigation = {
  services: [
    { name: "AI & Machine Learning", href: "/services#ai" },
    { name: "Web Development", href: "/services#web" },
    { name: "Mobile Apps", href: "/services#mobile" },
    { name: "Cloud Solutions", href: "/services#cloud" },
    { name: "UI/UX Design", href: "/services#design" },
    { name: "Quality Assurance", href: "/services#qa" },
  ],
  industries: [
    { name: "Healthcare", href: "/industries#healthcare" },
    { name: "PropTech", href: "/industries#proptech" },
    { name: "Startups", href: "/industries#startups" },
    { name: "Enterprise", href: "/industries#enterprise" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Instagram", href: "#", icon: Instagram },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <FadeIn>
            <div className="space-y-8">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SMT</span>
                </div>
                <span className="text-xl font-bold text-white">Sparkling Minds Technologies</span>
              </div>
              <p className="text-sm leading-6 text-gray-300">
                Sparkling Minds Technologies delivers cutting-edge IT solutions that transform businesses and drive
                innovation across industries.
              </p>
              <div className="flex space-x-6">
                {navigation.social.map((item, index) => (
                  <FadeIn key={item.name} delay={index * 0.1}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-gray-300 transform hover:scale-110 transition-all duration-300"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <StaggerContainer>
                <div>
                  <StaggerItem>
                    <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                  </StaggerItem>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.services.map((item) => (
                      <StaggerItem key={item.name}>
                        <li>
                          <Link
                            href={item.href}
                            className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-300"
                          >
                            {item.name}
                          </Link>
                        </li>
                      </StaggerItem>
                    ))}
                  </ul>
                </div>
              </StaggerContainer>
              <StaggerContainer className="mt-10 md:mt-0">
                <div>
                  <StaggerItem>
                    <h3 className="text-sm font-semibold leading-6 text-white">Industries</h3>
                  </StaggerItem>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.industries.map((item) => (
                      <StaggerItem key={item.name}>
                        <li>
                          <Link
                            href={item.href}
                            className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-300"
                          >
                            {item.name}
                          </Link>
                        </li>
                      </StaggerItem>
                    ))}
                  </ul>
                </div>
              </StaggerContainer>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <StaggerContainer>
                <div>
                  <StaggerItem>
                    <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                  </StaggerItem>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <StaggerItem key={item.name}>
                        <li>
                          <Link
                            href={item.href}
                            className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-300"
                          >
                            {item.name}
                          </Link>
                        </li>
                      </StaggerItem>
                    ))}
                  </ul>
                </div>
              </StaggerContainer>
              <StaggerContainer className="mt-10 md:mt-0">
                <div>
                  <StaggerItem>
                    <h3 className="text-sm font-semibold leading-6 text-white">Contact Info</h3>
                  </StaggerItem>
                  <ul role="list" className="mt-6 space-y-4">
                    <StaggerItem>
                      <li className="flex items-center text-sm text-gray-300 hover:text-white transition-colors duration-300">
                        <Mail className="h-4 w-4 mr-2" />
                        info@sparklingminds.tech
                      </li>
                    </StaggerItem>
                    <StaggerItem>
                      <li className="flex items-center text-sm text-gray-300 hover:text-white transition-colors duration-300">
                        <Phone className="h-4 w-4 mr-2" />
                        +1 (555) 123-4567
                      </li>
                    </StaggerItem>
                    <StaggerItem>
                      <li className="flex items-start text-sm text-gray-300 hover:text-white transition-colors duration-300">
                        <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                        123 Innovation Drive, Tech City, TC 12345
                      </li>
                    </StaggerItem>
                  </ul>
                </div>
              </StaggerContainer>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <FadeIn delay={0.4}>
          <div className="mt-16 border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Subscribe to our newsletter</h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Get the latest updates on technology trends and our services.
                </p>
              </div>
              <div className="flex gap-x-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-auto bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-blue-500 transition-colors duration-300"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <Link
                href="/privacy"
                className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
              &copy; 2024 Sparkling Minds Technologies. All rights reserved.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
