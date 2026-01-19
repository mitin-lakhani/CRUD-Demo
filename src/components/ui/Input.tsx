import { forwardRef, useState } from "react";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	errorMsg?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, errorMsg, className, ...props }, ref) => {
		const [type, setType] = useState(props.type);
		return (
			<div className="flex flex-col items-start justify-start w-full gap-1">
				{label ? (
					<label className="text-sm font-medium">{label}</label>
				) : (
					""
				)}
				<div className="relative w-full">
					<input
						ref={ref}
						{...props}
						type={type}
					
						className={`w-full border px-3 py-2 rounded ${className}`}
					/>
					<span
						className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
						onClick={() =>
							type === "password"
								? setType("text")
								: setType("password")
						}
					>
						{props.type === "password"
							? type === "password"	
								? <BiHide className="text-green-600" size={20} />
								: <BiShow className="text-red-500" size={20} />
							: ""}
					</span>
				</div>
				{errorMsg && (
					<p className="text-red-500 text-sm mt-1">{errorMsg}</p>
				)}
			</div>
		);
	}
);

