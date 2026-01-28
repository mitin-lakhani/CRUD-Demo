import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "@/validations/auth.schema";
import { toast } from "sonner";
import { useAppState } from "@/utils/useAppState";
import { useNavigate } from "react-router-dom";


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
			<div className="w-96 p-6 rounded flex  flex-col gap-10 login-theme bg-background text-text">
				<h1 className="text-center font-semibold text-3xl">Login</h1>
				<div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-4"
					>
						<div>
							<Input
								type="text"
								label="Email"
								errorMsg={errors.email?.message}
								{...register("email")}
								
							/>
						</div>
						<div>
							<Input
								type="password"
								label="Password"
								errorMsg={errors.password?.message}
								{...register("password")}
								
							/>
						</div>

						<Button type="submit">Login</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
