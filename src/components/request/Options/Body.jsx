import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import "codemirror/lib/codemirror.css";

import { abyss } from "@uiw/codemirror-theme-abyss";
const Body = ({ setRequestBody, requestBody }) => {
  return (
    <div>
      <div className="p-2 h-36 gap-2 dark:hidden">
        <CodeMirror
          className="overflow-hidden h-full outline-none focus:outline-none focus:border-none "
          value={requestBody}
          placeholder={"Enter request body"}
          onChange={(value) => {
            setRequestBody(value);
          }}
          extensions={[json()]}
          height="128px"
          width="100%"
        />
      </div>
      <div className="p-2 h-36 gap-2 hidden dark:block">
        <CodeMirror
          className="overflow-hidden h-full outline-none focus:outline-none focus:border-none "
          value={requestBody}
          placeholder={"Enter request body"}
          onChange={(value) => {
            setRequestBody(value);
          }}
          theme={abyss}
          extensions={[json()]}
          height="128px"
          width="100%"
        />
      </div>
    </div>
  );
};

export default Body;
