import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	registerSchema,
	type RegisterFormValues,
} from "@/validations/auth.schema";

import { toast } from "sonner";
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
	const navigate  = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
	});

	const onSubmit = (data: RegisterFormValues) => {
		console.log("Form Data:", data);
		const users = JSON.parse(localStorage.getItem("users") || "[]");
		users.push(data);
		localStorage.setItem("users", JSON.stringify(users));
		toast.success("Register Successful");
		reset();
		// navigate to login page
		navigate("/login");
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-[calc(100dvh-113px)] dark:text-black ">
			<div className="w-96 bg-gray-100 p-6 rounded flex flex-col gap-10">
				<h1 className="text-center text-2xl font-bold">Register</h1>
				<div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-4"
					>
						<div>
							<Input
								type="text"
								label="Name"
								errorMsg={errors.name?.message}
								{...register("name")}
							/>
						</div>
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
						<div>
							<Input
								type="password"
								label="Confirm Password"
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
