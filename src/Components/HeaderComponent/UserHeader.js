import React from "react";
import { Link } from "react-router-dom";

function UserHeader() {
  
      
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between relative">
      <div className="flex items-center gap-3">
        <span className="text-2xl">👤</span>
        <h2 className="font-bold text-gray-700 hidden sm:block">
          User Panel
        </h2>
      </div>


      <div className="absolute left-1/2 -translate-x-1/2">
        <h2 className="text-2xl font-extrabold text-indigo-600 tracking-wide">
          Learners
        </h2>
      </div>


      <button
     
        className="bg-red-500 text-white px-5 py-2 rounded-xl font-semibold hover:bg-red-600 transition"
      >
      <Link to={"/logout"}>  Logout</Link>
      </button>
    </header>
  );
}

export default UserHeader;
