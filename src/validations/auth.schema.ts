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
		name: z.string().min(3),
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