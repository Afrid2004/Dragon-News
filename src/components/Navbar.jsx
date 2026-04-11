import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const headerMenus = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
    </>
  );
  return (
    <div className="bg-white shadow-xs py-3">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="left-logo w-[150px]">
            <Link>
              <img
                src="/images/logo.png"
                alt="Dragon News"
                className="w-full"
              />
            </Link>
          </div>
          <div className="right-menu">
            <div className="desktop-menus flex items-center gap-3">
              {headerMenus}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
