import React from "react";

const FilterIcon = () => {
  return (
    <svg
      width="18"
      height="15"
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="18"
        height="3"
        rx="1.5"
        transform="matrix(1 0 0 -1 0 13)"
        fill="#CCCCCC"
      />
      <rect
        width="18"
        height="3"
        rx="1.5"
        transform="matrix(1 0 0 -1 0 5)"
        fill="#CCCCCC"
      />
      <circle cx="6.5" cy="11.5" r="3.5" fill="#CCCCCC" />
      <circle cx="11.5" cy="3.5" r="3.5" fill="#CCCCCC" />
      <circle cx="6.5" cy="11.5" r="1.5" fill="#0F3649" />
      <circle cx="11.5" cy="3.5" r="1.5" fill="#0F3649" />
    </svg>
  );
};

export default FilterIcon;
