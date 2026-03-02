import React from "react";
import img from "../assets/derek-story-SJ7jy-W-g0I-unsplash.jpg";
import { IoMdLogIn } from "react-icons/io";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="bg-base-100">
      <div className="grid grid-cols-3 space-y-4 w-11/12 mx-auto ">
        <div className="animate__animated animate__slideInLeft lg:col-span-2 col-span-3 flex flex-col items-center pt-6">
          <IoMdLogIn className="text-2xl cursor-pointer" />
          <h1 className="font-bold text-2xl">Sign in to your account</h1>
          <p className="">Enter your detials to access the dashboard</p>
          <LoginForm></LoginForm>
        </div>

        <div className="animate__animated animate__slideInRight col-span-1 hidden lg:block">
          <img
            className="h-full w-full rounded-2xl shadow-2xl hover:scale-102"
            src={img}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
