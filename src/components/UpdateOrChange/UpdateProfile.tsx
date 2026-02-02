import { Input } from "@/components/ui/Input";
import { useAppState } from "@/utils/useAppState";
import { useEffect } from "react";
import { adduserSchema, type AdduserFormValue } from "@/validations/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form"
import { toast } from "sonner";

const UpdateProfile = () => {
    const [{ user },dispatch] = useAppState();
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<AdduserFormValue>({
        resolver: zodResolver(adduserSchema),

    });

    useEffect(() => {
        if (user) {
            reset({
                name: user?.name,
                email: user?.email,
                password: user?.password,
            })
        }
    }, [user])

    const onSubmit = (data: AdduserFormValue) => {
        if (!user?.email) return;

        //  Get all users
        const users = JSON.parse(localStorage.getItem("users") || "[]");

         if(user.password !== data.confirmPassword){
            toast.error("password does not match")
            return
        }
        //  Update user in users array
        const updatedUsers = users.map((u: any) =>
            u.email === user.email
                ? { ...u, name: data.name, email: data.email, password: data.password }
                : u
        );
        // check the password condition
        
        //  Updated logged-in user
        const updatedUser = {
            ...user,
            name: data.name,
            email: data.email,
            password: data.password,

        };
        // dispatch user

        dispatch({user:updatedUser})

        //  Save to localStorage    
        localStorage.setItem("users", JSON.stringify(updatedUsers));


        localStorage.setItem("user", JSON.stringify(updatedUser));

        toast.success("Profile updated successfully");
    };
    return (
        <div className="mb-6 border rounded-lg p-4  font-semibold">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
            <form className="h-1/2" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Input
                        type="text"
                        label="Name"
                        placeholder="Enter user name"
                        {...register("name")}
                        errorMsg={errors.name?.message}

                    />
                </div>
                <div>
                    <Input
                        type="email"
                        label="Email"
                        placeholder="Enter user email"
                        {...register("email")}
                        errorMsg={errors.email?.message}

                    />
                </div>
                <div>
                    <Input
                        type='password'
                        label="password"
                        placeholder="Enter user password"
                        {...register("password")}
                        errorMsg={errors.password?.message}
                    />
                </div>
                <div>
                    <Input
                        type="password"
                        label="Confirm Password"
                        placeholder="Confirm password"
                        {...register("confirmPassword")}
                        errorMsg={errors.confirmPassword?.message}
                    />
                </div>
                <button type="submit"
                    className="bg-indigo-600 text-white px-5 py-2 mt-4 rounded hover:bg-indigo-700 transition"


                > Updated
                </button>
            </form>
            <div className="mt-4 flex gap-3">

                {/* <button
                    onClick={close}
                    className="bg-gray-400 text-white px-5 py-2 rounded hover:bg-gray-500 transition"
                >
                    Cancel  
                </button> */}
            </div>
        </div>

    )
}
export default UpdateProfile;
