import React from "react";
import Button from "../../Button";
import QueryParameters from "./QueryParameters";

const Headers = ({ setRequestHeaders, requestHeaders }) => {
  return (
    <QueryParameters
      setQueryParams={setRequestHeaders}
      queryParams={requestHeaders}
    />
  );
};

export default Headers;
