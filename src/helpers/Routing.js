import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { getAuth } from "./auth";
import { PrivateRoute, PublicRoute } from "../helpers/utils";
import Logout from "../components/Logout";
export const Routing = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (getAuth().isAuthenticated()) {
      setIsAuthenticated(true);
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute auth={isAuthenticated}>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/sign-up"
            element={
              <PublicRoute auth={isAuthenticated}>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute auth={isAuthenticated}>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/logout"
            element={
              <PrivateRoute auth={isAuthenticated}>
                <Logout />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
