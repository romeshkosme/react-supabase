import SimpleReactValidator from "simple-react-validator";
import { Navigate } from "react-router-dom";

export const getValidator = () => {
  return new SimpleReactValidator();
};

export const PrivateRoute = ({ auth: isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

export const PublicRoute = ({ auth: isAuthenticated, children }) => {
  return !isAuthenticated ? children : <Navigate to="/dashboard" />;
};
