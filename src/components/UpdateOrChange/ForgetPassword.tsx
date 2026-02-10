import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

type ForgotForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<ForgotForm>();

  const onSubmit = (data: ForgotForm) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const userIndex = users.findIndex(
      (u:any) => u.email === data.email );
    console.log(userIndex);
    if (userIndex === -1) {
      toast.error("User with this email not found");
      return;
    }

    if (data.password !== data.confirmPassword) {
      toast.error("Password not match");
      return;
    }

    // update password
    users[userIndex].password = data.password;
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Password reset successful");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border p-6 rounded w-96 flex flex-col gap-4"
      >
        <Link to={'/login'}><FaArrowLeft className="cursor-pointer"/></Link>
        <h2 className="text-xl font-bold text-center">
          Forgot Password
        </h2>
        <Input
          label="Email"
          placeholder="Enter registered email"
          className="font-semibold"
          {...register("email")}
        />

        <Input
          type="password"
          label="New Password"
          placeholder="Enter new password"
          className="font-semibold"
          {...register("password")}
        />

        <Input
          type="password"
          label="Confirm Password"
          placeholder="Confirm new password"
          className="font-semibold"
          {...register("confirmPassword")}
        />

        <Button type="submit">Reset Password</Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
