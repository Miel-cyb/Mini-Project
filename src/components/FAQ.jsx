"use client"

import { useState } from "react"

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I register to vote on Electra Vote?",
      answer:
        "Registration is simple! Click the 'Register' button, enter your student email, create a password, and verify your identity. Once approved, you'll be able to participate in all eligible elections.",
    },
    {
      question: "Is my vote really anonymous?",
      answer:
        "Absolutely. While we verify your identity to ensure you're eligible to vote, your actual voting choices are encrypted and separated from your personal information. No one can see who you voted for.",
    },
    {
      question: "What happens if I lose internet connection while voting?",
      answer:
        "Don't worry! Electra Vote saves your progress. If you lose connection, simply log back in when your connection is restored, and you can continue where you left off.",
    },
    {
      question: "Can I change my vote after submitting it?",
      answer:
        "Once a vote is submitted, it cannot be changed. This is to maintain the integrity of the election. Make sure to review your choices carefully before final submission.",
    },
    {
      question: "How can I verify that my vote was counted?",
      answer:
        "After voting, you see an update of the vote. You can  verify that your vote was included in the final tally.",
    },
    {
      question: "What devices can I use to access Electra Vote?",
      answer:
        "Electra Vote works on any device with a web browser, including smartphones, tablets, laptops, and desktop computers. Our responsive design ensures a smooth experience regardless of screen size.",
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Find answers to common questions about using Electra Vote.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span className="text-yellow-500">
                  <i className={`fa-solid ${openIndex === index ? "fa-minus" : "fa-plus"}`}></i>
                </span>
              </button>

              <div
                className={`px-4 overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 pb-4" : "max-h-0"}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a href="#contact" className="text-yellow-500 font-semibold hover:underline">
              Contact us
            </a>{" "}
            for more information.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
