import React from "react";
import { useTheme } from "../context/themeContext";
import checkIcon from "./../assets/images/icon-check.svg"

const CustomCheckbox = ({ checked, onChange, label, id }) => {
  const { isLight } = useTheme()
  return (
    <div className="relative overflow-hidden flex items-center center space-x-2 cursor-pointer smsans_regular text-[16px] tracking-[-0.6px]" onClick={e => onChange(!checked)}>
      <input id={id} type="checkbox" className={`hidden`} />
      <div className={`${checked ? 'bg-[rgb(211,160,250)]' : 'bg-transparent'} ${isLight ? "border-[rgb(18,19,26)]" : "border-[rgb(228,228,239)]"} h-5 w-5 ${checked ?'' :'border'} rounded flex items-center justify-center`}>
        {checked && <img src={checkIcon} />}

      </div>
      <p className={isLight ? "text-[rgb(18,19,26)]" : "text-[rgb(228,228,239)]"}>{label}</p>
    </div>
  );
};

export default CustomCheckbox;
