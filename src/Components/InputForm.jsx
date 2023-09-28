import React from "react";
import SearchInput from "./SharedComponents/SearchInput";
import DropDown from "./SharedComponents/DropDown";
const InputForm = ({
  onSearchChange,
  placeholder,
  label1,
  value1,
  options1,
  onChange1,
  label2,
  value2,
  options2,
  onChange2,
}) => {
  return (
    <div className="bg-bgDefaultLight dark:bg-bgDefaultDark shadow rounded-lg">
      <form className="flex items-center">
        <SearchInput placeholder={placeholder} onChange={onSearchChange} />
        <div className="flex h-full">
          <DropDown
            label={label1}
            value={value1}
            options={options1}
            onChange={onChange1}
          />
          <DropDown
            label={label2}
            value={value2}
            options={options2}
            onChange={onChange2}
          />
        </div>
      </form>
    </div>
  );
};

export default InputForm;
