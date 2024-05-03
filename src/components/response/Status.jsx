import React from "react";

const Status = ({ Status }) => {
  return (
    <div>
      <div className="border-2 h-20 mx-56 mt-4">
        <h1 className="px-7 text-xl text-montserrat mt-2 font-montserrat">
          Response:
        </h1>
        <p className="mt-2 px-7 font-montserrat">
          Status: {Status.status || "0"} Time: {Status.time || "0"} Size:{" "}
          {Status.size || "0"}
        </p>
      </div>
    </div>
  );
};

export default Status;
