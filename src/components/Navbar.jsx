import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const headerMenus = (
    <>
      <NavLink to="/" className="font-medium">
        Home
      </NavLink>
      <NavLink to="/news" className="font-medium">
        News
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
                  <Link
                    to="/auth/login"
                    className="border-2 font-medium border-gray-800 px-6 py-1.5 shrink-0  rounded-4xl hover:bg-gray-900 hover:text-white text-[15px]"
                  >
                    Login
                  </Link>
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
