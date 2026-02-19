import React from "react";
import error from "../assets/Error.png";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-base-100">
      <img src={error} alt="Error page" className="max-w-md w-full" />
      <h2 className="text-base-content text-xl font-semibold">
        Oops! Page Not Found ❄️
      </h2>
      <Link to="/" className="btn btn-primary">
        Return Home
      </Link>
    </div>
  );
};

export default Error;
