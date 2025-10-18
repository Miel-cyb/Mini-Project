
import { CheckSquare, Calendar, BarChart2 } from "react-feather";

const Overview = ({ user, upcomingElections = [], pastElections = [], notifications = [], setActiveTab }) => {

  const calculateDaysLeft = (date) => {
    const difference = +new Date(date) - +new Date();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">
          Welcome back, {user?.email?.split("@")[0] || "User"}!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-yellow-100 text-yellow-600">
              <CheckSquare className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-600">Upcoming Elections</h2>
              <p className="text-2xl font-semibold text-gray-900">{upcomingElections.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-indigo-100 text-indigo-600">
              <Calendar className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-600">Next Election</h2>
              <p className="text-2xl font-semibold text-gray-900">
                {upcomingElections.length > 0 ? `${calculateDaysLeft(upcomingElections[0].date)} days` : "N/A"}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-100 text-green-600">
              <BarChart2 className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-600">Past Elections</h2>
              <p className="text-2xl font-semibold text-gray-900">{pastElections.length}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">Upcoming Elections</h2>
              <button onClick={() => setActiveTab("elections")} className="text-sm text-deepBlue hover:underline">View All</button>
            </div>

            <div className="divide-y divide-gray-200">
              {upcomingElections.slice(0, 2).map((election) => (
                <div key={election.id} className="px-6 py-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-base font-medium text-gray-900">{election.title}</h3>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(election.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        {calculateDaysLeft(election.date)} days left
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
            </div>

            <div className="divide-y divide-gray-200">
              {notifications.slice(0, 3).map((notification) => (
                <div
                  key={notification.id}
                  className={`px-6 py-4 ${!notification.read ? "bg-gray-50" : ""}`}
                >
                  <div className="flex items-start">
                    <div
                      className={`w-2 h-2 mt-2 rounded-full ${!notification.read ? "bg-deepBlue" : "bg-gray-300"}`}
                    ></div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-900">
                        {notification.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{notification.message}</p>
                      <p className="mt-1 text-xs text-gray-400">{notification.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
