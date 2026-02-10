import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpSchema, type OtpFormValues } from "@/validations/auth.schema";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";


const OtpVerifyForm = ({email}:{email:string}) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
  });

  const onSubmit = (data: OtpFormValues) => {
    
    const users = JSON.parse(localStorage.getItem("users") || "[]");
 
    const userIndex = users.findIndex(
      (user: any) => user.email === email
    );
   
      if (userIndex === -1) {
        toast.error("User not found");
        return;
      }
    if (users[userIndex].otp === data.otp) {
       users[userIndex].status = "verified";
      delete users[userIndex].otp;

      localStorage.setItem("users", JSON.stringify(users));

      toast.success("Account verified");
        navigate("/login");
    } else {
      toast.error("Invalid OTP");
    }
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

      <Button type="submit">Verify OTP</Button>
    </form>
  );
};
export default OtpVerifyForm;
