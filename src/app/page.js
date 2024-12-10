import About from "@/components/About";
import Contact from "@/components/Contact";
import Sidebars from "@/components/Sidebars";
import Welcome from "@/components/Welcome";
import Work from "@/components/Work";

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
