
export interface IUser {
  // findIndex(arg0: (userItem: any) => boolean): unknown;
  id: number;
  name: string;
  email: string;
  password: string;
  status:string;
  images:string;
}
export interface UserTableProps {
  users: IUser[];
  onEdit: (user: IUser) => void;
  onDelete: (email: string) => void;
}
export interface Product{
  id: number;
  title: string;
  price: number;
  categories:string;
  qty: number;
  image: string;
};



