import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "@/validations/auth.schema";
import { toast } from "sonner";
import { useAppState } from "@/utils/useAppState";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
	const navigate = useNavigate();
	const [, dispatch] = useAppState();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),

	});
	
	const onSubmit = (data: LoginFormValues) => {
		const users = JSON.parse(localStorage.getItem("users") || "[]");
		const user = users.find((user: any) => user.email === data.email);
		if (!user) {
			toast.error("User not found!");
			return;
		}
		
		if (user.password !== data.password) {
			toast.error("Incorrect password");
			return;
		}
		console.log("Form Data:", data);
		toast.success("Login Successful");
		localStorage.setItem("user", JSON.stringify(user));
			dispatch({ 
				user
			});
		reset();
		navigate("/dashboard");
		
	};
	return (
		<div className="flex flex-col items-center justify-center min-h-[calc(100dvh-113px)] dark:text-black">
			<div className="p-6 rounded flex border flex-col sm:w-90 my-10 gap-10 login-theme bg-background text-text">
				
				<h1 className="text-center font-semibold text-3xl">Login</h1>
				<div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						onKeyDown={(e)=>{
							if(e.key === 'Enter'){
								e.preventDefault();
							}
						}}
						className="flex flex-col gap-4"
					>
						<div>
							<Input
								type="text"
								label="Email"
								placeholder="Enter Email"
								errorMsg={errors.email?.message}
								className="font-bold"
								{...register("email",{
									onChange:(e) =>{
										e.target.value = e.target.value.replace(/\s/g, "")
									}
								
								})}
							/>
						</div>
						<div>
							<Input
								type="password"
								label="Password"
								placeholder="Enter Password"
								className="font-bold"
								errorMsg={errors.password?.message}

								{...register("password")}
								
							/>
						</div>
						<div className="flex justify-end text-center">
							<Link to={'/forget-password'} className="font-bold w-1/2 text-indigo-500">Forget Password</Link>
						</div>
						<Button type='submit'>Login</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
