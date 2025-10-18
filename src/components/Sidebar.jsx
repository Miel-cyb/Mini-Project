import { Link } from "react-router-dom";
import { Home, User, Settings, LogOut, CheckSquare, BarChart2 } from "react-feather";

const Sidebar = ({ user, activeTab, setActiveTab, handleLogout, isSidebarOpen, setIsSidebarOpen }) => {
  const menuItems = [
    { name: "Overview", icon: <Home className="w-5 h-5" />, id: "overview" },
    { name: "My Profile", icon: <User className="w-5 h-5" />, id: "profile" },
    { name: "Elections", icon: <CheckSquare className="w-5 h-5" />, id: "elections" },
    { name: "Results", icon: <BarChart2 className="w-5 h-5" />, id: "results" },
    { name: "Settings", icon: <Settings className="w-5 h-5" />, id: "settings" },
  ];

  return (
    <div className={`fixed inset-y-0 left-0 w-64 bg-deepBlue text-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
      <div className="p-6 flex justify-between items-center">
        <Link to="/" className="font-pacifico text-xl flex items-center gap-2">
          <span>
            Electra <span className="text-yellow-500">Vote</span>
          </span>
        </Link>
        <button onClick={() => setIsSidebarOpen(false)} className="text-white md:hidden">
          <LogOut className="w-6 h-6" />
        </button>
      </div>

      <div className="px-4 py-6">
        <div className="flex items-center px-4 py-3 mb-6 bg-blue-900 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-deepBlue font-semibold">
            {user?.email?.charAt(0).toUpperCase() || "U"}
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">
              {user?.email?.split("@")[0] || "User"}
            </p>
            <p className="text-xs text-gray-400">Student</p>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsSidebarOpen(false); // Close sidebar on tab selection
              }}
              className={`flex items-center w-full px-4 py-3 text-left rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-yellow-500 text-deepBlue"
                  : "text-gray-300 hover:bg-blue-800"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="px-8 py-4 mt-auto border-t border-blue-800">
        <button
          onClick={handleLogout}
          className="flex items-center text-gray-300 hover:text-red-500"
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
