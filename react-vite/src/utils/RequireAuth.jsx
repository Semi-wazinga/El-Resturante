import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const isAdmin = localStorage.getItem("isAdmin");
  return isAdmin ? children : <Navigate to='/login' />;
};

export default RequireAuth;
