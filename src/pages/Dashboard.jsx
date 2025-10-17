"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { auth } from "../firebaseConfig"
import { Home, User, Settings, LogOut, Bell, Search, CheckSquare, BarChart2, Calendar, Clock } from "react-feather"

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  const upcomingElections = [
    {
      id: 1,
      title: "Student Council President",
      date: "May 15, 2023",
      time: "8:00 AM - 5:00 PM",
      status: "upcoming",
      daysLeft: 14,
    },
    {
      id: 2,
      title: "Department Representatives",
      date: "May 20, 2023",
      time: "9:00 AM - 4:00 PM",
      status: "upcoming",
      daysLeft: 19,
    },
    {
      id: 3,
      title: "Campus Activities Board",
      date: "June 5, 2023",
      time: "10:00 AM - 3:00 PM",
      status: "upcoming",
      daysLeft: 35,
    },
  ]

  const pastElections = [
    {
      id: 4,
      title: "Student Union Treasurer",
      date: "April 10, 2023",
      result: "Voted",
    },
    {
      id: 5,
      title: "Library Committee",
      date: "March 22, 2023",
      result: "Voted",
    },
  ]

  const candidates = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "President",
      votes: 245,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Samantha Lee",
      position: "Vice President",
      votes: 189,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Secretary",
      votes: 156,
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 4,
      name: "Jessica Williams",
      position: "Treasurer",
      votes: 132,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ]

  const notifications = [
    {
      id: 1,
      title: "New election announced",
      message: "Student Council President election has been scheduled for May 15.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      title: "Voting reminder",
      message: "Don't forget to vote in the upcoming Department Representatives election.",
      time: "1 day ago",
      read: true,
    },
    {
      id: 3,
      title: "Election results",
      message: "Results for the Student Union Treasurer election are now available.",
      time: "3 days ago",
      read: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-lg hidden md:block">
        <div className="p-6">
          <Link to="/" className="font-pacifico text-xl flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white">
              E
            </div>
            <span className="text-gray-900 dark:text-white">
              Electra <span className="text-purple-600">Vote</span>
            </span>
          </Link>
        </div>

        <div className="px-4 py-6">
          <div className="flex items-center px-4 py-3 mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
              {user?.email?.charAt(0).toUpperCase() || "U"}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {user?.email?.split("@")[0] || "User"}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Student</p>
            </div>
          </div>

          <nav className="space-y-1">
            {[
              { name: "Overview", icon: <Home className="w-5 h-5" />, id: "overview" },
              { name: "My Profile", icon: <User className="w-5 h-5" />, id: "profile" },
              { name: "Elections", icon: <CheckSquare className="w-5 h-5" />, id: "elections" },
              { name: "Results", icon: <BarChart2 className="w-5 h-5" />, id: "results" },
              { name: "Settings", icon: <Settings className="w-5 h-5" />, id: "settings" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center w-full px-4 py-3 text-left rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="px-8 py-4 mt-auto border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => auth.signOut()}
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center md:hidden">
              <button className="text-gray-500 dark:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
              <Link to="/" className="ml-3 font-pacifico text-lg text-gray-900 dark:text-white">
                Electra <span className="text-purple-600">Vote</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="block w-64 pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center">
              <div className="relative mr-4">
                <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </button>
              </div>

              <div className="md:hidden">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
                  {user?.email?.charAt(0).toUpperCase() || "U"}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-6">
          {activeTab === "overview" && (
            <div>
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Welcome back, {user?.email?.split("@")[0] || "User"}!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                      <CheckSquare className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">Upcoming Elections</h2>
                      <p className="text-2xl font-semibold text-gray-900 dark:text-white">{upcomingElections.length}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">Next Election</h2>
                      <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                        {upcomingElections[0]?.daysLeft} days
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                      <BarChart2 className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">Past Elections</h2>
                      <p className="text-2xl font-semibold text-gray-900 dark:text-white">{pastElections.length}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Elections</h2>
                      <button className="text-sm text-purple-600 dark:text-purple-400 hover:underline">View All</button>
                    </div>

                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                      {upcomingElections.map((election) => (
                        <div key={election.id} className="px-6 py-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-base font-medium text-gray-900 dark:text-white">{election.title}</h3>
                              <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                                <Calendar className="w-4 h-4 mr-1" />
                                {election.date}
                              </div>
                              <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                                <Clock className="w-4 h-4 mr-1" />
                                {election.time}
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500">
                                {election.daysLeft} days left
                              </span>
                              <button className="mt-3 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h2>
                    </div>

                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`px-6 py-4 ${!notification.read ? "bg-purple-50 dark:bg-purple-900/10" : ""}`}
                        >
                          <div className="flex items-start">
                            <div
                              className={`w-2 h-2 mt-2 rounded-full ${!notification.read ? "bg-purple-600" : "bg-gray-300 dark:bg-gray-600"}`}
                            ></div>
                            <div className="ml-3">
                              <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                                {notification.title}
                              </h3>
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{notification.message}</p>
                              <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700/50 text-center">
                      <button className="text-sm text-purple-600 dark:text-purple-400 hover:underline">
                        View All Notifications
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "elections" && (
            <div>
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Elections</h1>
                <p className="text-gray-600 dark:text-gray-400">View and participate in campus elections</p>
              </div>

              {/* Elections content would go here */}
            </div>
          )}

          {activeTab === "profile" && (
            <div>
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Profile</h1>
                <p className="text-gray-600 dark:text-gray-400">Manage your account information</p>
              </div>

              {/* Profile content would go here */}
            </div>
          )}

          {activeTab === "results" && (
            <div>
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Election Results</h1>
                <p className="text-gray-600 dark:text-gray-400">View results from past elections</p>
              </div>

              {/* Results content would go here */}
            </div>
          )}

          {activeTab === "settings" && (
            <div>
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
                <p className="text-gray-600 dark:text-gray-400">Manage your preferences</p>
              </div>

              {/* Settings content would go here */}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default Dashboard
