import React, { useState, useRef } from "react";
import { getValidator } from "../helpers/utils";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../helpers/supabase.config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate ();
  const validator = useRef(getValidator());
  const [, forceUpdate] = useState(0);
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });
      if (user) {
        console.log("user - ", user);
        navigate('/dashboard');
      } 
      if (error) {
        console.log("error - ", error);
      }
    } else {
      validator.current.showMessages();
      forceUpdate(1);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      {/* header */}
      {/* card */}
      <div className="w-80 border-solid border-2 border-gray-500 rounded-md">
        <h1 className="text-center text-4xl">Login</h1>
        {/* form */}
        <div className="m-4">
          <div className="flex flex-col">
            <label>Email</label>
            <input
              type="email"
              className="border-solid border-2 rounded-sm border-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="text-red-500 text-sm">
              {validator.current.message("email", email, "required|email")}
            </span>
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              type="password"
              className="border-solid border-2 rounded-sm border-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="text-red-500 text-sm">
              {validator.current.message("password", password, "required")}
            </span>
          </div>
          <div className="mt-2">
            <button
              className="bg-blue-500 w-full rounded-sm text-white py-2"
              onClick={onHandleSubmit}
            >
              Login
            </button>
          </div>
          <div className="mt-2">
            <p>
              Not registered?{" "}
              <span className="cursor-pointer">
                <Link to={"/sign-up"}>Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;