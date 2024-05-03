import Navbar from "./components/Navbar";
import Hero from "./components/homepage/Hero";
import OurProduct from "./components/homepage/OurProduct";
import Anchor from "./components/Anchor";
import Footer from "./components/Footer";
export default function App() {
  return (
    <main>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section>
        <OurProduct />
        <Anchor />
      </section>
      <section className="mt-32">
        <Footer />
      </section>
    </main>
  );
}
