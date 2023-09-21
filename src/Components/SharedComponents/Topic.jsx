import React from "react";

const Topic = ({ theme, children }) => {
  const themeClasses = {
    default:
      "text-sm m-0 whitespace-nowrap overflow-hidden overflow-ellipsis text-bodyTextLight dark:border-bodyTextDark",
    secondary: "text-brandSecondaryLight font-normal m-0",
  };
  const topicClasses = themeClasses[theme] || themeClasses.default;
  return <p className={topicClasses}>Web Development Languages</p>;
};

export default Topic;
