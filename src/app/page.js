import About from "./_components/About";
import Contact from "./_components/Contact";
import Sidebars from "./_components/Sidebars";
import Welcome from "./_components/Welcome";
import Work from "./_components/Work";

export default function Home() {
  return (
    <main className="md:mx-[10%] mx-4">
      <Welcome />
      <About />
      <Work />
      <Contact />
      <Sidebars />
    </main>
  );
}
