"use client"

import { useState } from "react"

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Student Council President",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
      quote:
        "Electra Vote transformed our student elections. The platform is intuitive, secure, and made counting votes a breeze. Voter turnout increased by 45% compared to previous years!",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Computer Science Student",
      image: "/placeholder.svg",
      quote:
        "As someone studying cybersecurity, I was impressed by the robust security measures implemented in Electra Vote. It's the perfect blend of security and user-friendliness.",
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Election Committee Chair",
      image: "/placeholder.svg",
      quote:
        "Managing campus elections used to be a logistical nightmare. With Electra Vote, we've streamlined the entire process and can now focus on encouraging participation instead of counting ballots.",
    },
    {
      id: 4,
      name: "Dr. Robert Williams",
      role: "Faculty Advisor",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "The transparency and integrity of Electra Vote have eliminated disputes about election results. It's become an essential tool for fostering democratic values on our campus.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-16 px-6 md:px-12 lg:px-20 bg-deepBlue text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Students Say</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Hear from students and faculty who have experienced the Electra Vote difference.
          </p>
        </div>

        <div className="relative">
          <div className="bg-darkBlue rounded-xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-24 h-24 rounded-full bg-yellow-500 flex items-center justify-center overflow-hidden">
                  <i className="fa-solid fa-user text-4xl text-deepBlue"></i>
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <i className="fa-solid fa-quote-left text-yellow-500 text-4xl opacity-50"></i>
                </div>

                <p className="text-lg mb-6 italic">{testimonials[activeIndex].quote}</p>

                <div>
                  <h4 className="text-xl font-bold">{testimonials[activeIndex].name}</h4>
                  <p className="text-yellow-500">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-yellow-500" : "bg-gray-400"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>

          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4">
            <button
              onClick={prevTestimonial}
              className="bg-yellow-500 text-deepBlue w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-400 transition focus:outline-none hidden md:flex"
              aria-label="Previous testimonial"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4">
            <button
              onClick={nextTestimonial}
              className="bg-yellow-500 text-deepBlue w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-400 transition focus:outline-none hidden md:flex"
              aria-label="Next testimonial"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
