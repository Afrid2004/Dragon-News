import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOutUser().then(() => {
      navigate("/auth/login", { replace: true });
    });
  };
  const headerMenus = (
    <>
      <NavLink to="/" className="font-medium">
        Home
      </NavLink>
      <NavLink to="/profile" className="font-medium">
        Profile
      </NavLink>
      <NavLink to="/blogs" className="font-medium">
        Blogs
      </NavLink>
    </>
  );
  return (
    <header className="sticky top-0 z-5">
      <nav>
        <div className="bg-white shadow-xs py-3 border-b border-gray-300/70">
          <div className="container">
            <div className="flex justify-between items-center">
              <div className="left-logo w-37.5">
                <Link to="/">
                  <img
                    src="/images/logo.webp"
                    alt="Dragon News"
                    className="w-full"
                  />
                </Link>
              </div>
              <div className="right-menu">
                <div className="desktop-menus flex items-center gap-3">
                  {headerMenus}
                  {user ? (
                    <div className="flex items-center gap-2">
                      <p className="font-medium">
                        Hello,{" "}
                        {user.displayName.split(" ").slice(0, 2).join(" ")}
                      </p>
                      <button
                        onClick={handleLogout}
                        className="border-2 font-medium cursor-pointer border-gray-800 px-6 py-1.5 shrink-0  rounded-4xl hover:bg-gray-900 hover:text-white text-[15px]"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <Link
                      to="/auth/login"
                      className="border-2 font-medium border-gray-800 px-6 py-1.5 shrink-0  rounded-4xl hover:bg-gray-900 hover:text-white text-[15px]"
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
