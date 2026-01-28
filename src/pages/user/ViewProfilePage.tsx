import { useAppState } from "@/utils/useAppState";
import { Input } from "@headlessui/react";
import {useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewProfile() {
  const [state, dispatch] = useAppState();
  
  const user = state.user;
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    name:user?.name,
    email:user?.email,
  })

  return (
    <div className="min-h-screen flex items-center justify-center w-full viewProfile-theme  bg-background dark:bg-neutral-950 p-4">
      <div className="w-full  viewProfile-theme  max-w-2xl rounded-2x  p-6 shadow-lg">

        <h2 className="mb-6 text-xl viewProfile-theme text-text font-semibold text-center">
          User Profile
        </h2>

        <table className="w-full viewProfile-theme">
          <tbody>
            {/* Avatar Row */}
            <tr className="border-b">
              <td className="py-4 viewProfile-theme  font-medium w-1/3">
                Profile Image
              </td>
              <td className="py-4">
                <img
                  src={user?.images || "src/assets/react.svg"}
                  className="h-20 w-20 rounded-full object-cover"
                  alt="avatar"
                />
              </td>
            </tr>

            {/* Name */}
            <tr className="border-b">
              <td className="py-3 viewProfile-theme text-text  font-medium">
                Name
              </td>
              <td className="py-3 font-semibold">
                {
                  isEditing ? (
                    <Input
                      value={formData.name}

                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="border rounded px-2 py-1 w-full"
                    />
                  ) : (user?.name)
                }
              </td>
            </tr>

            {/* Email */}
            <tr className="border-b">
              <td className="py-3 viewProfile-theme text-text  font-medium">
                Email
              </td>
              <td className="py-3">
                {
                  isEditing ? (
                    <Input
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="border rounded px-2 py-1 w-full"
                    />
                  ) : (user?.email)
                }
              </td>
            </tr>
          </tbody>
        </table>

        {/* Edit Button */}
        {isEditing && (
          <button
            onClick={() => {
              dispatch({
                user:{
                  ...user,
                  ...formData
                }
              });
              setIsEditing(false);
              navigate('/dashboard'); 
            }}
            className="mt-4 w-full bg-green-600  text-white py-2 rounded-lg"
          >
            EditProfile
          </button>
        )}
      </div>
    </div>
  );
}

export default ViewProfile;


