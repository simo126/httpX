import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import "codemirror/lib/codemirror.css";
import jsBeautify from "js-beautify";
import { abyss } from "@uiw/codemirror-theme-abyss";

const ResponseBody = ({ response, loading }) => {
  const data = JSON.stringify(response);

  return (
    <div className="dark:bg-[#181a1b]">
      <div className="h-56 overflow-y-auto p-2 dark:hidden">
        {!loading ? (
          <CodeMirror
            extensions={[json()]}
            value={jsBeautify(data)}
            height="200px"
            options={{
              readOnly: true,
            }}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="h-56 overflow-y-auto p-2 hidden dark:block ">
        {!loading ? (
          <CodeMirror
            extensions={[json()]}
            value={jsBeautify(data)}
            height="200px"
            theme={abyss}
            options={{
              readOnly: true,
            }}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ResponseBody;
