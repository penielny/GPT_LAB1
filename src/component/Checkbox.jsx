import React from "react";

const CustomCheckbox = ({ checked, onChange, label, id, isLight }) => {
  return (
    <div className="relative overflow-hidden flex items-center center space-x-2 cursor-pointer" onClick={e => onChange(!checked)}>
      <input id={id} type="checkbox" className={`hidden`} />
      <div className={`${checked ? 'bg-[rgb(211,160,250)]' : 'bg-transparent'} ${isLight ? "border-[rgb(18,19,26)]" : "border-[rgb(228,228,239)]"} h-4 w-4 border rounded flex items-center justify-center`}>
        {checked && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>}

      </div>
      <p className={isLight ? "text-[rgb(18,19,26)]" : "text-[rgb(228,228,239)]"}>{label}</p>
    </div>
  );
};

export default CustomCheckbox;
