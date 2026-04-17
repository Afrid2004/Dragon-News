import { Eye, EyeOff, Lock, LogIn, Mail } from "lucide-react";
import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import Title from "../../components/Title";

const Login = () => {
  const { logInUser, resetPassword } = use(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isEye, setIsEye] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const emailRef = useRef(null);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setIsEye(!isEye);
  };

  const handleResetPassword = () => {
    setError("");
    setSuccess("");
    const emailValue = emailRef.current.value.trim();
    if (!emailValue) {
      setError("Please enter your email.");
      emailRef.current.focus();
      return;
    }
    resetPassword(emailValue)
      .then((result) => {
        setSuccess("A password reset link sent to your email.");
      })
      .catch((error) => {
        if (error.code == "auth/invalid-email") {
          setError("The email you entered is incorrect.");
        } else {
          setError("Something went wrong. Please try again later.");
        }
      });
  };

  const handleSubmit = (event) => {
    setError("");
    setSuccess("");
    event.preventDefault();
    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();

    if (!email.trim() || !password.trim()) {
      setError("All fields are required. Please fill out the form.");
      return;
    }

    setLoading(true);
    logInUser(email, password)
      .then((result) => {
        if (!result.user.emailVerified) {
          setError("Please verify your email first.");
          setLoading(false);
          return;
        }

        navigate(from, { replace: true });
      })
      .catch((err) => {
        if (err.code == "auth/invalid-credential") {
          setError("The email or password you entered is incorrect.");
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
      <Title title="Login - Dragon News" />
      <div className="bg-white border border-gray-300/70 rounded-xl p-5">
        <div className="border-b border-gray-300/70 mb-5 pb-3">
          <h1 className="text-2xl font-semibold text-center">
            Login your account
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
            <label htmlFor="email" className="h-full">
              <div className="border-r border-gray-300/70 bg-gray-200/70 hover:bg-gray-300/60 px-2 h-full flex items-center justify-center">
                <Mail className="shrink-0 w-5 text-gray-500" />
              </div>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              ref={emailRef}
              className="h-full w-full px-2 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex items-center border border-gray-300/70 h-10 rounded-sm mb-3">
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
              placeholder="Enter your password"
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
          <div>
            <p
              onClick={handleResetPassword}
              className="text-sm hover:underline cursor-pointer w-fit  py-1"
            >
              Forgot Password?
            </p>
          </div>
          <button
            type="submit"
            className="bg-gray-800 cursor-pointer text-white w-full my-3 px-4 py-2 rounded-sm flex items-center gap-1 justify-center text-sm hover:bg-gray-900"
          >
            Login{" "}
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <LogIn className="w-5" />
            )}
          </button>
          <div className="flex items-center gap-1 justify-center">
            <p className="text-sm">Dont’t Have An Account? </p>
            <Link
              to="/auth/register"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
