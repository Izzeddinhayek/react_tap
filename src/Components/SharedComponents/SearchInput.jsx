import React from "react";

const SearchInput = () => {
  return (
    <div className="flex items-center py-0 px-2 w-[74.7%] gap-2">
      <ion-icon class="search-icon" name="search-outline"></ion-icon>
      <input
        className="border-none font-normal outline-none w-full bg-transparent "
        type="search"
        id="search-input"
        placeholder="Search the website..."
      />
    </div>
  );
};

export default SearchInput;
