import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './styles/_index.scss';


const Home = () => (
  <p>Home</p>
);

const About = () => (
  <p>About</p>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
