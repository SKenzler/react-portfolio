import React from "react";
import logo from "../assets/design-build-deploy-logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-center items-center">
          <div className="flex items-center flex-shrink-0">
            <img
              className="h-14 w-14 mr-2"
              src={logo}
              alt="Design Build and Deploy Logo"
            />
            <span className="text-lg text-white tracking-tight">
              Design Build Deploy
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
