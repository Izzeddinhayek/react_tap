import React from "react";

const Button = ({ buttonTheme, children, onClick }) => {
  const themeClasses = {
    default:
      "bg-transparent border border-solid border-lineColorLight rounded-[5px] flex gap-[3.5px] py-[5px] px-[10px] font-normal text-bodyTextLight items-center justify-center",
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-yellow-500 hover:bg-yellow-700 text-white",
  };

  const buttonClasses = themeClasses[buttonTheme] || themeClasses.default;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
