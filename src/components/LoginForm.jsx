import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { LuDot } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const LoginForm = () => {
  const { loginUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast("Login Succesfully");
        navigate(`${location.state ? location.state : "/"}`);
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast("Something went wrong:", errorMessage);
      });
  };
  return (
    <div className="flex items-center justify-center bg-base-100 mt-10">
      <form
        onSubmit={handleLogin}
        className="fieldset bg-base-200 border-base-300 shadow-2xl rounded-box w-xs border p-6 space-y-1"
      >
        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          className="input"
          placeholder="Email"
        />

        <label className="label">Password</label>
        <input
          name="password"
          type="password"
          className="input"
          placeholder="Password"
        />

        <div>
          <a className="link link-hover">Forgot password?</a>
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Login
        </button>
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

        <div className="flex items-center justify-center gap-2">
          <a className="cursor-pointer hover:text-primary hover:underline">
            Privacy Policy
          </a>
          <LuDot />
          <a className="cursor-pointer hover:text-primary hover:underline">
            Terms of Services
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
