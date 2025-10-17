import React from "react"


const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Electra Vote</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Transforming campus elections with secure, accessible, and transparent voting technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To empower students with a voice in campus governance through secure, accessible, and transparent
                  election technology.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To become the gold standard for digital campus elections, fostering greater student participation and
                  democratic engagement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Our Values</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Security and integrity in every vote</li>
                  <li>Accessibility for all students</li>
                  <li>Transparency in the electoral process</li>
                  <li>Innovation in election technology</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-deepBlue rounded-full flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 bg-white rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-yellow-500 rounded-full flex items-center justify-center">
                    <h3 className="text-2xl md:text-3xl font-pacifico text-white">
                      Electra <span className="text-deepBlue">Vote</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
