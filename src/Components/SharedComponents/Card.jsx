import React from "react";
import HTML from "../../assets/html.png";
import Rating from "./Rating";
import Title from "./Title";
import Topic from "./Topic";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Link to="details/:id">
      <div className="bg-bgDefaultLight dark:bg-bgDefaultDark flex flex-col rounded-lg shadow-md max-w-full">
        <img
          src={HTML}
          alt="HTML"
          className="w-full h-[130px] object-cover rounded-es-lg "
        />
        <div className="p-[15px]">
          <Topic theme="default" />
          <Title theme="default" />
          <div className="pt-[30px]">
            <Rating />
            <p className="m-0 mt-[10px] text-[12px] text-[#888]">
              Author: Sara Smith
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
