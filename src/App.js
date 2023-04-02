import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ElezooHome from "./components/ElezooHome";
import EyelandHome from "./components/EyelandHome";
import './App.css';

function App(){
  return(
    <Router>
      <div className="App">
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ElezooHome" element={<ElezooHome />} />
          <Route path="/EyelandHome" element={<EyelandHome />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;