import React from "react";
import Status from "../response/Status";
import Response from "../response/Response";
const Responseres = ({ response, loading, status }) => {
  return (
    <>
      <Status status={status} />
      <Response response={response} loading={loading} />
    </>
  );
};

export default Responseres;
