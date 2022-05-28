import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate=useNavigate()
 
  const logout = () => {
    signOut(auth);
    navigate("/login")
  };
  
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/portfolio">MY Portfolio</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        {user ? (
          <button onClick={logout} class="btn btn-ghost">
           <span>Sign Out</span>
           <p className="text-secondary font-bold">{user.displayName}</p>
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
      <li>
        <Link to="/signup">SignUp</Link>
      </li>
    </>
  );
  return (
    <div class="navbar bg-base-100 sticky top-0 z-50 bg-secondary lg:text-white">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
        </ul>
      </div>
      <a class="btn btn-ghost normal-case text-xl">Parts||Hub</a>
    </div>
    <div class="navbar-center hidden lg:flex ">
      <ul class="menu menu-horizontal p-0">
      {menuItems}
      </ul>
    </div>
    <div className="navbar-end">
    <label tabindex="1" for="dashboard-sidebar" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
    </div>
  </div>
  );
};

export default Navbar;
