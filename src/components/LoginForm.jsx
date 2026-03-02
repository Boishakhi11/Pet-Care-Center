import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { LuDot } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext, googleProvider } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const { loginUser, googleLogin } = use(AuthContext);
  const [showPassword, SetShowPassword] = useState(false);
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

  const handleGoogleSignIn = () => {
    googleLogin(googleProvider)
      .then((result) => {
        toast("Suceesfully logged In");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
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
        <div className="relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            className="input"
            placeholder="Password"
          />

          <span
            onClick={() => SetShowPassword(!showPassword)}
            className="absolute top-3 right-3"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div>
          <Link to="/auth/forget-password" className="link link-hover">
            Forgot password?
          </Link>
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Login
        </button>
        <p className="text-center text-sm">or</p>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="btn border border-primary mt-2"
        >
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
