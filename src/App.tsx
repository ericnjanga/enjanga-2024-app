import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Home = () => <p>Home</p>;

const About = () => <p>About</p>;

function App() {
  return (
    <div className="App">
      <Header />
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
