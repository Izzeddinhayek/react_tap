import React from "react";
import Title from "./Title";
import Rating from "./Rating";

const FavourtiesCard = ({ img, topic, rating }) => {
  let imagePath = "";
  if (img) {
    imagePath = require(`../../assets/${img}`);
  }
  return (
    <div className="rounded-lg shadow-md">
      <img
        className="h-1/2 w-full rounded-tl-4 rounded-tr-4"
        src={imagePath}
        alt={img}
      />
      <div className="flex flex-col py-0 px-[10px] -mt-px">
        <Title topic={topic} />
        <Rating rating={rating} />
      </div>
    </div>
  );
};

export default FavourtiesCard;
