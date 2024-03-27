import React from "react";
import { FaBars } from "react-icons/fa";
const NavbarDashboard = ({
  setToggle,
  toggle,
  setUserInfo,
  userInfo,
  user,
  username,
}) => {
  return (
    <nav className="py-4 px-8 align-element">
      <div className="flex justify-between items-center ">
        <button
          onClick={() => setToggle(!toggle)}
          className="text-2xl text-yellow-400 transition duration-300 hover:text-yellow-600 hover:scale-125"
        >
          <FaBars />
        </button>
        <h1 className="font-bold text-3xl tracking-wider">notes</h1>
        <button onClick={() => setUserInfo(!userInfo)}>
          <div className="w-8 h-8 rounded-[50%] bg-yellow-200 grid place-items-center font-bold capitalize">
            {user?.username[0]}
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
