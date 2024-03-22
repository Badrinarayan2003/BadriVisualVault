import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;