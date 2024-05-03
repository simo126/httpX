import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Requestres from "./components/workspace/Requestres";
import Responseres from "./components/workspace/Responseres";
import { useState } from "react";

export default function App() {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <main>
      <Navbar />

      <Requestres setResponse={setResponse} setLoading={setLoading} />

      <Responseres response={response} loading={loading} />

      <Footer />
    </main>
  );
}
