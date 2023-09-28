import React from "react";

const Button = ({ buttonTheme, children, onClickFav, onClickDarkMode }) => {
  const themeClasses = {
    default:
      "bg-transparent border border-solid border-lineColorLight rounded-[5px] flex gap-[3.5px] py-[5px] px-[10px] font-normal text-bodyTextLight dark:text-bodyTextDark items-center justify-center",
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-yellow-500 hover:bg-yellow-700 text-white",
  };

  const buttonClasses = themeClasses[buttonTheme] || themeClasses.default;

  const handleClick = () => {
    if (onClickFav) {
      onClickFav();
      console.log("Fav Clicked");
    }
    if (onClickDarkMode) {
      onClickDarkMode();
      console.log("Dark Clicked");
    }
  };

  return (
    <button className={buttonClasses} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
