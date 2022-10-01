import React, { useEffect } from "react";
import { getAuth } from "../helpers/auth";
import { TailSpin } from "react-loader-spinner";

function Logout() {
	useEffect(() => {
		const { error } = getAuth().logout();
		if (error) {
			console.log("error while logout - ", error);
		} else {
			window.location.href = "/";
		}
	}, []);
	return (
		<>
			<TailSpin
				height='40'
				width='40'
				color='#000'
				ariaLabel='tail-spin-loading'
				radius='2'
				wrapperStyle={{}}
				wrapperClass='flex justify-center items-center'
			/>
		</>
	);
}

export default Logout;
