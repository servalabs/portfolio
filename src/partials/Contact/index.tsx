'use client'

import { useEffect, useState } from 'react'
import style from './contact.module.scss'
import { ExternalArrow } from '@/components/shared/ExternalArrow'
import { AnimatePresence, motion } from 'framer-motion'

interface EmailOption {
  label: string
  email: string
}

const emailOptions: EmailOption[] = [
  { label: 'Work Inquiry', email: 'work@priyanshu.dev' },
  { label: 'Personal', email: 'hi@priyanshu.dev' },
  { label: 'Support', email: 'support@priyanshu.dev' },
]

export default function Contact() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % emailOptions.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [isHovered])

  const current = emailOptions[activeIndex]

  return (
    <section className={style.contactSection}>
      <h2 className={style.title}>Let's Get in Touch</h2>

      <div className={style.emailContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className={style.emailSlide}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p className={style.emailType}>{current.label}</p>
            <a
              href={`mailto:${current.email}`}
              className={style.emailLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              {current.email}
              <ExternalArrow />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
