import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

type ForgotForm = {
  email: string;
  otp?: string;
  password?: string;
  confirmPassword?: string;
};

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, getValues } = useForm<ForgotForm>();

  const [showOtp, setShowOtp] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const [loadingOtp, setLoadingOtp] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);
  const [loadingReset, setLoadingReset] = useState(false);

  // STEP 1 - SEND OTP
  const sendOtp = async (data: ForgotForm) => {
    try {
      setLoadingOtp(true);
      await axios.post(
        "https://backendapi-mo9g.onrender.com/api/auth/forgot-password",
        { email: data.email }
      );
      toast.success("OTP Sent to your email");
      setShowOtp(true);

    } catch (error: any) {
      alert(error.response?.data?.message);
    } finally {
      setLoadingOtp(false);
    }
  };

  // STEP 2 - VERIFY OTP
  const verifyOtp = async () => {
    try {
      setLoadingVerify(true);
      await axios.post(
        "https://backendapi-mo9g.onrender.com/api/auth/verify-reset-otp",
        {
          email: getValues("email"),
          otp: getValues("otp"),
        }
      );

      toast.success("OTP Verified");
      setOtpVerified(true);

    } catch (error: any) {
      alert(error.response?.data?.message);
    } finally {
      setLoadingVerify(false);
    }
  };

  // STEP 3 - RESET PASSWORD
  const resetPassword = async () => {
    const password = getValues("password");
    const confirmPassword = getValues("confirmPassword");

    if (password === '' && confirmPassword === '') {
      toast.error("Can not Empty password");
      return;
    }

    if (password !== confirmPassword) {
      ("Password not match");
      return;
    }

    try {
      setLoadingReset(true);
      await axios.post(
        "https://backendapi-mo9g.onrender.com/api/auth/reset-password",
        {
          email: getValues("email"),
          password,
        }
      );

      toast.success("Password Updated Successfully");
      navigate("/login");

    } catch (error: any) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoadingReset(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit(sendOtp)}
        className="border p-6 rounded w-96 flex flex-col gap-4"
      >
        <h2 className="text-xl font-bold text-center">
          Forgot Password
        </h2>

        {/* EMAIL FIELD */}
        <Input
          label="Email"
          placeholder="Enter registered email"
          {...register("email")}
          disabled={showOtp}
        />

        {!showOtp && (
          <button className="border p-2 cursor-pointer" type="submit" disabled={loadingOtp}>
            {loadingOtp ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </span>
            ) : (
              "Send OTP"
            )}
          </button>

        )}

        {/* OTP FIELD */}
        {showOtp && !otpVerified && (
          <>
            <Input
              label="Enter OTP"
              maxLength={6}
              {...register("otp")}
            />
            <button className="border p-2 cursor-pointer" disabled={loadingVerify} type="submit" onClick={verifyOtp}>
              {loadingVerify ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin">
                  </span>
                  Verifying...
                </span>
              ):(
                "Verify OTP"
              )}
            </button>
          </>
        )}

        {/* PASSWORD FIELD */}
        {otpVerified && (
          <>
            <Input
              type="password"
              label="New Password"
              {...register("password")}
            />
            <Input
              type="password"
              label="Confirm Password"
              {...register("confirmPassword")}
            />
            <button className="border p-2 cursor-pointer" disabled={loadingReset} type="submit" onClick={resetPassword}>
              { loadingReset ? (  
                    <span className="flex items-center justify-center gap-2 ">
                      <span className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin"></span>
                      Updating...
                    </span>
                ):(
                  "Reset Password"
              )}
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;