import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Features from './components/Features'
import DriverTools from './components/DriverTools'
import HowItWorks from './components/HowItWorks'
import Mockups from './components/Mockups'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function Landing() {
  const featuresRef = useRef(null)
  const handleCTAClick = () => {
    const el = document.getElementById('features')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      <Hero onCTAClick={handleCTAClick} />
      <Features ref={featuresRef} />
      <DriverTools />
      <HowItWorks />
      <Mockups />
      <FAQ />
      <Footer />
    </div>
  )
}
