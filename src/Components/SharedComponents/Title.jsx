import React from "react";

const Title = ({ theme, topic }) => {
  const themeClasses = {
    default:
      "m-0 font-bold text-bodyTextLight dark:text-bodyTextDark whitespace-nowrap overflow-hidden overflow-ellipsis",
    secondary: "text-white m-0 text-2xl",
  };
  const titleClasses = themeClasses[theme] || themeClasses.default;
  return <h5 className={titleClasses}>{topic}</h5>;
};

export default Title;
