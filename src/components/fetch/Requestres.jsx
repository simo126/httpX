import React from "react";
import { useState } from "react";
import Url from "../request/Url";
import Request from "../request/Request";

function bytesCalculator(bytes) {
  if (bytes > 1024 * 1024) {
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  } else if (bytes > 1024) {
    return (bytes / 1024).toFixed(2) + " KB";
  } else {
    return bytes + " B";
  }
}
const Requestres = ({ setLoading, setResponse, setStatus }) => {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [queryParams, setQueryParams] = useState([]);
  const [requestHeaders, setRequestHeaders] = useState([]);
  const [requestBody, setRequestBody] = useState("");
  const cors = "";
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  requestHeaders.forEach((header) => headers.append(header.key, header.value));
  const qp =
    queryParams.length > 0
      ? "?" +
        queryParams.map((param) => `${param.key}=${param.value}`).join("&")
      : "";
  const handleSend = () => {
    console.log("url", url);
    console.log("method", method);
    console.log("queryParams", queryParams);
    console.log("requestHeaders", requestHeaders);
    console.log("requestBody", requestBody);

    const startTime = performance.now();
    setStatus({ status: 666, time: null, size: null });
    let statusCode = null;
    setLoading(true);
    // fetch(cors + url + qp,
    fetch(url, {
      method: method,
      headers: headers,
      body: method !== "GET" ? requestBody : undefined,
      mode: "cors",
    })
      .then((res) => {
        statusCode = res.status;
        setStatus({ status: res.status, time: null, size: null });

        if (res.ok) {
          return res.json();
        } else {
          //alert("To fix this issue, you can use CORS proxy services. https://cors-anywhere.herokuapp.com/corsdemo");
          setLoading(false);
          setResponse();
          throw new Error("Response status: " + res.status);
        }
      })
      .then((data) => {
        const endTime = performance.now();
        const size = bytesCalculator(JSON.stringify(data).length);
        setStatus({
          status: statusCode,
          time: Math.round(endTime - startTime),
          size: size,
        });
        setResponse(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
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
