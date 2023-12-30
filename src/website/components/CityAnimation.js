import Lottie from "lottie-react";
import React from "react";
import cityAnimation from "../../assets/lotties/select-city.json";

function CityAnimation({ width, height, labelText }) {
  return (
    <div
      className="d-flex flex-wrap justify-content-center align-items-center"
      style={{ width: width, height: height }}
    >
      <Lottie animationData={cityAnimation} />
      <label style={{ fontFamily: "monospace", fontSize: "20px" }}>
        {labelText}
      </label>
    </div>
  );
}

export default CityAnimation;
