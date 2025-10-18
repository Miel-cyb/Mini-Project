
const Profile = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Profile</h1>
      <div className="flex items-center space-x-6">
        <div className="w-24 h-24 rounded-full bg-yellow-500 flex items-center justify-center text-deepBlue text-4xl font-semibold">
          {user?.email?.charAt(0).toUpperCase() || "U"}
        </div>
        <div>
          <p className="text-xl font-semibold">{user?.email?.split("@")[0] || "User"}</p>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
