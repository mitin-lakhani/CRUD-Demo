import { Input } from "@/components/ui/Input";
import { useAppState } from "@/utils/useAppState";
import {
  changePasswordSchema,
  type ChangePasswordFormValue,
} from '@/validations/auth.schema'
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";


const ChangePassword = () => {
  const [{ user },dispatch] = useAppState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ChangePasswordFormValue>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = async (data: ChangePasswordFormValue) => {
    try{
      const token = localStorage.getItem("authtoken");
       const response =  await axios.post("http://localhost:5000/api/auth/changepassword",{
        currentpassword:data.currentPassword,
        newpassword:data.newPassword
       },{  
        headers:{
          Authorization:`Bearer ${token}`
        }
       });
       dispatch({
        user
       })
      toast.success(response.data.message);
      reset();


    }catch(error:any){
      toast.error(error.response?.data?.message);
    }
    // console.log(data);
    // if (!user?.email) return;


    // //  Current password check
    // if (data.currentPassword !== user.password) {
    //   toast.error("Current password is incorrect");
    //   return;
    // }

    // // Updated user object
    // const updatedUser = {
    //   ...user,
    //   password: data.newPassword,
      
    // };
    // // Update logged-in user
    // localStorage.setItem("user", JSON.stringify(updatedUser));

    // // dispatch user 
    // dispatch({
    //   user:updatedUser
    // })

    // // Update users list
    // const users = JSON.parse(localStorage.getItem("users") || "[]");

    // const updatedUsers = users.map((u: any) =>
    //   u.id === user.id ? updatedUser : u
    // );
    // localStorage.setItem("users", JSON.stringify(updatedUsers));


    // reset();
    // toast.success("Password changed successfully");
  };

  return (
    <div className="max-w-md border rounded-lg p-5">
      <h2 className="text-xl font-semibold mb-4">
        Change Password
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          type="password"
          label="Current Password"
          placeholder="Enter current password"
          {...register("currentPassword")}
          errorMsg={errors.currentPassword?.message}
        />

        <Input
          type="password"
          label="New Password"
          placeholder="Enter new password"
          {...register("newPassword")}
          errorMsg={errors.newPassword?.message}
        />

        <Input
          type="password"
          label="Confirm Password"
          placeholder="Confirm new password"
          {...register("confirmPassword")}
          errorMsg={errors.confirmPassword?.message}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded cursor-pointer hover:bg-indigo-700 transition"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
