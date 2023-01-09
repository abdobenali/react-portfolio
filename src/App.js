import "./App.css";
import About from "./component/about/About";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import Contact from "./component/contact/Contact";
import Projects from "./component/projects/Projects";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <>
      <div className="total-container">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
