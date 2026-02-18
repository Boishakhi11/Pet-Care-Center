import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center bg-base-100 mt-10">
      <fieldset className="fieldset bg-base-200 border-base-300 shadow-2xl rounded-box w-xs border p-6 space-y-1">
        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <div>
          <a className="link link-hover">Forgot password?</a>
        </div>

        <button className="btn btn-primary mt-2">Login</button>
        <p className="text-center text-sm">or</p>
        <button className="btn border border-primary mt-2">
          {" "}
          <FcGoogle className="text-xl" />
          Login with Google
        </button>

        <div>
          <p className="text-[16px] text-center">
            Don't have an account?{" "}
            <Link to="/auth/sigup" className="text-primary">
              {" "}
              SignUp{" "}
            </Link>
          </p>
        </div>
      </fieldset>
    </div>
  );
};

export default LoginForm;
