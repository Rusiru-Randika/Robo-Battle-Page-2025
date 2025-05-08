import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/AboutUs/About";
import Timeline from "./components/Timeline/Timeline";
import WinningPrizes from "./components/WinningPrizes/WinningPrizes";
import Sponsors from "./components/Sponsorship/Sponsors";
import Team from "./components/ContactUs/Contact";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen"; // Import LoadingScreen

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleHomeLoad = () => {
    setIsLoading(false); // Hide the loading screen once the Home section is loaded
  };

  if (isLoading) {
    return <LoadingScreen />; // Render the loading screen until the Home section is loaded
  }

  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <section id="home" className="pt-5">
                  <Home onLoad={handleHomeLoad} /> {/* Pass onLoad handler */}
                </section>
                <section id="about" className="pt-10">
                  <About />
                </section>
                <Gallery />
                <section className="" id="timeline">
                  <Timeline />
                </section>
                <section id="prizes" className="pt-10">
                  <WinningPrizes />
                </section>
                <Sponsors />
                <section id="contact" className="pt-10">
                  <Team />
                </section>
                <Footer />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
