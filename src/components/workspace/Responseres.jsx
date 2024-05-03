import React from "react";
import Status from "../response/Status";
import Response from "../response/Response";
const Responseres = ({ response, loading }) => {
  return (
    <>
      <Status Status={Status} />
      <Response response={response} loading={loading} />
    </>
  );
};

export default Responseres;
