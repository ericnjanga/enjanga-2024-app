import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Caroussel from "./components/Caroussel/Caroussel";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Modal from "./components/ModalModule";
import { ModalProvider } from "./components/ModalModule";

const Home = () => <p>Home</p>;

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <Modal />

        <div id="welcome">
          <Hero />
        </div>

        <div id="scope-of-expertise">
          <Caroussel />
        </div>

        <div id="some-work">
          <Portfolio />
        </div>

        <div id="about">
          <About />
        </div>

        <Footer />

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </ModalProvider>
  );
}

export default App;
