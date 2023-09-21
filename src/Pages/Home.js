import React from "react";
import Header from "../Layout/Header";
import HeroSection from "../Components/HeroSection";
import MainContainer from "../Components/MainContainer";

function Home() {
  return (
    <div className="w-screen h-screen bg-bgBodyLight dark:bg-bgBodyDark">
      <Header />
      <HeroSection />
      <MainContainer />
    </div>
  );
}

export default Home;
