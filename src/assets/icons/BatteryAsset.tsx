import React from "react";

const BatteryAsset: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.5 3.75V3.125C17.5 2.77954 17.2205 2.5 16.875 2.5H14.375C14.0295 2.5 13.75 2.77954 13.75 3.125V3.75H6.25V3.125C6.25 2.77954 5.97046 2.5 5.625 2.5H3.125C2.77954 2.5 2.5 2.77954 2.5 3.125V3.75H0V17.5H20V3.75H17.5ZM6.25 8.75H5V10H3.75V8.75H2.5V7.5H3.75V6.25H5V7.5H6.25V8.75ZM17.5 8.75H13.75V7.5H17.5V8.75Z"
      fill="#8B8D97"
    />
  </svg>
);

export default BatteryAsset;
