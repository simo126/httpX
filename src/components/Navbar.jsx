import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";
const Navbar = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <header className="p-4 border-httpx border-b-4 flex justify-between items-center dark:bg-[#181a1b]">
      <Link to="/" className="flex justify-start items-center">
        <img src={Logo} alt="Logo" width={50} height={50} />
        <p className="px-2 text-httpx font-montserrat text-2xl">HttpX</p>
      </Link>
      <Button
        className="font-montserrat mx-4 dark:text-white"
        onClick={darkModeHandler}
      >
        {dark ? "Dark Mode" : "Light Mode"}
      </Button>
    </header>
  );
};
export default Navbar;
