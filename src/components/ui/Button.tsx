interface ButtonProps {
	type?: "button" | "submit" | "reset";
	className?: string;
	children?: React.ReactNode;
}

export const Button = ({...props }: ButtonProps) => {
	return (
		<div className="flex flex-col items-start justify-start">
			<button
				type={props.type || "button"}
				className={`border px-3 py-2 cursor-pointer block rounded w-full button-theme bg-background  text-text ${props.className}`}
			>
				{props.children}
			</button>
		</div>
	);
};
