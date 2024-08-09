"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const NumberInput = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  const [value, setValue] = useState("");

  const handleIncrement = () => {
    setValue((prevValue) => {
      const numericValue = parseFloat(prevValue) || 0;
      return (numericValue + 1).toString();
    });
  };

  const handleDecrement = () => {
    setValue((prevValue) => {
      const numericValue = parseFloat(prevValue) || 0;
      return (numericValue - 1).toString();
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex w-fit flex-row text-base font-normal ">
      <div className="flex flex-col gap-2">
        <p>{label}</p>
        <div className="flex flex-row rounded-xl bg-[#EFF1F999] p-2">
          <input
            type="number"
            className="no-arrows rounded-l-lg bg-transparent px-2 py-1 text-lg font-normal outline-none"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            style={{
              MozAppearance: "textfield", // Firefox
            }}
          />
          <div className="flex flex-col gap-1">
            <button
              className="w-fit rounded-t-lg bg-[#DDE2E5] px-4 py-[2px]"
              onClick={handleIncrement}
            >
              <ChevronUp />
            </button>
            <button
              className="w-fit rounded-b-lg bg-[#DDE2E5] px-4 py-[2px]"
              onClick={handleDecrement}
            >
              <ChevronDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberInput;
