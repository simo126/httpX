import React from "react";
import { useState } from "react";
import QueryParameters from "./Options/QueryParameters";
import Body from "./Options/Body";
import Headers from "./Options/Headers";

function Request({
  setQueryParams,
  setRequestHeaders,
  setRequestBody,
  requestBody,
  requestHeaders,
  queryParams,
}) {
  const [clicked, setClicked] = useState("QueryParametres");
  const options = ["QueryParametres", "Headers", "Body"];

  return (
    <>
      <div className="border-2 mx-56 mt-4 dark:border-[#3c4143] ">
        <ul className="flex justify-start items-center h-12  border-b-2 dark:border-[#3c4143]">
          {options.map((option) => {
            return (
              <li
                className={clicked === option ? "choosen" : "notchoosen"}
                key={option}
              >
                <button
                  onClick={() => {
                    setClicked(option);
                  }}
                >
                  {option}
                </button>
              </li>
            );
          }, [])}
        </ul>
        <div>
          {clicked === "QueryParametres" ? (
            <QueryParameters
              setQueryParams={setQueryParams}
              queryParams={queryParams}
            />
          ) : null}
          {clicked === "Headers" ? (
            <Headers
              setRequestHeaders={setRequestHeaders}
              requestHeaders={requestHeaders}
            />
          ) : null}
          {clicked === "Body" ? (
            <Body setRequestBody={setRequestBody} requestBody={requestBody} />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Request;
