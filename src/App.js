import AboutUs from "./components/about-us";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Services from "./components/services";
import AOS from "aos";
import "./assets/css/aos.css";
import { useEffect } from "react";

function App() {

    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="app-wrapper">
      <Header />
      <Hero />
      <AboutUs />
      <Experience />
      <Services />
      <Projects />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
