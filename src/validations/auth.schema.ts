// validations/auth.schema.ts
import { z } from "zod";
export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});
export type LoginFormValues = z.infer<typeof loginSchema>;

export const registerSchema = z
	.object({
		email: z.string().email(),
		password: z.string().min(6),
		confirmPassword: z.string().min(6),
		name: z.string().min(3).regex(/^[a-zA-Z ]+$/,"Only letters and spaces allowed"),
		// otp:z.number(),
		// status:z.string()
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});
export type RegisterFormValues = z.infer<typeof registerSchema>;

export const adduserSchema = z.object({
		email: z.string().email(),
		password: z.string().min(6),
		confirmPassword: z.string().min(6),
		name: z.string().min(3),
})
export type AdduserFormValue = z.infer<typeof adduserSchema>
export const isAuthenticated = (): boolean => {
	const user = localStorage.getItem("currentUser");
	return !!user; // true if exists
};

// change password schema
export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password required"),
    newPassword: z.string().min(6, "Minimum 6 characters"),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => !data.newPassword ||  data.newPassword === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });

export type ChangePasswordFormValue = z.infer<typeof changePasswordSchema>;

// otp very fy form 
export const otpSchema = z.object({
  otp: z
    .string()
    .min(6, "OTP must be 6 digits")
    .max(6, "OTP must be 6 digits").regex(/^[0-9]+$/,"Only numbers allowed")
});

export type OtpFormValues = z.infer<typeof otpSchema>;