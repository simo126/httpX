import React from "react";
import { useState } from "react";
import Url from "../request/Url";
import Request from "../request/Request";

const Requestres = ({ setLoading, setResponse }) => {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [queryParams, setQueryParams] = useState([]);
  const [requestHeaders, setRequestHeaders] = useState([]);
  const [requestBody, setRequestBody] = useState("");
  const handleSend = () => {
    setLoading(true);
    fetch(url, {
      method: method,
      // headers: requestHeaders.reduce((acc, curr) => {
      //   acc[curr.key] = curr.value;
      //   return acc;
      // }, {}),
      // body: requestBody,
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
        setLoading(false);
      });
  };
  return (
    <>
      <Url
        setUrl={setUrl}
        setMethod={setMethod}
        url={url}
        method={method}
        handleSend={handleSend}
      />
      <Request
        setQueryParams={setQueryParams}
        queryParams={queryParams}
        setRequestHeaders={setRequestHeaders}
        requestHeaders={requestHeaders}
        setRequestBody={setRequestBody}
        requestBody={requestBody}
      />
    </>
  );
};

export default Requestres;
