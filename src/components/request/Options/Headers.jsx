import React from "react";

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
