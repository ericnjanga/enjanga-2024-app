import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import CarrouselExpertise from "./components/Expertise/Expertise";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Modal from "./components/ModalModule";
import { ModalProvider } from "./components/ModalModule";
import Navigation from "./components/Navigation/Navigation";

// Ensuring that Bootstrap's JavaScript is globally available across all components.
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// We'll use slick-carousel in two compoment, so we might as well import it globally
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => <p>Home</p>;

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <Modal />

        <Navigation />

        <div id="welcome">
          <Hero />
        </div>

        <div id="scope-of-expertise">
          <CarrouselExpertise />
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
