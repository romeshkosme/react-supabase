import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex justify-between bg-blue-600 text-white px-4 py-4">
        <div>
          <ul className="flex gap-x-2">
            <li className="cursor-pointer">Logo</li>
            <li className="cursor-pointer">Home</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="cursor-pointer"><Link to="/logout">Logout</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
