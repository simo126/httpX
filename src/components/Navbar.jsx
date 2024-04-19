import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="p-4 border-httpx border-b-4">
      <Link to="/" className="flex justify-start items-center">
        <img src={Logo} alt="Logo" width={50} height={50} />
        <p className="px-2 text-httpx font-montserrat text-2xl">HttpX</p>
      </Link>
    </header>
  );
};
export default Navbar;
