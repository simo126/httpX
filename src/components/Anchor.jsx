import React from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Anchor = () => {
  // const [Started] = useTypewriter({
  //   words: ["Started 🚀", "Started 🚀"],
  //   loop: {},
  // });

  return (
    <div className="flex justify-center items-center my-8">
      <Link
        to="/httpx/app"
        className="text-white bg-httpx hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-lg px-8 py-4 focus:outline-none transition duration-300 ease-in-out font-montserrat"
      >
        Let's Get Started 🚀
      </Link>
    </div>
  );
};

export default Anchor;
