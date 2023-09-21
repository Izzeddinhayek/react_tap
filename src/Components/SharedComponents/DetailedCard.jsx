import React from "react";
import JavaScript from "../../assets/javascript.jpg";
import Title from "./Title";
const DetailedCard = () => {
  return (
    <div className="w-[calc(100%-65%)] relative">
      <div className="w-full h-[410px] absolute shadow-md bg-white border-2 border-white">
        <img
          src={JavaScript}
          alt="JavaScript"
          className="w-full object-cover h-1/2 block"
        />
        <div className="p-[15px] h-1/2">
          <p className="mb-[10px] flex gap-1">
            <Title theme /> by{" "}
            <a className="underline text-brandPrimaryLight" href="/">
              {" "}
              Sara Smith
            </a>
          </p>
          <div className="border border-x-lineColorLight px-[15px] pt-[20px] pb-[15px]">
            <p>Interest about this topic?</p>
            <button className="flex justify-center items-center w-full h-[50px] text-white bg-brandSecondaryLight gap-[5px] my-[10px] mx-0 text-xl">
              Add To Favourites
              <ion-icon name="heart-outline"></ion-icon>
            </button>
            <span className="text-center block text-[13px] opacity-[0.4]">
              Unlimited Credits
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
