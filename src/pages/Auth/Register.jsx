import { Eye, EyeOff, Lock, Mail, UserRound } from "lucide-react";
import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { sendEmailVerification } from "firebase/auth";
import Title from "../../components/Title";

const Register = () => {
  const { createUser, updateUser } = use(AuthContext);
  const [loading, setLoading] = useState(false);
  const [isEye, setIsEye] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

  const handleShowPassword = () => {
    setIsEye(!isEye);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();
    const confirmPassword = event.target.cpassword.value.trim();
    const checkBox = event.target.checkbox.checked;

    setError("");
    setSuccess("");

    // error valodation
    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      setError("All fields are required. Please fill out the form.");
      return;
    }

    if (name.trim().length < 2) {
      setError("Name must be at least 2 characters long.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters and include uppercase, lowercase, a number, and a special character.",
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords doesn't match. Please try again.");
      return;
    }

    if (!checkBox) {
      setError("You must accept the Terms and Conditions to continue.");
      return;
    }
    // error valodation

    setLoading(true);
    //send values
    createUser(email, password)
      .then((result) => {
        return updateUser(name).then(() => {
          sendEmailVerification(result.user);
        });
      })
      .then(() => {
        event.target.reset();
        setSuccess(
          "Account created successfully. Please check your email address.",
        );
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code == "auth/email-already-in-use") {
          setError(
            "This email is already registered. Please use a different one.",
          );
        } else {
          setError("Something went wrong. Please try again later.");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full max-w-sm py-7">
      <Title title="Register - Dragon News" />
      <div className="bg-white border border-gray-300/70 rounded-xl p-5">
        <div className="border-b border-gray-300/70 mb-4 pb-2">
          <h1 className="text-2xl font-semibold text-center">
            Register account
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="error w-full mb-3 px-4 py-2 rounded-sm bg-red-200/70 text-red-900 border border-red-300/50">
              <p className="w-full text-center text-sm">{error}</p>
            </div>
          )}
          {success && (
            <div className="error w-full my-3 px-4 py-2 rounded-sm bg-green-500/20 text-green-900 border border-green-300/70">
              <p className="w-full text-center text-sm">{success}</p>
            </div>
          )}
          <div className="flex items-center border border-gray-300/70 h-10 rounded-sm mb-4">
            <label htmlFor="name" className="h-full">
              <div className="border-r border-gray-300/70 bg-gray-200/70 hover:bg-gray-300/60 px-2 h-full flex items-center justify-center">
                <UserRound className="shrink-0 w-5 text-gray-500" />
              </div>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="h-full w-full px-2 outline-none"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex items-center border border-gray-300/70 h-10 rounded-sm mb-4">
            <label htmlFor="email" className="h-full">
              <div className="border-r border-gray-300/70 bg-gray-200/70 hover:bg-gray-300/60 px-2 h-full flex items-center justify-center">
                <Mail className="shrink-0 w-5 text-gray-500" />
              </div>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="h-full w-full px-2 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex items-center border border-gray-300/70 h-10 rounded-sm mb-4">
            <label htmlFor="password" className="h-full">
              <div className="border-r border-gray-300/70 bg-gray-200/70 hover:bg-gray-300/60 px-2 h-full flex items-center justify-center">
                <Lock className="shrink-0 w-5 text-gray-500" />
              </div>
            </label>
            <input
              type={isEye ? "text" : "password"}
              name="password"
              id="password"
              className="h-full w-full px-2 outline-none"
              placeholder="Enter password"
              required
            />
            <div
              onClick={handleShowPassword}
              className="h-full flex items-center justify-center pr-2 "
            >
              {isEye ? (
                <EyeOff className="shrink-0 w-4.5 text-gray-500 cursor-pointer" />
              ) : (
                <Eye className="shrink-0 w-4.5 text-gray-500 cursor-pointer" />
              )}
            </div>
          </div>
          <div className="flex items-center border border-gray-300/70 h-10 rounded-sm mb-3">
            <label htmlFor="cpassword" className="h-full">
              <div className="border-r border-gray-300/70 bg-gray-200/70 hover:bg-gray-300/60 px-2 h-full flex items-center justify-center">
                <Lock className="shrink-0 w-5 text-gray-500" />
              </div>
            </label>
            <input
              type={isEye ? "text" : "password"}
              name="cpassword"
              id="cpassword"
              className="h-full w-full px-2 outline-none"
              placeholder="Confirm password"
              required
            />
            <div
              onClick={handleShowPassword}
              className="h-full flex items-center justify-center pr-2 "
            >
              {isEye ? (
                <EyeOff className="shrink-0 w-4.5 text-gray-500 cursor-pointer" />
              ) : (
                <Eye className="shrink-0 w-4.5 text-gray-500 cursor-pointer" />
              )}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="checkbox" className="text-sm">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                className="checkbox checkbox-sm"
              />{" "}
              Accept Terms & Consitions
            </label>
          </div>
          <button
            type="submit"
            className="bg-gray-800 cursor-pointer text-white w-full mb-3 px-4 py-2 rounded-sm flex items-center gap-1 justify-center text-sm hover:bg-gray-900"
          >
            Register{" "}
            {loading && (
              <span className="loading loading-spinner loading-sm"></span>
            )}
          </button>
          <div className="flex items-center gap-1 justify-center">
            <p className="text-sm">Already Have An Account? </p>
            <Link
              to="/auth/login"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
