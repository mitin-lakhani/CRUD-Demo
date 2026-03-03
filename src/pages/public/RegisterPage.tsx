// import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	registerSchema,
	type RegisterFormValues,
} from "@/validations/auth.schema";

import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import OtpVerifyForm from "./OtpVeryFyForm"

// import { sendOtpEmail } from "@/utils/email";

import axios from "axios";
const RegisterPage = () => {
	// UI states
	const [showOtp, setShowOtp] = useState(false);
	// const [enteredOtp, setEnteredOtp] = useState("");
	const [currentEmail, setCurrentEmail] = useState("");
	const [isVerified,] = useState(false);
	const [isRegister, setIsRegister] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
	});

	// STEP 1: REGISTER
	const onSubmit = async (data: RegisterFormValues) => {
		console.log("register data", data);
		try {
			setIsRegister(true);
			const response = await axios.post("https://backendapi-mo9g.onrender.com/api/auth/register", data);
			setCurrentEmail(data.email);
			setShowOtp(true);
			toast.success(response.data.message || "OTP send to email")
			reset();

		} catch (error: any) {
			console.log("Error", error.response);
			toast.error(
				error.response?.data?.message || "Registration failed"
			);
		} finally {
			setIsRegister(false);
		}




		// this register are localstorage with

		// const users = JSON.parse(localStorage.getItem("users") || "[]");

		// const userIndex = users.findIndex(
		// 	(user: any) => user.email === data.email
		// );

		// // CASE 1: User already exists
		// if (userIndex !== -1) {
		// 	const existingUser = users[userIndex];
		// 	// If already verified
		// 	if (existingUser.status === "verified") {
		// 		toast.error("Account already verified. Please login.");
		// 		return;
		// 	}
		// 	// If not verified → resend OTP
		// 	else {
		// 		const otp = Math.floor(100000 + Math.random() * 900000).toString();

		// 		users[userIndex].otp = otp;
		// 		localStorage.setItem("users", JSON.stringify(users));

		// 		setCurrentEmail(data.email);
		// 		setShowOtp(true);

		// 		sendOtpEmail(data.email, otp);
		// 		toast.success("New OTP sent to your email");

		// 		return;
		// 	}
		// }
		// // CASE 2: New user
		// const otp = Math.floor(100000 + Math.random() * 900000).toString();
		// const newUser = {
		// 	name: data.name,
		// 	email: data.email,
		// 	password: data.password,
		// 	otp: otp,
		// 	status: "unverified",
		// };
		// users.push(newUser);
		// localStorage.setItem("users", JSON.stringify(users));



		// setCurrentEmail(data.email);
		// setShowOtp(true);

		// sendOtpEmail(data.email, otp);
		// toast.success("OTP sent to email");

		// reset();
	};



	return (
		<div className="flex flex-col items-center justify-center min-h-[calc(100dvh-113px)]">
			<div className="border sm:w-90 my-10 p-6 rounded flex flex-col gap-6 overflow-hidden">

				<AnimatePresence mode="wait">
					{/* SUCCESS SCREEN */}
					{isVerified && (
						<motion.div
							key="success"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.4 }}
							className="text-center flex flex-col gap-3"
						>
							<h2 className="text-2xl font-bold text-green-600">
								Account Verified ✅
							</h2>
							<p>Redirecting to login...</p>
						</motion.div>
					)}

					{/* STEP 1: REGISTER */}
					{!showOtp && !isVerified && (
						<motion.div
							key="register"
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: -100, opacity: 0 }}
							transition={{ duration: 0.4 }}
						>
							<h1 className="text-center text-2xl font-bold">
								Register
							</h1>

							<form
								onSubmit={handleSubmit(onSubmit)}
								className="flex flex-col gap-4 mt-4"
							>
								<Input
									type="text"
									label="UserName"
									placeholder="Enter UserName"
									errorMsg={errors.name?.message}
									{...register("name")}
								/>

								<Input
									type="text"
									label="Email"
									placeholder="Enter Email"
									errorMsg={errors.email?.message}
									{...register("email")}
								/>

								<Input
									type="password"
									label="Password"
									placeholder="Enter Password"
									errorMsg={errors.password?.message}
									{...register("password")}
								/>

								<Input
									type="password"
									label="Confirm Password"
									placeholder="Enter Confirm Password"
									errorMsg={errors.confirmPassword?.message}
									{...register("confirmPassword")}
								/>
								<button className="border p-2 cursor-pointer" type="submit" disabled={isRegister}>
									{ isRegister ? (
										<span className="flex items-center justify-center gap-2">
											<span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
											Register...
										</span>
									) : (
										"Register"
									)}
								</button>

							</form>
						</motion.div>
					)}

					{/* STEP 2: OTP */}
					{showOtp && !isVerified && (
						<motion.div
							key="otp"
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: -100, opacity: 0 }}
							transition={{ duration: 0.4 }}
							className="flex flex-col gap-4"
						>
							<OtpVerifyForm email={currentEmail} />
							{/* <form action="">
								<h1 className="text-center text-2xl font-bold">
									Verify OTP
								</h1>
								<Input
									type="text"
									label="Enter OTP"
									placeholder="6-digit OTP"
									value={enteredOtp}
									maxLength={6}
									onChange={(e) =>
										setEnteredOtp(e.target.value)

									}
									className="mb-5"
								/>
								<button type="submit" className="cursor-pointer border p-2 font-bold rounded"
								>Verify OTP
								</button>
							</form> */}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>

	);

};

export default RegisterPage;
