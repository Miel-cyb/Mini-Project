"use client"

import { useState } from "react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage("Thank you for your message! We'll get back to you soon.")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("")
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have questions about Electra Vote? We're here to help! Reach out to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-deepBlue text-white p-3 rounded-full">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Our Location</h4>
                  <p className="text-gray-600">University Campus, Building 4, Room 201</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-deepBlue text-white p-3 rounded-full">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-gray-600">support@electravote.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-deepBlue text-white p-3 rounded-full">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-gray-600">+233 50 123 4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-deepBlue text-white p-3 rounded-full">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Working Hours</h4>
                  <p className="text-gray-600">Monday-Friday: 9AM - 5PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-6">Send Us A Message</h3>

            {submitMessage && <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">{submitMessage}</div>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full border border-gray-300 p-3 rounded-lg"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full border border-gray-300 p-3 rounded-lg resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full bg-yellow-500 text-deepBlue font-semibold py-3 rounded-lg hover:bg-yellow-400 transition ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
