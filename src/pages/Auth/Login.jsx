import { Eye, Lock, LogIn, Mail } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="w-full max-w-sm my-20">
      <div className="bg-white border border-gray-300/70 rounded-xl p-5">
        <div className="border-b border-gray-300/70 mb-5 pb-3">
          <h1 className="text-2xl font-semibold text-center">
            Login your account
          </h1>
        </div>
        <form>
          {/* <div className="error w-full mb-3 px-4 py-2 rounded-sm bg-red-200/70 text-red-900 border border-red-300/50">
            <p className="w-full text-center text-sm">There is an error</p>
          </div> */}
          {/* <div className="error w-full my-3 px-4 py-2 rounded-sm bg-green-500/20 text-green-900 border border-green-300/70">
            <p className="w-full text-center text-sm">
              Success
            </p>
          </div> */}
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
          <div className="flex items-center border border-gray-300/70 h-10 rounded-sm mb-3">
            <label htmlFor="password" className="h-full">
              <div className="border-r border-gray-300/70 bg-gray-200/70 hover:bg-gray-300/60 px-2 h-full flex items-center justify-center">
                <Lock className="shrink-0 w-5 text-gray-500" />
              </div>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="h-full w-full px-2 outline-none"
              placeholder="Enter your password"
              required
            />
            <div className="h-full flex items-center justify-center pr-2 ">
              <Eye className="shrink-0 w-4.5 text-gray-500 cursor-pointer" />
            </div>
          </div>
          <a className="text-sm hover:underline" href="#">
            Forgot Password?
          </a>
          <button
            type="submit"
            className="bg-gray-800 cursor-pointer text-white w-full my-3 px-4 py-2 rounded-sm flex items-center gap-1 justify-center text-sm hover:bg-gray-900"
          >
            Login <LogIn className="w-5" />
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
