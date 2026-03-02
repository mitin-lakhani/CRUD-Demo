import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "@/validations/auth.schema";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAppState } from "@/utils/useAppState";
// import { set } from "zod";
const LoginPage = () => {
	const navigate = useNavigate();
	const [{user}, dispatch] = useAppState();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
	});
	const [email, setEmail] = useState("");

	const onSubmit = async (data: LoginFormValues) => {
		console.log("login data is",data);
		try {
			const response = await axios.post("http://localhost:5000/api/auth/login",data)
			console.log('response', response);
			// set use app state
			dispatch({
			 	user:response.data.user,
			 });
			 const token = response.data.token;
			 localStorage.setItem("authtoken",token);

			 console.log("token is",token);

			toast.success("Login SuccessFull");
			setEmail(email);

			reset();	
			navigate("/dashboard");

		} catch (error: any) {
			toast.error(
				error.response?.data?.message || "Login Failed"
			);
		}
		
		// login user with localstorage

		// can not response are given token

		// const users = JSON.parse(localStorage.getItem("users") || "[]");
		// const user = users.find((user: any) => user.email === email);
		// if (!user) {
		// 	toast.error("User Not Found");
		// 	return;
		// }
		// if (user.password !== data.password) {
		// 	toast.error("password incorrect")
		// 	return;
		// }

		// // this code apply for after login and verified user
		// if (user.email === email && user.status === 'verified') {
		// 	toast.success("Login Successful", { duration: 1500 });
		// } else {
		// 	toast.error("User Not varified", { duration: 1500 });
		// 	return;
		// }
		// localStorage.setItem("user", JSON.stringify(user));
		// dispatch({
		// 	user
		// });
		// reset();
		// navigate("/dashboard");

	};
	return (
		<div className="flex flex-col items-center justify-center min-h-[calc(100dvh-113px)] dark:text-black">
			<div className="p-6 rounded flex border flex-col sm:w-90 my-10 gap-10 login-theme bg-background text-text">

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
								placeholder="Enter Email"
								errorMsg={errors.email?.message}
								className="font-bold"
								{...register("email", {
									onChange: (e) => {
										e.target.value = e.target.value.replace(/\s/g, "")
										setEmail(e.target.value)
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
						<div className="flex justify-between">

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
