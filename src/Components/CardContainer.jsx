import React from "react";

const CardContainer = ({ children }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
      {children}
    </div>
  );
};

export default CardContainer;
