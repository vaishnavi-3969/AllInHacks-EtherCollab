import React from "react";

const Logo = ({ color }) => {
  return (
    // <svg
    //   className={`w-8 ${color} text-teal-accent-400`}
    //   viewBox="0 0 24 24"
    //   strokeLinejoin="round"
    //   strokeWidth="2"
    //   strokeLinecap="round"
    //   strokeMiterlimit="10"
    //   stroke="currentColor"
    //   fill="none"
    // >
    //   <rect x="3" y="1" width="7" height="12" />
    //   <rect x="3" y="17" width="7" height="6" />
    //   <rect x="14" y="1" width="7" height="6" />
    //   <rect x="14" y="11" width="7" height="12" />
    // </svg>
    <img
      src="data:image/png;base64,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"
      alt="logo"
      className="w-12"
      />
  );
};

export default Logo;
