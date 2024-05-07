import Navbar from "./components/Navbar";

import Requestres from "./components/fetch/Requestres";
import Responseres from "./components/fetch/Responseres";
import { useState } from "react";

export default function App() {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ status: 0, time: 0, size: 0 });
  const [responseHeaders, setResponseHeaders] = useState([]);
  return (
    <main className="dark:bg-[#181a1b] h-screen">
      <Navbar />

      <Requestres
        setResponse={setResponse}
        setLoading={setLoading}
        setStatus={setStatus}
        setResponseHeaders={setResponseHeaders}
      />

      <Responseres
        response={response}
        loading={loading}
        status={status}
        responseHeaders={responseHeaders}
      />
    </main>
  );
}
