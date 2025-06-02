import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router /*, Route, Routes*/ } from "react-router-dom";
import "./styles/App.scss";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import CarrouselExpertise from "./components/Expertise/Expertise";
import CarrouselPortfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Modal from "./components/ModalModule";
import { ModalProvider } from "./components/ModalModule";
import Navigation from "./components/Navigation/Navigation";
import { LanguageProvider } from "./components/LanguageModule";
import { DataHelperProvider } from "./components/DataHelperModule";
import ParallaxFrame from "./components/ParallaxFrame/ParallaxFrame";

// Ensuring that Bootstrap's JavaScript is globally available across all components.
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// We'll use slick-carousel in two compoment, so we might as well import it globally
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DataHelperProvider>
        <LanguageProvider>
          <ModalProvider>
            <Router>
              <div className="App">
                <Modal />
                <Navigation />

                <div id="welcome">
                  <Hero />
                </div>

                <div id="scope-of-expertise">
                  <CarrouselExpertise />
                </div>

                <div id="best-work">
                  <CarrouselPortfolio />
                </div>

                <ParallaxFrame
                  img="/images/eric-njanga-3.jpg"
                  speed={20}
                  focus="top center"
                />

                <div id="about-me">
                  <About />
                </div>
                <Footer />

                {/* <Routes>
                <Route path="/" element={<Home />} /> 
                  <Route id="about" path="/about" element={<About />} /> 
              </Routes> */}
              </div>
            </Router>
          </ModalProvider>
        </LanguageProvider>
      </DataHelperProvider>
    </QueryClientProvider>
  );
}

export default App;
