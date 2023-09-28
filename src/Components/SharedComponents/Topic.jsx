import React from "react";

const Topic = ({ theme, category }) => {
  const themeClasses = {
    default:
      "text-sm m-0 whitespace-nowrap overflow-hidden overflow-ellipsis text-bodyTextLight dark:text-bodyTextDark dark:border-bodyTextDark",
    secondary: "text-brandSecondaryLight font-normal m-0",
  };
  const topicClasses = themeClasses[theme] || themeClasses.default;
  return <p className={topicClasses}>{category}</p>;
};

export default Topic;
