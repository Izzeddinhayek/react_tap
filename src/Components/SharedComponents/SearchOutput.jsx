import React from "react";

const SearchOutput = ({ children }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-bodyTextLight dark:text-bodyTextDark py-4">{`${children} Web Topics Found`}</h2>
    </div>
  );
};

export default SearchOutput;
