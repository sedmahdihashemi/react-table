// components/RequireAuth.tsx
import { Navigate } from "react-router-dom";

interface RequireAuthProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

const RequireAuth = ({ children, allowedRoles }: RequireAuthProps) => {
  const role = localStorage.getItem("role"); // یا از Context یا Redux بگیر

  if (!role) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
