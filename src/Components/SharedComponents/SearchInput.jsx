import React from "react";

const SearchInput = ({ placeholder, value, onChange }) => {
  return (
    <div className="flex items-center py-0 px-2 w-[74.7%] gap-2">
      <ion-icon class="search-icon" name="search-outline"></ion-icon>
      <input
        className="border-none font-normal outline-none w-full bg-transparent "
        type="search"
        id="search-input"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default SearchInput;
