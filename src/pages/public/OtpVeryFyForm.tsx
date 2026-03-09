// import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpSchema, type OtpFormValues } from "@/validations/auth.schema";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import axios from "axios";


const OtpVerifyForm = ({ email }: { email: string }) => {
  const navigate = useNavigate();
  const [otp, setOpt] = useState("")
  const [verifyOtp, setIsVerifyOtp] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
  });

  const onSubmit = async (data: OtpFormValues) => {
    try {

      setIsVerifyOtp(true);
      const response = await axios.post("https://backendapi-mo9g.onrender.com/api/auth/", {
        email: email,
        otp: data.otp

      });
      console.log("otp verify value", response)
      setOpt(otp);
      toast.success("Account Veryfied")
      navigate('/login');
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Invalid otp");
    } finally {
      setIsVerifyOtp(false);
    }


    //  local storage thi otp veri fy
    // const users = JSON.parse(localStorage.getItem("users") || "[]");

    // const userIndex = users.findIndex(
    //   (user: any) => user.email === email
    // );

    //   if (userIndex === -1 ) {
    //     toast.error("User not found");
    //     return;
    //   }
    // if (users[userIndex].otp === data.otp) {
    //    users[userIndex].status = "verified";
    //   delete users[userIndex].otp;

    //   localStorage.setItem("users", JSON.stringify(users));

    //   toast.success("Account verified");
    //     navigate("/login");
    // } else {
    //   toast.error("Invalid OTP");
    // }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <h1 className="text-center text-2xl font-bold">Verify OTP</h1>

      <Input
        type="text"
        label="Enter OTP"
        placeholder="6-digit OTP"
        maxLength={6}
        errorMsg={errors.otp?.message}
        {...register("otp")}
      />

      <button className="border p-2 cursor-pointer" disabled={verifyOtp} type="submit" >
        {
          verifyOtp ? (
           <span className="flex items-center justify-center gap-2">
           <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Verifying...
          </span>
      ):(
      "Verify OTP"
      )
        }
    </button>
    </form >  
  );
};
export default OtpVerifyForm;
