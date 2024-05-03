import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 flex items-center justify-center mt-20">
      <div className="w-full mx-auto p-4 text-center">
        <span className="text-sm text-gray-500">
          © 2024{" "}
          <Link
            to="/"
            className="text-gray-300 hover:text-white 
hover:underline"
          >
            HttpX™
          </Link>{" "}
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
