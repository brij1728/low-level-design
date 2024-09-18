import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  // Replace this with actual authentication logic
  const isAuthenticated = false; // Example: check if the user is authenticated

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
