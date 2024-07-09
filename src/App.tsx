import { HashRouter } from "react-router-dom";
import "./App.css";
import "./Styles/style.sass";
import Services from "./Components/Services";
import Work from "./Components/Work";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

function App() {
  return (
    <HashRouter>
      <Home />
      <Services />
      <Work />
      <About />
      <Contact />
      <Footer />
    </HashRouter>
  );
}

export default App;

// Video by Matilda Wormwood: https://www.pexels.com/video/coffee-laptop-typing-drink-4146415/  
