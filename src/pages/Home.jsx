import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Service from "../components/Service";
import HowToApply from "../components/HowToApply";
import NeedToApply from "../components/NeedToApply";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <HowToApply />
      <NeedToApply />
      <Footer />
    </>
  );
};

export default Home;
