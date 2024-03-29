import React from "react";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import Bookings from "./components/Bookings";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Fertilizers from "./components/Fertilizers";

const App = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <Hero />
      <Activities />
      {/* <Bookings /> */}
      <Fertilizers/>
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
