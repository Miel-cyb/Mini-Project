"use client"

import { useState, useEffect } from "react"
import { X } from "react-feather"

const NotificationPopup = ({ show = false, onClose, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let timer
    if (show) {
      timer = setTimeout(() => {
        setIsVisible(true)
      }, delay)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [show, delay])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      if (onClose) onClose()
    }, 300)
  }

  if (!show) return null

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 max-w-sm bg-white rounded-lg shadow-xl transform transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="p-4 border-l-4 border-gradient-to-r from-purple-600 to-indigo-600 rounded-lg">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </div>
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-gray-900">Election Update!</p>
            <p className="mt-1 text-sm text-gray-500">
              The next campus election is starting soon. Make sure your profile is updated!
            </p>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              onClick={handleClose}
              className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <span className="sr-only">Close</span>
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationPopup
