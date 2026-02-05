import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	registerSchema, type RegisterFormValues,
} from "@/validations/auth.schema";

import { toast } from "sonner";
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),

	});
	const onSubmit = (data: RegisterFormValues) => {

		const users = JSON.parse(localStorage.getItem("users") || "[]");

		const isEmailExists = users.some(
			(user: any) => user.email === data.email
		);

		if (isEmailExists) {
			toast.error("Email Already Registered!");
			return;
		}

		// confirmPassword remove
		const { confirmPassword, ...userData } = data;

		users.push(userData);
		localStorage.setItem("users", JSON.stringify(users));

		toast.success("Register Successful");

		reset();
		navigate("/login");
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-[calc(100dvh-113px)]  dark:text-black ">
			<div className="register-theme border bg-background text-text  sm:w-90 my-10 p-6 rounded flex flex-col gap-10">
				<h1 className="text-center text-2xl font-bold">Register</h1>
				<div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								e.preventDefault();
							}
						}}
						className="flex flex-col gap-4"
					>
						<div>
							<Input
								type="text"
								label="UserName"
								placeholder="Enter UserName"
								errorMsg={errors.name?.message}
								className="font-medium"
								{...register("name",)}
							/>

						</div>
						<div>
							<Input
								type="text"
								label="Email"
								placeholder="Enter Email"
								errorMsg={errors.email?.message}
								className="font-medium"
								{...register("email", {
									onChange: (e) => {
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
								errorMsg={errors.password?.message}
								className="font-medium"
								{...register("password")}
							/>
						</div>
						<div>
							<Input
								type="password"
								label="Confirm Password"
								placeholder="Confirm Password"
								className="font-medium"
								errorMsg={errors.confirmPassword?.message}
								{...register("confirmPassword")}
							/>
						</div>
						<Button type="submit" className="font-bold">Register</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
