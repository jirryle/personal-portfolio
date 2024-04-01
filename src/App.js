import React, { useEffect } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-ZDN4E1VVXK');
    // Log initial page view
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Jerry's Portfolio</title>
      </Helmet>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
