import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-[#0E1800] py-1">

      <Header/>

      <main className="md:mx-[10%] mx-4">

        <Welcome/>
        <About />
        <Work/>
        <Contact/>

      </main>

      <Footer/>

    </div>
  );
}

export default App;
