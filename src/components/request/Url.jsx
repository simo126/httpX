import React from "react";
import Button from "../Button";
const Url = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className=" mx-56 w-[70%] mt-10">
      <select
        name="idk"
        text="Choose Request"
        className=" h-12 px-4 text-httpx  border-2 border-httpx
          font-medium font-montserrat "
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">DELETE</option>
        <option value="DELETE">PATCH</option>
        <option value="DELETE">PUT</option>
      </select>
      <input
        type="text"
        placeholder="Enter URL or paste text"
        className="h-12 w-[80%] font-montserrat py-2 px-2 outline-none border-2 border-gray-300  focus:border-blue-500 "
      />
      <Button
        onClick={handleClick}
        className={
          "text-white font-montserrat bg-httpx hover:bg-blue-800 font-medium  text-sm px-5 py-2 h-12 "
        }
      >
        SEND
      </Button>
    </div>
  );
};

export default Url;
