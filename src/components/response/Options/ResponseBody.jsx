import React from "react";
// import CodeMirror from "@uiw/react-codemirror";
// import { json } from "@codemirror/lang-json";

const ResponseBody = ({ response, loading }) => {
  const data = JSON.stringify(response);
  return (
    <>
      <div className="h-56 overflow-y-auto p-2">
        {!loading ? <p>{data}</p> : <p>Loading...</p>}
        {/* <CodeMirror
          extensions={[json()]}
          value={data}
          height="230px"
          options={{
            readOnly: true,
          }}
        /> */}
      </div>
    </>
  );
};

export default ResponseBody;
