import React from "react";
import Topic from "./Topic";
import Title from "./Title";
import Rating from "./Rating";
import TopicDescription from "./TopicDescription";
import DetailedCard from "./DetailedCard";
const DetailsContent = ({
  category,
  topic,
  rating,
  description,
  img,
  name,
  detailedTopic,
  onClick,
}) => {
  return (
    <div className="bg-[#333] py-[30px] px-0">
      <div className="w-[60%] mx-auto">
        <div className="flex relative gap-[3rem] ">
          <div className="w-[65%]">
            <Topic theme="secondary" category={category} />
            <Title theme="secondary" topic={topic} />
            <Rating rating={rating} />
            <TopicDescription description={description} />
          </div>
          <DetailedCard
            img={img}
            name={name}
            topic={detailedTopic}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsContent;
