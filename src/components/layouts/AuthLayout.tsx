import { useAppState } from "@/utils/useAppState";
import { Navigate, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  const [state] = useAppState();
  if (state.user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};
  