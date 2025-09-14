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
        to="/app"
        className="text-white bg-httpx hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded 
        lg:text-lg lg:px-8 lg:py-4 md:text-md md:px-4 md:py-4 py-4 px-4 text-sm focus:outline-none transition duration-300 ease-in-out font-montserrat "
      >
        Let&apos;s Get Started 🚀
      </Link>
    </div>
  );
};

export default Anchor;
