import Lottie from "lottie-react";
import React from "react";
import waitingAnimation from "../../assets/lotties/loading-weather.json";

function WaitingAnimation({ width, height, labelText }) {
  return (
    <div
      className="d-flex flex-wrap justify-content-center align-items-center"
      style={{ width: width, height: height }}
    >
      <Lottie animationData={waitingAnimation} />
      <label style={{ fontFamily: "monospace", fontSize: "20px" }}>
        {labelText}
      </label>
    </div>
  );
}

export default WaitingAnimation;
