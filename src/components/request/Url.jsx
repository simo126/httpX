import React from "react";
import Button from "../Button";

const Url = ({ setUrl, url, setMethod, method, handleSend }) => {
  return (
    <div className="flex mx-56 mt-10 ">
      <select
        name="idk"
        className="h-12 px-4 text-httpx border-2 border-httpx font-medium font-montserrat"
        onChange={(e) => setMethod(e.target.value)}
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">DELETE</option>
        <option value="PATCH">PATCH</option>
        <option value="PUT">PUT</option>
      </select>

      <input
        type="text"
        placeholder="Enter URL or paste text"
        className="h-12 w-full font-montserrat py-2 px-2 outline-none border-2 border-gray-300  focus:border-blue-500 "
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button
        onClick={handleSend}
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
