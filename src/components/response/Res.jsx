import React from "react";

const response = () => {
  return (
    <div>
      <div className="border-2 h-20 mx-56 mt-4">
        <h1 className="px-7 text-xl text-montserrat mt-2 font-montserrat">
          Response:
        </h1>
        <p className="mt-2 px-7 font-montserrat">
          Status: 200 Time: 0 Size: 0 B
        </p>
      </div>
      <div className="border-2 h-56 mx-56 mt-4 font-montserrat ">
        <ul className="flex justify-start items-center h-12  border-b-2">
          <li className="choosen ">Response Body</li>
          <li className="notchoosen ">Response Header</li>
        </ul>
      </div>
    </div>
  );
};

export default response;
