import React from "react";
import LeftTriangle from "./SharedComponents/LeftTriangle";
import RightTriangle from "./SharedComponents/RightTriangle";
const HeroSection = () => {
  return (
    <div className="bg-bgDefaultLight dark:bg-bgDefaultDark flex justify-center relative">
      <LeftTriangle />
      <RightTriangle />
      <div className="pt-[55px] pr-0 pb-3 pl-[15px]">
        <div className="leading-3 text-bodyTextLight dark:text-bodyTextDark">
          <h1 className="text-2xl text-brandSecondaryLight font-bold dark:text-brandSecondaryDark">
            Welcome to our website!
          </h1>
          <p>We have a new design that's fresh, modern, and easy to use.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
