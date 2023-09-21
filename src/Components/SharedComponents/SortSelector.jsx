import React from "react";

const SortSelector = ({ children }) => {
  return (
    <div className="text-xs flex flex-col gap-0.5 py-1 px-3 border-r border-l border-solid border-lineColorLight dark:border-lineColorDark">
      {children}
      <select
        id=""
        className="bg-transparent text-inherit border-none text-base pr-[100px] ml-[-5px]"
      >
        <option value="Def">Default</option>
        <option value="Title">Topic Title</option>
        <option value="Name">Author Name</option>
      </select>
    </div>
  );
};

export default SortSelector;
