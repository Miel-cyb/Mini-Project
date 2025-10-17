"use client"

import { useState, useEffect } from "react"

const StatsSection = () => {
  const [counts, setCounts] = useState({
    elections: 0,
    students: 0,
    colleges: 0,
    satisfaction: 0,
  })

  const targets = {
    elections: 50,
    students: 15000,
    colleges: 5,
    satisfaction: 98,
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => {
        const newCounts = { ...prev }
        let completed = true

        Object.keys(targets).forEach((key) => {
          if (prev[key] < targets[key]) {
            const increment = Math.ceil(targets[key] / 50)
            newCounts[key] = Math.min(prev[key] + increment, targets[key])
            completed = false
          }
        })

        if (completed) {
          clearInterval(interval)
        }

        return newCounts
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const stats = [
    {
      icon: "fa-vote-yea",
      value: counts.elections,
      label: "Elections Conducted",
      suffix: "+",
    },
    {
      icon: "fa-user-graduate",
      value: counts.students,
      label: "Students Registered",
      suffix: "+",
    },
    {
      icon: "fa-university",
      value: counts.colleges,
      label: "Colleges Served",
      suffix: "",
    },
    {
      icon: "fa-smile",
      value: counts.satisfaction,
      label: "Satisfaction Rate",
      suffix: "%",
    },
  ]

  return (
    <section id="stats" className="py-16 px-6 md:px-12 lg:px-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Electra Vote by the Numbers</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our platform has transformed campus elections across multiple institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center text-deepBlue text-2xl mx-auto mb-4">
                <i className={`fa-solid ${stat.icon}`}></i>
              </div>
              <div className="text-4xl font-bold mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
