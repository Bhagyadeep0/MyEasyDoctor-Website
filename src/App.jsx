// global css
import "./global.css";

// Import components
import Hero from "./components/Hero";
import Doctor from "./components/Doctors";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Support from "./components/Support";

const App = () => {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="doctors">
        <Support />
        <Doctor />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;
