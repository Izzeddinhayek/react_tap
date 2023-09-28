import React from "react";

const DropDown = ({ options, value, label, onChange }) => {
  return (
    <div className="text-xs flex flex-col gap-0.5 py-1 px-3 border-r border-l border-solid border-lineColorLight dark:border-lineColorDark">
      <label>{label}</label>
      <select
        className="bg-transparent text-inherit border-none text-base pr-[100px] ml-[-5px]"
        onChange={onChange}
      >
        {options?.map(({ title, value }) => (
          <option value={value ?? title} key={title}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
