import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurProduct from "./components/OurProduct";
import Button from "./components/Anchor";
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
        <Button />
      </section>
      <section className="mt-20">
        <Footer />
      </section>
    </main>
  );
}
