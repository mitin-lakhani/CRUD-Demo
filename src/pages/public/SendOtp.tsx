import { useEffect, useState } from "react";
import { sendOtpEmail } from "../../utils/email";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";



function SendOtp() {
  const [userOtp, setUserOtp] = useState("");
  const navigate = useNavigate();

  const email = localStorage.getItem("tempUserEmail");
  const verifiedUser = localStorage.getItem("verifiedUser");


  useEffect(() => {
    
    if (!email || verifiedUser === email) return;

    

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Store in localStorage
    localStorage.setItem("otp", otp.toString());
        
    // Send to email
    sendOtpEmail(email, otp)
      .then(() => toast.success("OTP sent to email"))
      .catch(() => toast.error("Failed to send OTP"));
  }, [email]);

  const verifyOtp = () => {
    const storedOtp = localStorage.getItem("otp");

    if (userOtp === storedOtp) {
      localStorage.setItem("verifiedUser", email || "");
      localStorage.removeItem("otp");

      toast.success("User Verified!");
      navigate("/login");
    } else {
      toast.error("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linnear-to-br from-indigo-100 to-purple-200">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold text-gray-800">Verify OTP</h2>

        <input
          type="text"
          placeholder="Enter OTP"
          value={userOtp}
          onChange={(e) => setUserOtp(e.target.value)}
          className="w-full mt-6 px-4 py-3 border rounded-lg"
        />

        <button
          onClick={verifyOtp}
          className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
}

export default SendOtp;
