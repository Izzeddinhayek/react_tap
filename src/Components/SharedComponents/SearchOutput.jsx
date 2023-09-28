import React from "react";

const SearchOutput = ({ value }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-bodyTextLight dark:text-bodyTextDark py-4">{`${value} Web Topics Found`}</h2>
    </div>
  );
};

export default SearchOutput;
