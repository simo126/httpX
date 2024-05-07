import React from "react";
import Status from "../response/Status";
import Response from "../response/Response";
const Responseres = ({ response, loading, status, responseHeaders }) => {
  return (
    <>
      <Status status={status} response={response} />
      <Response
        response={response}
        loading={loading}
        responseHeaders={responseHeaders}
      />
    </>
  );
};

export default Responseres;
