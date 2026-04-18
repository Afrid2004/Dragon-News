import React, { Suspense, use, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { Menu, X } from "lucide-react";
import { CategoryLoad } from "./Loading";
import LeftAside from "./HomeLayout/LeftAside";
import Social from "./Social";

const Navbar = () => {
  const [isModal, setIsModal] = useState(false);
  const { user, logOutUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOutUser().then(() => {
      navigate("/auth/login", { replace: true });
    });
  };
  const handleModal = () => {
    setIsModal(!isModal);
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
  const modal = (
    <div
      onClick={handleModal}
      className={`w-full bg-black/30 fixed top-0 z-100 h-screen ${isModal ? "opacity-100 duration-150  pointer-events-auto" : "pointer-events-none opacity-0 duration-150"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-sm bg-white border-l border-gray-300/70 h-full right-0 absolute p-4 ${isModal ? " translate-x-0 duration-500" : " translate-x-full duration-500"}`}
      >
        <div className="mobile-topper flex items-center justify-between pb-4">
          <div className="w-37.5">
            <img src="/images/logo.webp" alt="Dragon News" className="w-full" />
          </div>
          <div
            onClick={handleModal}
            className="border border-gray-300 p-1 rounded-sm cursor-pointer"
          >
            <X />
          </div>
        </div>

        <div className="mobile-body">
          <div className="tabs tabs-border">
            <input
              type="radio"
              name="my_tabs_2"
              className="tab w-[50%]"
              aria-label="Menus"
              defaultChecked
            />
            <div className="tab-content bg-base-100">
              <div className="flex flex-col gap-3 max-h-125 overflow-auto">
                <div
                  onClick={handleModal}
                  className="flex flex-col gap-3 active-category mobile-menus"
                >
                  {headerMenus}
                </div>
                {user ? (
                  <div onClick={handleModal} className="flex flex-col gap-3">
                    <Social />
                    <p className="font-medium bg-gray-100/90 p-2 border border-gray-200 hover:bg-gray-300/50 rounded-sm">
                      Hello, {user.displayName.split(" ").slice(0, 2).join(" ")}
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

            <input
              type="radio"
              name="my_tabs_2"
              className="tab w-[50%] mb-3 rounded-none"
              aria-label="Categories"
            />
            <div onClick={handleModal} className="tab-content bg-base-100">
              <Suspense fallback={<CategoryLoad></CategoryLoad>}>
                <LeftAside />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
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
                <div className="right-menu hidden lg:block">
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

                <div className="mobile-menu lg:hidden">
                  <div
                    onClick={handleModal}
                    className="border border-gray-300 p-1 rounded-sm cursor-pointer"
                  >
                    <Menu />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {modal}
    </>
  );
};

export default Navbar;
