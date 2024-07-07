import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-main">
      <div class="dot-spinner">
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
      </div>
      <div>
        <img src="/images/s.png" alt="" className="w-[250px]" />
      </div>
    </div>
  );
};

export default Loader;
