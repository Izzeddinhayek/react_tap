import React from "react";
import Topic from "./Topic";
import Title from "./Title";
import Rating from "./Rating";
import TopicDescription from "./TopicDescription";
import DetailedCard from "./DetailedCard";
const DetailsContent = () => {
  return (
    <div className="bg-[#333] py-[30px] px-0">
      <div className="w-[60%] mx-auto">
        <div className="flex relative gap-[3rem] ">
          <div className="w-[65%]">
            <Topic theme="secondary" />
            <Title theme="secondary" />
            <Rating />
            <TopicDescription>
              HTML (Hypertext Markup Language) is the standard markup language
              for creating web pages and other information that can be displayed
              in a web browser. It provides a structure for content and defines
              how it should be displayed on a web page, including text, images,
              and multimedia. HTML is essential for creating static web pages
              and is a foundational technology for the World Wide Web
            </TopicDescription>
          </div>
          <DetailedCard />
        </div>
      </div>
    </div>
  );
};

export default DetailsContent;
