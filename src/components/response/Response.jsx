import React from "react";
import { useState } from "react";
import ResponseBody from "./Options/ResponseBody";
import ResponseHeader from "./Options/ResponseHeader";

const Response = ({ response }) => {
  const [clicked, setClicked] = useState("Response Body");

  return (
    <div className="border-2 h-72 mx-56 mt-4 ">
      <ul className="flex justify-start items-center h-12  border-b-2">
        <li className={clicked === "Response Body" ? "choosen" : "notchoosen"}>
          <button
            onClick={() => {
              setClicked("Response Body");
            }}
          >
            Response Body
          </button>
        </li>
        <li className={clicked === "Headers" ? "choosen" : "notchoosen"}>
          <button
            onClick={() => {
              setClicked("Headers");
            }}
          >
            Response Headers
          </button>
        </li>
      </ul>
      <div className="overflow-y-hidden">
        {clicked === "Response Body" ? (
          <ResponseBody response={response} />
        ) : null}
        {clicked === "Response Header" ? (
          <ResponseHeader response={response} />
        ) : null}
      </div>
    </div>
  );
};

export default Response;
