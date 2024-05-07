import React from "react";
import { useState } from "react";
import ResponseBody from "./Options/ResponseBody";
import ResponseHeader from "./Options/ResponseHeader";

const Response = ({ response, loading, responseHeaders }) => {
  const [clicked, setClicked] = useState("Response Body");

  return (
    <div className="dark:bg-[#181a1b] h-[19.5rem]">
      <div className="border-2 h-72 mx-56 my-4 dark:border-[#3c4143]">
        <ul className="flex justify-start items-center h-12  border-b-2  dark:border-[#3c4143] ">
          <li
            className={clicked === "Response Body" ? "choosen" : "notchoosen"}
          >
            <button
              onClick={() => {
                setClicked("Response Body");
              }}
              className="dark:text-white"
            >
              Response Body
            </button>
          </li>
          <li
            className={clicked === "Response Header" ? "choosen" : "notchoosen"}
          >
            <button
              onClick={() => {
                setClicked("Response Header");
              }}
              className="dark:text-white"
            >
              Response Headers
            </button>
          </li>
        </ul>
        <div>
          {clicked === "Response Body" ? (
            <ResponseBody response={response} loading={loading} />
          ) : null}
          {clicked === "Response Header" ? (
            <ResponseHeader
              response={response}
              responseHeaders={responseHeaders}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Response;
