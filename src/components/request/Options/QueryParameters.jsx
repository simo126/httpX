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
    console.log(newQueryParameters);
  };

  const handleClick = () => {
    if (!key || !value || queryParams.length > 10) return;
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
    <div className="flex justify-center flex-col over h-full my-4">
      <div className=" text-sm flex h-10 justify-center items-start w-full gap-2 my-2 px-2">
        <input
          type="text"
          placeholder="Key"
          value={key}
          className="h-10  w-[30%]  py-2 px-2 outline-none border-2 border-gray-300  focus:border-blue-500 dark:bg-[#121212] dark:text-white dark:border-[#3c4143] dark:focus:border-blue-500"
          onChange={(e) => setKey(e.target.value)}
        />
        <input
          type="text"
          placeholder="Value"
          value={value}
          className="h-10  w-[30%]  py-2 px-2 outline-none border-2 border-gray-300  focus:border-blue-500 dark:bg-[#121212] dark:text-white dark:border-[#3c4143] dark:focus:border-blue-500"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          className="h-10 text-white  bg-httpx hover:bg-blue-800  px-5 py-2   w-32 flex justify-center items-center"
          onClick={handleClick}
        >
          Add
        </Button>
      </div>
      {queryParams.map((queryParameter) => (
        <div
          className=" text-sm flex justify-center items-start w-full  gap-2 mt-1 px-2 "
          key={queryParameter.id}
        >
          <div className="h-8 w-[30%]  py-2 px-2 outline-none border-2 border-gray-300  focus:border-blue-500 flex justify-start items-center dark:bg-[#121212] dark:text-white dark:border-[#3c4143]">
            {queryParameter.key}
          </div>
          <div className="h-8 w-[30%]  py-2 px-2 outline-none border-2 border-gray-300  focus:border-blue-500 flex justify-start items-center dark:bg-[#121212] dark:text-white dark:border-[#3c4143]">
            {queryParameter.value}
          </div>
          <Button
            onClick={() => handleRemove(queryParameter.id)}
            className="text-httpx  bg-white border-2 border-httpx hover:bg-httpx
            hover:text-white px-5 py-2 h-8  w-32 flex justify-center items-center dark:bg-[#121212] dark:text-white dark:hover:bg-httpx "
          >
            Remove
          </Button>
        </div>
      ))}
    </div>
  );
};

export default QueryParameters;
