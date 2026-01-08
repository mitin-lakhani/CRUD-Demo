import { Input } from "@/components/ui/Input";
import { type AdduserFormValue, adduserSchema } from "@/validations/auth.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

type UserFormProps = {
	formData: { name: string; email: string };
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: () => void;
	onCancel: () => void;
	title: string
};

const UserFormPage: React.FC<UserFormProps> = ({ onCancel}) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<AdduserFormValue>({
		resolver: zodResolver(adduserSchema)
	})
	const onSubmit = (data: AdduserFormValue) => {
		toast.success("user added successFully")
		console.log(data);
		reset()
	}
	return (
		<div className="mb-6 border rounded-lg p-4 bg-gray-50 font-semibold">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
			</div>
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
				<button className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition" onClick={handleSubmit(onSubmit)}>
					Add
				</button>
				<button onClick={onCancel} className="bg-gray-400 text-white px-5 py-2 rounded hover:bg-gray-500 transition">
					Cancel
				</button>
			</div>
		</div>
	);
};

export default UserFormPage;

