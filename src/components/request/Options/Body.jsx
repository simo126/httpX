import React from "react";
// import CodeMirror from "@uiw/react-codemirror";
// import { json } from "@codemirror/lang-json";

const Body = ({ setRequestBody, requestBody }) => {
  return (
    <div>
      <div>
        <div className="p-2 h-32 gap-2">
          <textarea
            cols={30}
            rows={10}
            className="w-full h-full border-2"
            placeholder={"Enter request body"}
            value={requestBody}
            onChange={(e) => setRequestBody(e.target.value)}
          ></textarea>
          {/* <CodeMirror
            className="overflow-hidden h-full outline-none focus:outline-none focus:border-none"
            value={requestBody}
            onChange={(e) => handleChange(e)}
            extensions={[json()]}
            height="180px"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Body;
