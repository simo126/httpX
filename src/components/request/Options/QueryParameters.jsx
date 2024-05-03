import React, { useState } from "react";
import Button from "../../Button";

const QueryParameters = ({ setQueryParams, queryParams }) => {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const handleRemove = (e) => {
    const newQueryParameters = queryParams.filter(
      (queryParameter) => queryParameter.id !== e
    );
    setQueryParams(newQueryParameters);
  };

  const handleClick = () => {
    const newQueryParam = {
      key: key,
      value: value,
      id: `${key}-${value}${queryParams + 1}`,
    };
    setQueryParams([...queryParams, newQueryParam]);
    setKey("");
    setValue("");
  };

  return (
    <div>
      <div className="flex justify-center items-start mt-4 h-8 gap-2">
        <input
          type="text"
          placeholder="Key"
          value={key}
          className="h-8 w-[30%] font-montserrat py-2 px-2 outline-none border-2 border-gray-300  focus:border-blue-500"
          onChange={(e) => setKey(e.target.value)}
        />
        <input
          type="text"
          placeholder="Value"
          value={value}
          className="h-8 w-[30%] font-montserrat py-2 px-2 outline-none border-2 border-gray-300  focus:border-blue-500"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          className="text-white font-montserrat bg-httpx hover:bg-blue-800  px-5 py-2 h-8  w-32 flex justify-center items-center"
          onClick={handleClick}
        >
          Add
        </Button>
      </div>
      <div className="flex justify-center items-start flex-col mt-4 h-24 overflow-y-scroll ">
        {queryParams.map((queryParameter) => (
          <div
            className="font-montserrat text-sm flex justify-center items-start w-full  gap-2 mt-1"
            key={queryParameter.id}
          >
            <div className="h-8 w-[30%] font-montserrat py-2 px-2 outline-none border-2 border-gray-300  focus:border-blue-500 ">
              {queryParameter.key}
            </div>
            <div className="h-8 w-[30%] font-montserrat py-2 px-2 outline-none border-2 border-gray-300  focus:border-blue-500 ">
              {queryParameter.value}
            </div>
            <Button
              onClick={() => handleRemove(queryParameter.id)}
              className="text-httpx font-montserrat bg-white border-2 border-httpx hover:bg-httpx
               hover:text-white px-5 py-2 h-8  w-32 flex justify-center items-center"
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QueryParameters;
