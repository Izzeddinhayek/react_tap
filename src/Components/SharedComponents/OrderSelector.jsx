import React from "react";

const OrderSelector = ({ children }) => {
  return (
    <div className="text-xs flex flex-col gap-0.5 py-1 px-3">
      {children}
      <select
        id=""
        className="bg-transparent text-inherit border-none text-base pr-[100px] ml-[-5px]"
      >
        <option value="Def">Default</option>
      </select>
    </div>
  );
};

export default OrderSelector;
