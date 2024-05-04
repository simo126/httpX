import React from "react";

const Status = ({ status }) => {
  return (
    <div>
      <div className="border-2 h-20 mx-56 mt-4">
        <h1 className="px-7 text-xl text-montserrat mt-2 font-montserrat">
          Response:
        </h1>
        <p className="mt-2 px-7 font-montserrat">
          Status: {status.status || "0"}
          {status.status < 300 ? " OK" : ""} Time: {status.time || "0"} ms Size:{" "}
          {status.size || "0"}
        </p>
      </div>
    </div>
  );
};

export default Status;
