import React from "react";

const Footer = () => {
  return (
    <footer className=" w-full bg-gray-800  shadow  ">
      <div className="w-full mx-auto  p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="/" className="hover:underline">
            httpX™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
