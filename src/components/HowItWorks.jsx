const HowItWorksSection = () => {
    const steps = [
      {
        number: "01",
        title: "Register",
        description: "Create your account with your student email and verify your identity.",
        icon: "fa-user-plus",
      },
      {
        number: "02",
        title: "Browse Candidates",
        description: "Explore candidate profiles, manifestos, and campaign promises.",
        icon: "fa-users",
      },
      {
        number: "03",
        title: "Cast Your Vote",
        description: "Securely vote for your preferred candidates in active elections.",
        icon: "fa-vote-yea",
      },
      {
        number: "04",
        title: "Track Results",
        description: "Monitor election results in real-time as votes are counted.",
        icon: "fa-chart-pie",
      },
    ]
  
    return (
      <section id="how-it-works" className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Electra Vote makes campus elections simple, secure, and accessible in just a few steps.
            </p>
          </div>
  
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-500 transform -translate-x-1/2"></div>
  
            <div className="space-y-12 md:space-y-0">
              {steps.map((step, index) => (
                <div key={index} className={`md:flex items-center ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md mb-6 md:mb-0">
                      <div className="flex items-center mb-4">
                        <span
                          className={`text-4xl font-bold text-yellow-500 mr-3 ${index % 2 === 0 ? "order-1" : "order-2"}`}
                        >
                          {step.number}
                        </span>
                        <h3 className={`text-xl font-bold ${index % 2 === 0 ? "order-2" : "order-1"}`}>{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
  
                  <div className="hidden md:flex justify-center md:w-0">
                    <div className="bg-deepBlue w-12 h-12 rounded-full flex items-center justify-center text-white text-xl z-10">
                      <i className={`fa-solid ${step.icon}`}></i>
                    </div>
                  </div>
  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default HowItWorksSection
  