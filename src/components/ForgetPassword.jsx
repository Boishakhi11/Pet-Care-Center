import React, { use, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation } from "react-router";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const { passwordReset } = use(AuthContext);
  const location = useLocation();

  const [email, setEmail] = useState("");

  // Auto-fill email from login page
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    passwordReset(email)
      .then(() => {
        toast.success("Reset email sent successfully");
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6 mt-30">
        <h2 className="text-2xl font-bold text-center mb-6">
          Reset Your Password
        </h2>

        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" className="btn btn-primary w-full">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
