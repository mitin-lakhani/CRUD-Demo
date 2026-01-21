export interface IUser {
	id: number;
	name: string;
	email: string;
	password: string;
	confirmPassword:string;
	images:"src/assets/react.svg";
}
export interface UserTableProps {
	users: IUser[];
	onEdit: (user: IUser) => void;
	onDelete: (email: string) => void;
}
