import { Link } from "react-router-dom";

const NotFoundPage = () => {
  // const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col gap-4 items-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="bg-primary text-white p-2 rounded-md" to="/">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
