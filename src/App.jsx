import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Url from "./components/request/Url";
import Request from "./components/request/Request";
import Response from "./components/response/Res";
export default function App() {
  return (
    <main>
      <Navbar />
      <section>
        <Url />
        <Request />
      </section>
      <section>
        <Response />
      </section>
      <section className="mt-20">
        <Footer />
      </section>
    </main>
  );
}
