import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShinyEffect from "./components/ShinyEffect/ShinyEffect";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Countdown from "./components/countdown";
import Registration from "./components/Registration/Registration";
// import Awareness from "./components/AwarenessSession/Awareness";
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
                {/* <Countdown /> */}
                {/* <section id="register">
                  <Registration />
                </section> */}
                {/* <Awareness /> */}
                <section id="about" className="pt-10">
                  {" "}
                  {/* Add padding-top */}
                  <About />
                </section>
                <Gallery />
                <section
                  className="flex justify-center m-auto pt-10"
                  id="timeline"
                >
                  {" "}
                  {/* Add padding-top */}
                  <Timeline />
                </section>
                <section id="prizes" className="pt-10">
                  <WinningPrizes />
                </section>
                <Sponsors />
                <section id="contact" className="pt-10">
                  {" "}
                  {/* Add padding-top */}
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
