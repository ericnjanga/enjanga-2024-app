import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Caroussel from "./components/Caroussel/Caroussel";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";

const Home = () => <p>Home</p>;
 

function App() {
  return (
    <div className="App">
      <Hero />
      <Caroussel />
      <Portfolio />
      <About />
      <Footer />


      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
