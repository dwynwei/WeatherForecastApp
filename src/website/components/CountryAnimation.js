import Lottie from "lottie-react";
import React from "react";
import countryAnimation from "../../assets/lotties/select-country.json";

function CountryAnimation({ width, height, labelText }) {
  return (
    <div
      className="d-flex flex-wrap justify-content-center align-items-center"
      style={{ width: width, height: height }}
    >
      <Lottie animationData={countryAnimation} />
      <label style={{ fontFamily: "monospace", fontSize: "20px" }}>
        {labelText}
      </label>
    </div>
  );
}

export default CountryAnimation;
