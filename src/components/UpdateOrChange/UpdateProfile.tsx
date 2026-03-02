import { Input } from "@/components/ui/Input";
import { useAppState } from "@/utils/useAppState";
import type { AdduserFormValue } from "@/validations/auth.schema";
import axios from "axios";
import { useEffect } from "react";

import { useForm } from "react-hook-form"
import { toast } from "sonner";

const UpdateProfile = () => {
    const [{ user }, dispatch] = useAppState();

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<AdduserFormValue>({
            
    });
    useEffect(() => {
    if (user) {
        reset({
            name: user?.name,
            email: user?.email,                 
          })
        }
    }, [user])

    const onSubmit = async (data: AdduserFormValue) => {
        try{
            const token = localStorage.getItem("authtoken");
            const response = await axios.put("http://localhost:5000/api/auth/update-profile",{
                name:data.name,
                email:data.email,
            },{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            console.log("update profile response value",response);
            dispatch({
                user:response.data.user,
            })
            console.log("response value is",response);
            toast.success(response.data.message);

        }catch(error:any){
            toast.error(error.response?.data?.message);
        }

    //     console.log("submitted:", data);
    //     if(!user) return;   
    //     const users = JSON.parse(localStorage.getItem("users") || "[]");

    //     const oldEmail = user.email;
    //     console.log("localstorage user",users);

    //     const updatedUsers = users.map((u: any) =>
    //         u.email === oldEmail
    //             ? { ...u, name: data.name, email: data.email }
    //             : u
    //     );
    //     const updatedUser = {
    //         ...user,
    //         name: data.name,
    //         email: data.email,
    //     };
    //     dispatch({user:updatedUser });
    //     localStorage.setItem("users", JSON.stringify(updatedUsers));
    //     localStorage.setItem('user',JSON.stringify(updatedUser));

    //     console.log('updated user',updatedUser);
    //     toast.success("Profile updated successfully");
    };

    return (
        <div className="mb-6 border w-full rounded-lg p-4   font-semibold">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
            <form className="h-1/2" onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <Input
                        label="Name"
                        {...register("name")}
                    />
                </div>
                <div>
                    <Input
                        label="Email"   
                        {...register("email",{
                            onChange:(e)=>{
                                e.target.value = e.target.value.replace(/\s/g,"")
                            }
                        })}
                    />
                </div>
                <button type="submit"
                    className="bg-indigo-600 cursor-pointer text-white px-5 py-2 mt-4 rounded hover:bg-indigo-700 transition"

                >Update
                </button>
            </form>
        </div>
    )
}
export default UpdateProfile;
