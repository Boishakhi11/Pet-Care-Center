import React from "react";
import logo from "../assets/logo-Image.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-accent-content"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/" className="text-xl cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-xl cursor-pointer">
                Services
              </Link>
            </li>
            <li>
              <Link to="profile" className="text-xl cursor-pointer">
                My Profile
              </Link>
            </li>
          </ul>

          {/* Desktop logo */}
          <div className="hidden lg:flex gap-2 items-center">
            <img className="w-10" src={logo} />
            <h1 className="text-3xl font-semibold text-accent-content italic">
              WarmPaws
            </h1>
          </div>
        </div>
      </div>

      {/*Mobile Logo*/}
      <div className="lg:hidden flex gap-2 items-center justify-center">
        <img className="w-8" src={logo}></img>
        <h1 className="text-2xl font-semibold text-accent-content italic">
          WarmPaws
        </h1>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-xl cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-xl cursor-pointer">
              Services
            </Link>
          </li>
          <li>
            <Link to="profile" className="text-xl cursor-pointer">
              My Profile
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/auth/login" className="btn btn-primary text-[22px]">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
