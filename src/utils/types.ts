export type IUser = {
	id: string;
	name: string;
	email: string;
};
export type UserTableProps = {
	users: IUser[];
	onEdit: (user: IUser) => void;
	onDelete: (email: string) => void;
};

