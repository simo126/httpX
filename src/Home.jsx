import Navbar from "./components/Navbar";
import Hero from "./components/homepage/Hero";
import OurProduct from "./components/homepage/OurProduct";
import Anchor from "./components/Anchor";

export default function App() {
  return (
    <>
      <main className="dark:bg-[#181a1b] h-screen">
        <Navbar />
        <section>
          <Hero />
        </section>
        <section>
          <OurProduct />
          <Anchor />
        </section>
      </main>
    </>
  );
}
