import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const links = [
    { label: 'Scheduler', href: '/scheduler' },
    { label: 'Driver Dashboard', href: '/driver' },
    { label: 'Calendar', href: '/calendar' },
    { label: 'History', href: '/history' },
    { label: 'Modify Page', href: '/modify/123' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Driver Scheduling</p>
        <nav className="flex flex-wrap gap-4 text-sm">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
              {l.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </footer>
  )
}
