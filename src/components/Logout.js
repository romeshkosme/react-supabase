import React, { useEffect } from "react";
import { getAuth } from "../helpers/auth";

function Logout() {
  useEffect(() => {
    const { error } = getAuth().logout();
    if (error) {
      console.log("error while logout - ", error);
    } else {
      console.log("logout");
      window.location.href = "/";
    }
  }, []);
  return <></>;
}

export default Logout;
