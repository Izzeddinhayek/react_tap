import React from "react";

import Rating from "./Rating";
import Title from "./Title";
import Topic from "./Topic";

const Card = ({ img, category, topic, rating, name }) => {
  const imagePath = require(`../../assets/${img}`);
  return (
    <div className="bg-bgDefaultLight dark:bg-bgDefaultDark flex flex-col rounded-lg shadow-md max-w-full">
      <img
        src={imagePath}
        alt={topic}
        className="w-full h-[130px] object-cover rounded-lg "
      />
      <div className="p-[15px]">
        <Topic theme="default" category={category} />
        <Title theme="default" topic={topic}></Title>
        <div className="pt-[30px]">
          <Rating rating={rating} />
          <p className="m-0 mt-[10px] text-[12px] text-[#888]">
            {`Author: ${name}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
