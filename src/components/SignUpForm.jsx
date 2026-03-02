import React from "react";
import { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { LuDot } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const SignUpForm = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const naviagte = useNavigate();
  const [showPassword, SetShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const userImg = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, userImg, password, email);

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUser({
          displayName: name,
          photoURL: userImg,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: userImg });
            naviagte("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });

        toast("A User Account Created Succesfully");
        form.reset();
      })
      .catch((error) => {
        toast.error("error.message");
      });
  };
  return (
    <div className="flex items-center justify-center bg-base-100 mt-10">
      <form
        onSubmit={handleSignUp}
        className="fieldset bg-base-200 border-base-300 shadow-2xl rounded-box w-xs border p-6 space-y-1"
      >
        <label className="label">Name</label>
        <input name="name" type="text" className="input" placeholder="Name" />

        <label className="label">Photo</label>
        <input
          name="photo"
          type="url"
          className="input"
          placeholder="Photo URL"
        />

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
            className="absolute cursor-pointer right-4 top-3"
          >
            {showPassword ? <FaEyeSlash> </FaEyeSlash> : <FaEye />}
          </span>
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Sign Up
        </button>
        {/* <p className="text-center text-sm">or</p>
        <button className="btn border border-primary mt-2">
          {" "}
          <FcGoogle className="text-xl" />
          SignUp with Google
        </button>
        */}

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
      </form>
    </div>
  );
};

export default SignUpForm;
