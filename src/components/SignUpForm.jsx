import React from "react";
import { FcGoogle } from "react-icons/fc";
import { LuDot } from "react-icons/lu";
import { Link } from "react-router";

const SignUpForm = () => {
  return (
    <div className="flex items-center justify-center bg-base-100 mt-10">
      <fieldset className="fieldset bg-base-200 border-base-300 shadow-2xl rounded-box w-xs border p-6 space-y-1">
        <label className="label">Name</label>
        <input type="text" className="input" placeholder="Name" />

        <label className="label">Photo</label>
        <input type="" className="input" placeholder="Photo URL" />

        <label className="label">Email</label>
        <input type="url" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-primary mt-2">Sign Up</button>
        <p className="text-center text-sm">or</p>
        <button className="btn border border-primary mt-2">
          {" "}
          <FcGoogle className="text-xl" />
          Login with Google
        </button>

        <div>
          <p className="text-[16px] text-center">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-primary">
              {" "}
              Login{" "}
            </Link>
          </p>

          <div className="text-center mt-3">
            <p>By sigining up, you agree to our</p>
            <div className="flex items-center justify-center gap-2">
              <a className="cursor-pointer hover:text-primary hover:underline">
                Privacy Policy
              </a>
              <LuDot />
              <a className="cursor-pointer hover:text-primary hover:underline">
                Terms of Services
              </a>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default SignUpForm;
