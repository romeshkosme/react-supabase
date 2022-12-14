import React, { useState, useRef } from "react";
import { getValidator } from "../helpers/utils";
import { Link } from "react-router-dom";
import { supabase } from "../helpers/supabase.config";
import { TailSpin } from "react-loader-spinner";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState();
	const [loader, setLoader] = useState(false);
	const validator = useRef(getValidator());
	const [, forceUpdate] = useState(0);
	const onHandleSubmit = async (e) => {
		e.preventDefault();
		if (validator.current.allValid()) {
			setLoader(true);
			const { user, error } = await supabase.auth.signIn({
				email: email,
				password: password,
			});
			setLoader(false);
			if (user) {
				// console.log("user - ", user);
				window.location.href = "/dashboard";
			}
			if (error) {
				setError(error.message);
			}
		} else {
			validator.current.showMessages();
			forceUpdate(1);
		}
	};
	return (
		<div className='h-[95vh] flex justify-center items-center bg-neutral-100'>
			{/* header */}
			{/* card */}
			<div className='w-80'>
				<h1 className='text-center text-4xl'>Login</h1>
				{/* form */}
				<div className='m-4'>
					<div className='flex flex-col'>
						<label>Email</label>
						<input
							type='email'
							className='border-solid border-2 rounded-sm border-gray-500'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<span className='text-red-500 text-sm'>
							{validator.current.message("email", email, "required|email")}
						</span>
					</div>
					<div className='flex flex-col'>
						<label>Password</label>
						<input
							type='password'
							className='border-solid border-2 rounded-sm border-gray-500'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<span className='text-red-500 text-sm'>
							{validator.current.message("password", password, "required")}
						</span>
					</div>
					{error && (
						<div className='p-2 text-sm rounded-sm border-solid rounded-sm border border-red-600 my-2'>
							<span className='text-red-600'>{error}</span>
						</div>
					)}
					<div className='mt-2'>
						{!loader && (
							<button
								className='bg-blue-500 w-full rounded-sm text-white py-1'
								onClick={onHandleSubmit}
							>
								Login
							</button>
						)}
						{loader && (
							<button className='bg-blue-500 w-full rounded-sm text-white py-1'>
								<TailSpin
									height='20'
									width='20'
									color='#fff'
									ariaLabel='tail-spin-loading'
									radius='2'
									wrapperStyle={{}}
									wrapperClass='flex justify-center'
								/>
							</button>
						)}
					</div>
					<div className='mt-2'>
						<p>
							Not registered?{" "}
							<span className='cursor-pointer underline underline-offset-1 hover:text-blue-500 hover:font-bold'>
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
