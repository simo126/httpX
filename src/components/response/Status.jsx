import React from "react";

const Status = ({ status, response }) => {
  return (
    <div className="border-2 h-20 mx-56 mt-4 dark:border-[#3c4143] dark:bg-[#181a1b]">
      <h1 className="px-7 text-xl text-montserrat mt-2   dark:text-white">
        Response:
      </h1>
      {response !== undefined ? (
        <p className="mt-2 px-7   dark:text-white">
          Status: {status.status || "0"}
          {status.status < 300 ? " OK" : ""} Time: {status.time || "0"} ms Size:{" "}
          {status.size || "0"}
        </p>
      ) : (
        <p className="mt-2 px-7   dark:text-white">
          Click Send to get a response
        </p>
      )}
    </div>
  );
};

export default Status;
