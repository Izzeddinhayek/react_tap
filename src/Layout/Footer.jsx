import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-bgBodyLight dark:bg-bgBodyDark w-full flex justify-center items-center font-medium text-bodyTextLight dark:text-bodyTextDark">
        {`Developed with `}
        <span className="text-heartColor flex justify-center items-center mx-1">
          <ion-icon name="heart"></ion-icon>
        </span>
        {` © 2023`}
      </div>
    </footer>
  );
};

export default Footer;
