import React from "react";
import SearchInput from "./SharedComponents/SearchInput";
import SortSelector from "./SharedComponents/SortSelector";
import OrderSelector from "./SharedComponents/OrderSelector";
const InputForm = () => {
  return (
    <div className="bg-bgDefaultLight dark:bg-bgDefaultDark shadow rounded-lg">
      <form className="flex items-center">
        <SearchInput />
        <div className="flex h-full">
          <SortSelector>Sort by:</SortSelector>
          <OrderSelector>Order by:</OrderSelector>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
