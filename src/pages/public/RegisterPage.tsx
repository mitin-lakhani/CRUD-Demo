import { Button } from "@/components/ui/Button";
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
import { sendOtpEmail } from "@/utils/email";
import { AnimatePresence, motion } from "framer-motion";
import OtpVerifyForm from "./OtpVeryFyForm"

const RegisterPage = () => {
	// const navigate = useNavigate();

	// UI states
	const [showOtp, setShowOtp] = useState(false);
	// const [enteredOtp, setEnteredOtp] = useState("");
	const [currentEmail, setCurrentEmail] = useState("");
	const [isVerified,] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
	});

	// STEP 1: REGISTER
	const onSubmit = (data: RegisterFormValues) => {
		const users = JSON.parse(localStorage.getItem("users") || "[]");

		const userIndex = users.findIndex(
			(user: any) => user.email === data.email
		);
		
		// CASE 1: User already exists
		if (userIndex !== -1) {
			const existingUser = users[userIndex];
			// If already verified
			if (existingUser.status === "verified") {
				toast.error("Account already verified. Please login.");
				return;
			}
			// If not verified → resend OTP
			else {
				const otp = Math.floor(100000 + Math.random() * 900000).toString();

				users[userIndex].otp = otp;
				localStorage.setItem("users", JSON.stringify(users));

				setCurrentEmail(data.email);
				setShowOtp(true);

				sendOtpEmail(data.email, otp);
				toast.success("New OTP sent to your email");

				return;
			}
		}

		// CASE 2: New user
		const otp = Math.floor(100000 + Math.random() * 900000).toString();
		const newUser = {
			name: data.name,
			email: data.email,
			password: data.password,
			otp: otp,
			status: "unverified",
		};
		users.push(newUser);
		localStorage.setItem("users", JSON.stringify(users));



		setCurrentEmail(data.email);
		setShowOtp(true);

		sendOtpEmail(data.email, otp);
		toast.success("OTP sent to email");

		reset();
	};

	// STEP 2: VERIFY OTP
	// const verifyOtp = (enteredOtp: number) => {
	// 	console.log(enteredOtp);
	// 	console.log(alert())
	// 	const users = JSON.parse(localStorage.getItem("users") || "[]");

	// 	const userIndex = users.findIndex((user: any) => user.email === currentEmail);

	// 	if (users[userIndex].otp === enteredOtp) {
	// 		users[userIndex].status = "varified";
	// 		users[userIndex].otp;
	// 		localStorage.setItem("users", JSON.stringify(users));

	// 		setIsVerified(true);
	// 		toast.success("Account verified");

	// 		setTimeout(() => {
	// 			navigate("/login");
	// 		}, 3000);
	// 	} else {
	// 		toast.error("Invalid OTP");
	// 	}
	// };

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

								<Button type="submit">Register</Button>
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
