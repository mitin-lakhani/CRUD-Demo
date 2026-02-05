import { useState } from "react";
import ChangePasswordPage from "../../components/UpdateOrChange/ChangePassword";
import UpdateProfile from "../../components/UpdateOrChange/UpdateProfile";


const ViewProfilePage = () => {
  const [activeTab, setActiveTab] = useState<"profile" | "password">("profile");
  
    return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md    rounded-2xl shadow-lg p-6">
        
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src="src/assets/react.svg"
            className="w-24 h-24 rounded-full border shadow"
            alt="profile"
          />
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-6">
          <button
            onClick={() => setActiveTab("profile")}
            className={`w-1/2 py-2 text-center font-medium transition
              ${activeTab === "profile"
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-500 hover:text-indigo-500"
              }`}
          >
            Update Profile
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={`w-1/2 py-2 text-center font-medium transition
              ${activeTab === "password"
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-500 hover:text-indigo-500"
              }`}
          >
            Change Password
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "profile" && (
          <div className="space-y-4">
           <UpdateProfile/>
          </div>
        )}
        {/* password content */}
        {activeTab === "password" && (
          <div className="space-y-4">
            <ChangePasswordPage/>
          </div>
        )}
      </div>

    </div>

  );
};

export default ViewProfilePage;
