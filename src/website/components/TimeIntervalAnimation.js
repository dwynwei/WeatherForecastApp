import Lottie from "lottie-react";
import React from "react";
import timeAnimation from "../../assets/lotties/select-time-interval.json";

function TimeIntervalAnimation({ width, height, labelText }) {
  return (
    <div
      className="d-flex flex-wrap justify-content-center align-items-center"
      style={{ width: width, height: height }}
    >
      <Lottie animationData={timeAnimation} />
      <label style={{ fontFamily: "monospace", fontSize: "20px" }}>
        {labelText}
      </label>
    </div>
  );
}

export default TimeIntervalAnimation;
