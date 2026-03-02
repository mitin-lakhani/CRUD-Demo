// validations/auth.schema.ts
import { z } from "zod";
export const loginSchema = z.object({
	email: z.string().min(1,"Email is required").email("Enter a valid email address"),
	password: z.string().min(6,"minimum 6 character"),
});
export type LoginFormValues = z.infer<typeof loginSchema>;

export const registerSchema = z
	.object({
		email: z.string().min(1,"minimum 3 character are required").email("email is required"),
		password: z.string().min(6,"minimum 6 character are required"),	
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
		name: z.string().min(3,"minimum 3 character are required"),
		email: z.string().min(1,"Invalid email").email("Enter a valid email address"),
		password: z.string().min(6,"min 6 character are required"),
		confirmPassword: z.string().min(6),
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

// add products schema
export const productschema = z.object({
  title: z.string().min(1, "Product name is required"),
  price: z.number().min(1, "Price required"),
  qty: z.number().min(1, "Quantity required"),
  categories:z.string("mendotory one categories are required"),
  image: z.string().url("Enter valid image URL"),
});
export type productFormValues = z.infer<typeof productschema>;

// export const productcrudapischema = z.object({
// 	productname:z.string().min(3,"Name should be >= 3 characters"),
// 	productprice:z.number("price are required").min(3,"minimum price is greter >=3"),
// 	productqty:z.number("product qty are required").min(1,"minimum 1 qty are required"),
// 	// productcategories:z.string("categories are requires"),
// 	productimage:z.string("image url are required"),
	
// })
// export type ProductCrudApiValues = z.infer<typeof productcrudapischema>;		
