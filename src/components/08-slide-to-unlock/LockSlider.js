import React from "react";
import "./lock-slider.css";

const LockSlider = ({ handleInput,sliderValue,width }) => {
  let SliderStyle = {
    appearance: "none",
    width:!width ? "300px": width,
    height: "50px",
    background: "rgba(188,190, 188, 0.5)",
    outline: "none",
  };
  return (

      <input
        type="range"
        className="slider mb-2"
        style={SliderStyle}
        value={sliderValue}
        onInput={handleInput}
      />

  
  );
};

export default LockSlider;
