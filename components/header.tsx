"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="sr-only">Sparkling Minds Technologies</span>
            <div className="flex items-center gap-3">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Image className="h-10 w-auto" src="/images/smt-logo.png" alt="SMT Logo" width={120} height={40} />
              </motion.div>
              {/* Brand Gradient Title */}
              <span className="text-xl font-bold bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF] bg-clip-text text-transparent">
                SMT
              </span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-transparent bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF] bg-clip-text transition-colors duration-300 relative group"
              >
                {item.name}
                {/* Underline with brand gradient */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Desktop CTA Button with brand gradient */}
            <Button className="bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF] 
              hover:from-[#1A2CCF] hover:via-[#7231EC] hover:to-[#953DF5] 
              text-white font-semibold px-6 py-3 rounded-xl shadow-lg 
              transform hover:scale-105 transition-all duration-300">
              Get Free Consultation
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Sparkling Minds Technologies</span>
                  <div className="flex items-center gap-2">
                    <Image className="h-8 w-auto" src="/images/smt-logo.png" alt="SMT Logo" width={96} height={32} />
                    {/* Mobile Logo Title with brand gradient */}
                    <span className="text-lg font-bold bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF] bg-clip-text text-transparent">
                      SMT
                    </span>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-transparent bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF] bg-clip-text transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    className="py-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                  >
                    {/* Mobile CTA Button with brand gradient */}
                    <Button className="w-full bg-gradient-to-r from-[#0A1B6F] via-[#4E26E2] to-[#B948FF] 
                      hover:from-[#1A2CCF] hover:via-[#7231EC] hover:to-[#953DF5] 
                      text-white font-semibold px-6 py-3 rounded-xl shadow-lg 
                      transform hover:scale-105 transition-all duration-300">
                      Get Free Consultation
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
