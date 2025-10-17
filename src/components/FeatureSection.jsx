import React from "react"
const FeaturesSection = () => {
    const features = [
      {
        icon: "fa-shield-alt",
        title: "Secure Voting",
        description: "End-to-end encryption ensures your vote remains confidential and tamper-proof.",
      },
      {
        icon: "fa-mobile-alt",
        title: "Vote Anywhere",
        description: "Cast your vote from any device, anywhere on campus with our mobile-friendly platform.",
      },
      {
        icon: "fa-chart-line",
        title: "Real-time Results",
        description: "Watch election results unfold in real-time with our transparent counting system.",
      },
      {
        icon: "fa-user-check",
        title: "Verified Identity",
        description: "Secure authentication ensures only eligible students can participate in elections.",
      },
      {
        icon: "fa-history",
        title: "Voting History",
        description: "Access your personal voting history and track your participation in campus democracy.",
      },
      {
        icon: "fa-universal-access",
        title: "Accessibility",
        description: "Designed for all students, including those with disabilities, ensuring everyone can vote.",
      },
    ]
  
    return (
      <section id="features" className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover what makes Electra Vote the preferred platform for campus elections.
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-deepBlue w-14 h-14 rounded-full flex items-center justify-center text-white text-xl mb-4">
                  <i className={`fa-solid ${feature.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default FeaturesSection
  