'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    terms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formspree.io/f/xrbreyyw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          topic: formData.topic,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          topic: '',
          message: '',
          terms: false,
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-5 lg:py-32 scroll-mt-header">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center gap-4 lg:gap-8 mb-8 lg:mb-16">
          <div className="flex flex-col gap-3 lg:gap-5">
            <p className="text-heading font-semibold text-xl lg:text-2xl">Get In Touch</p>
            <h2 className="text-heading font-bold text-4xl lg:text-6xl leading-tight">Contact Me</h2>
          </div>
          <p className="text-body text-lg lg:text-2xl max-w-4xl">
            Interested in working together? Let&apos;s discuss your project and how I can help.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 lg:gap-8">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-body font-medium text-base lg:text-lg">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="px-4 py-2.5 lg:px-6 lg:py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-base lg:text-lg bg-white"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-body font-medium text-base lg:text-lg">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="px-4 py-2.5 lg:px-6 lg:py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-base lg:text-lg bg-white"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-body font-medium text-base lg:text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-2.5 lg:px-6 lg:py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-base lg:text-lg bg-white"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-body font-medium text-base lg:text-lg">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-4 py-2.5 lg:px-6 lg:py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-base lg:text-lg bg-white"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Topic */}
            <div className="flex flex-col gap-2">
              <label htmlFor="topic" className="text-body font-medium text-base lg:text-lg">
                Choose a topic
              </label>
              <div className="relative">
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 lg:px-6 lg:py-4 pr-10 lg:pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-base lg:text-lg bg-white appearance-none cursor-pointer"
                >
                  <option value="">Select one...</option>
                  <option value="backend-development">Backend Development</option>
                  <option value="cloud-devops">Cloud & DevOps</option>
                  <option value="frontend-development">Frontend Development</option>
                  <option value="architecture-consulting">Architecture & Consulting</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-body" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-body font-medium text-base lg:text-lg">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="px-4 py-2.5 lg:px-6 lg:py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-base lg:text-lg resize-none bg-white"
                placeholder="Type your message..."
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 lg:w-5 lg:h-5 accent-primary border-gray-300 rounded focus:ring-primary cursor-pointer"
              />
              <label htmlFor="terms" className="text-body text-sm lg:text-base leading-relaxed cursor-pointer">
                I accept the terms and conditions
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 lg:px-12 lg:py-4 bg-primary text-white font-semibold text-base lg:text-lg rounded-lg hover:bg-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="text-primary font-medium text-base lg:text-lg">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-accent font-medium text-base lg:text-lg">
                  ✗ Oops! Something went wrong. Please try again or email me directly at durimrrustemi@gmail.com
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
