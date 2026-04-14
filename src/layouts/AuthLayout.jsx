import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const AuthLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <div>
          <div className="container flex items-center justify-center">
            <Outlet></Outlet>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default AuthLayout;
