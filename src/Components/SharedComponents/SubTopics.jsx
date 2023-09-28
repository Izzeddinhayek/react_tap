import React from "react";

const SubTopics = ({ sub, topicName }) => {
  return (
    <div className="py-[30px] px-0 dark:bg-[#282828]">
      <div className="w-[60%] mx-auto ">
        <div className="flex relative gap-[3rem]">
          <ul className="bg-bgDefaultLight dark:bg-bgDefaultDark rounded text-bodyTextLight dark:text-bodyTextDark shadow-md w-[65%] list-none ">
            <li className="border-b border-lineColorLight dark:border-lineColorDark py-[15px] px-[25px] first-of-type:flex first-of-type:items-center first-of-type:gap-[10px]">
              <h3 className="font-bold">{`${topicName} Sub Topics`}</h3>
            </li>
            {sub?.map((topic, index) => (
              <li
                className="border-b border-lineColorLight dark:border-lineColorDark py-[15px] px-[25px] gap-[10px] flex items-center"
                key={index}
              >
                <span className="text-[22px] text-brandSecondaryLight">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                </span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
          <div className="w-[calc(100%-65%)]"></div>
        </div>
      </div>
    </div>
  );
};

export default SubTopics;

<ul className="bg-bgDefaultLight dark:bg-bgDefaultDark rounded text-bodyTextLight dark:text-bodyTextDark shadow-md w-[65%] list-none ">
  <li className="border-b border-lineColorLight] py-[15px] px-[25px] first-of-type:flex first-of-type:items-center first-of-type:gap-[10px]">
    <h3 className="font-bold">HTML Sub Topics</h3>
  </li>
  <li className="border-b border-lineColorLight] py-[15px] px-[25px] gap-[10px] flex items-center">
    <span className="text-[22px] text-brandSecondaryLight">
      <ion-icon name="checkmark-circle-outline"></ion-icon>
    </span>
    <span>HTML Syntax and Structure</span>
  </li>
  <li className="border-b border-lineColorLight] py-[15px] px-[25px] gap-[10px] flex items-center">
    <span className="text-[22px] text-brandSecondaryLight">
      <ion-icon name="checkmark-circle-outline"></ion-icon>
    </span>
    <span>HTML Syntax and Structure</span>
  </li>
  <li className="border-b border-lineColorLight] py-[15px] px-[25px] gap-[10px] flex items-center">
    <span className="text-[22px] text-brandSecondaryLight">
      <ion-icon name="checkmark-circle-outline"></ion-icon>
    </span>
    <span>HTML Syntax and Structure</span>
  </li>
  <li className="border-b border-lineColorLight] py-[15px] px-[25px] gap-[10px] flex items-center">
    <span className="text-[22px] text-brandSecondaryLight">
      <ion-icon name="checkmark-circle-outline"></ion-icon>
    </span>
    <span>HTML Syntax and Structure</span>
  </li>
  <li className="border-b border-lineColorLight] py-[15px] px-[25px] gap-[10px] flex items-center">
    <span className="text-[22px] text-brandSecondaryLight">
      <ion-icon name="checkmark-circle-outline"></ion-icon>
    </span>
    <span>HTML Syntax and Structure</span>
  </li>
  <li className="border-b border-lineColorLight] py-[15px] px-[25px] gap-[10px] flex items-center">
    <span className="text-[22px] text-brandSecondaryLight">
      <ion-icon name="checkmark-circle-outline"></ion-icon>
    </span>
    <span>HTML Syntax and Structure</span>
  </li>
</ul>;
