import { Sidebar, NavbarDashboard } from "../components";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";

import { toast } from "react-toastify";
import { logout } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};
export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("You must be logged in to access your dashboard");
    return redirect("/login");
  }
  return null;
};
const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = getUserFromLocalStorage();
  const [toggle, setToggle] = useState(false);
  const [userInfo, setUserInfo] = useState(false);
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully.");
    navigate("/login");
  };
  return (
    <>
      {/* NAVBAR */}
      <NavbarDashboard
        setToggle={setToggle}
        toggle={toggle}
        setUserInfo={setUserInfo}
        userInfo={userInfo}
        user={user}
      />
      {/* SIDEBAR */}

      <Sidebar toggle={toggle} setToggle={setToggle} />

      {/* USER/LOGOUT */}
      {userInfo && (
        <div className="rounded-md shadow-[3px_3px_1px_0px_rgb(0,0,0,0.05)] w-40 px-4 py-2 absolute right-8 bg-yellow-100">
          <h3 className="font-bold text-sm tracking-widest uppercase mb-2">
            {user?.username}
          </h3>
          <button
            onClick={handleLogout}
            className="capitalize hover:text-yellow-500 transition duration-300"
          >
            logout
          </button>
        </div>
      )}
      {/* OUTLET */}
      <section className="align-element">
        <Outlet />
      </section>
    </>
  );
};
export default Dashboard;
