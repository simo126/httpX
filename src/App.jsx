import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Requestres from "./components/fetch/Requestres";
import Responseres from "./components/fetch/Responseres";
import { useState } from "react";

export default function App() {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ status: 0, time: 0, size: 0 });
  return (
    <main>
      <Navbar />

      <Requestres
        setResponse={setResponse}
        setLoading={setLoading}
        setStatus={setStatus}
      />

      <Responseres response={response} loading={loading} status={status} />

      <Footer />
    </main>
  );
}
