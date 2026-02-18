import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import img from "../assets/Register.jpg";
import SignUpForm from "../components/SignUpForm";

const Register = () => {
  return (
    <div className="bg-base-100">
      <div className="grid grid-cols-3 space-y-4 w-11/12 mx-auto ">
        <div className="col-span-1 hidden lg:block">
          <img
            className="h-full w-full rounded-2xl shadow-2xl hover:scale-102"
            src={img}
          />
        </div>
        <div className="lg:col-span-2 col-span-3 flex flex-col items-center pt-6">
          <RiAccountCircleFill className="text-2xl cursor-pointer" />
          <h1 className="font-bold text-2xl">Create account</h1>
          <p className="">Get started with WarmPaws</p>
          <SignUpForm></SignUpForm>
        </div>
      </div>
    </div>
  );
};

export default Register;
