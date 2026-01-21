import { Input } from "@/components/ui/Input";
import {
	type AdduserFormValue,
	adduserSchema,
} from "@/validations/auth.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import type { IUser } from "@/utils/types";
import { useEffect } from "react";

type UserFormProps = {
	user: IUser | null;
	close: () => void;
	users: IUser[];
	setUsers: (users: IUser[]) => void;
};

const UserFormPage: React.FC<UserFormProps> = ({
	user,
	close,
	users,
	setUsers,
}) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<AdduserFormValue>({
		resolver: zodResolver(adduserSchema),
	});

	useEffect(() => {
		if (user) {
			reset({
				name: user.name,
				email: user.email,
				password: user.password,
			});
		}
	}, [user]);

	const onSubmit = (data: AdduserFormValue) => {
		if (user && user.id) {
			const indexEmail = users.findIndex(
				(userItem) =>userItem.email === data.email && userItem.id !== user.id
			);
		
			if (indexEmail !== -1) {
				toast.error("User with this email already exists");
				return;
			}
			const index = users.findIndex(
				(userItem) => userItem.id === user.id
			);
			if (index !== -1) {
				users[index] = { ...user, ...data };
			}
			if(user.password !== data.confirmPassword){
				toast.error("password not match");
				return;
			}
			setUsers(users);
			toast.success("User updated successfully");
		} else {
			const index = users.findIndex(
				(userItem) => userItem.email === data.email
			);
			if (index !== -1) {
				toast.error("User with this email already exists");
				return;
			}
			
			const newUser: IUser = {
				id: Date.now(),
				name: data.name,
				email: data.email,	
				password: data.password,
				confirmPassword:data.confirmPassword,
			};
			if(newUser.password !== newUser.confirmPassword){
				toast.error("can not match password");
				return;
			}
			const updatedUsers = [...users, newUser];
			setUsers(updatedUsers);	
			toast.success("User added successfully");
		}
		localStorage.setItem("users", JSON.stringify(users));
		reset();
		close();
	};
	return (
		<div className="mb-6 border rounded-lg p-4 bg-gray-50 font-semibold">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black"></div>
			<form className="h-1/2" onSubmit={handleSubmit(onSubmit)}>
				<div>
					<Input
						type="name"
						label="Name"
						placeholder="Enter user name"
						{...register("name")}
						errorMsg={errors.name?.message}
					/>
				</div>
				<div>
					<Input
						type="email"
						label="Email"
						placeholder="Enter user email"
						{...register("email")}
						errorMsg={errors.email?.message}
					/>
				</div>
				<div>
					<Input
						type="password"
						label="password"
						placeholder="Enter user password"
						{...register("password")}
						errorMsg={errors.password?.message}
					/>
				</div>
				<div>
					<Input
						type="password"
						label="Confirm Password"
						placeholder="Confirm password"
						{...register("confirmPassword")}
						errorMsg={errors.confirmPassword?.message}
					/>
				</div>
			</form>
			<div className="mt-4 flex gap-3">
				<button
					className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition"
					onClick={handleSubmit(onSubmit)}
				>
					{user && user.id ? "Update" : "Add"}
				</button>
				<button
					onClick={close}
					className="bg-gray-400 text-white px-5 py-2 rounded hover:bg-gray-500 transition"
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default UserFormPage;
