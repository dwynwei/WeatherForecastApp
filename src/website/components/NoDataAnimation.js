import Lottie from "lottie-react";
import React from "react";
import noDataAnimation from "../../assets/lotties/no-data.json";

function NoDataAnimation({ width, height, labelText }) {
  return (
    <div
      className="d-flex flex-wrap justify-content-center align-items-center"
      style={{ width: width, height: height }}
    >
      <Lottie animationData={noDataAnimation} />
      <label style={{ fontFamily: "monospace", fontSize: "20px" }}>
        {labelText}
      </label>
    </div>
  );
}

export default NoDataAnimation;
