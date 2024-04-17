import React from "react";
import { Link } from "react-router-dom";
const Anchor = () => {
  return (
    <div className="flex justify-center items-center">
      <Link
        to="/app"
        className="text-white bg-httpx hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 focus:outline-none transition duration-300 ease-in-out/"
      >
        Let's Get Started
      </Link>
    </div>
  );
};

export default Anchor;
