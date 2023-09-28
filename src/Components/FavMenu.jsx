import React from "react";

const FavMenu = ({ children, className }) => {
  return (
    <div
      className={`${className} fixed bottom-0 right-0 z-20 max-h-0 w-full bg-bgDefaultLight dark:bg-bgDefaultDark overflow-y-auto shadow-md transition-max-height duration-300 ease-in-out`}
    >
      <h3 className="font-bold text-bodyTextLight dark:text-bodyTextDark mt-[15px] mb-0 pl-[50px] text-lg">
        My Favourite Topics
      </h3>
      <div
        className={`py-5 px-[50px] grid grid-cols-[repeat(auto-fill,minmax(115px,1fr))] gap-5`}
      >
        {children}
      </div>
    </div>
  );
};

export default FavMenu;
