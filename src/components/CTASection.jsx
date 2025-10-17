import { Link } from "react-router-dom"

const CTASection = () => {
  return (
    <section id="cta" className="py-16 px-6 md:px-12 lg:px-20 bg-deepBlue">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-deepBlue mb-4">Ready to Make Your Voice Heard?</h2>
              <p className="text-deepBlue text-lg mb-6">
                Join thousands of students who are shaping the future of their campus through secure and transparent
                voting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="bg-deepBlue text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-opacity-90 transition"
                >
                  Register Now
                </Link>
                <Link
                  to="/login"
                  className="bg-white text-deepBlue px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition"
                >
                  Log In
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-deepBlue rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-deepBlue rounded-full opacity-20"></div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                  <div className="text-deepBlue text-5xl font-bold mb-4">
                    <i className="fa-solid fa-check-to-slot"></i>
                  </div>
                  <h3 className="text-deepBlue text-2xl font-bold mb-2">Campus Elections</h3>
                  <p className="text-deepBlue">Next election starts in:</p>
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    <div className="bg-deepBlue text-white p-2 rounded-lg">
                      <div className="text-2xl font-bold">14</div>
                      <div className="text-xs">Days</div>
                    </div>
                    <div className="bg-deepBlue text-white p-2 rounded-lg">
                      <div className="text-2xl font-bold">08</div>
                      <div className="text-xs">Hours</div>
                    </div>
                    <div className="bg-deepBlue text-white p-2 rounded-lg">
                      <div className="text-2xl font-bold">23</div>
                      <div className="text-xs">Mins</div>
                    </div>
                    <div className="bg-deepBlue text-white p-2 rounded-lg">
                      <div className="text-2xl font-bold">45</div>
                      <div className="text-xs">Secs</div>
                    </div>
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

export default CTASection
