import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const roles = JSON.parse(localStorage.getItem("userRoles")) || [];

  const hasAccess = roles.some((role) => allowedRoles.includes(role));

  if (!hasAccess) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
