import React, { useEffect } from "react";

export default function ResponseHeader({ responseHeaders }) {
  if (!Array.isArray(responseHeaders)) {
    const headersArray = Array.isArray(responseHeaders)
      ? responseHeaders
      : Object.entries(responseHeaders);

    if (headersArray && headersArray.length > 0) {
      return (
        <div className="dark:border-[#3c4143] p-2 ">
          <div className="p-2">
            {headersArray.map((header, index) => {
              return (
                <div key={index}>
                  <p className="  dark:text-white text-md my-4">
                    {header[0]}: {header[1]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <p>No response headers available.</p>;
    }
  } else {
    return <p>Invalid response headers format.</p>;
  }
}
