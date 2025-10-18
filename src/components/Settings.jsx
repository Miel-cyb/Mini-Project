
const Settings = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Notifications</h2>
          <div className="flex items-center justify-between mt-2">
            <p>Enable email notifications</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Theme</h2>
          <p>Theme selection is not yet available.</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
