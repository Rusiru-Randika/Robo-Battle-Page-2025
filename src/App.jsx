import React from "react";
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
import RegisterForm from "./components/RegisterForm/RegisterForm";

const App = () => {
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
                  <Home />
                </section>
                <section id="about" className="pt-10">
                  <About />
                </section>
                <Gallery />
                <section
                  className="flex justify-center m-auto pt-10"
                  id="timeline"
                >
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
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
