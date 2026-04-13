import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-white border-t border-gray-300/70">
      <div className="container py-5">
        <div>
          <p className="uppercase text-center">
            &copy; {year} All Rights Reserved | Design & Developed by{" "}
            <a
              className="text-primary hover:underline"
              href="https://faisalafrid.vercel.app"
              target="_blank"
            >
              Afrid
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
