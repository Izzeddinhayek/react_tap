import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import HeroSection from "../Components/HeroSection";
import DetailsContent from "../Components/SharedComponents/DetailsContent";
import SubTopics from "../Components/SharedComponents/SubTopics";

const Details = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <DetailsContent />
      <SubTopics />
      <Footer />
    </>
  );
};

export default Details;
