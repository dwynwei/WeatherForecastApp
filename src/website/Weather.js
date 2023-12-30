import React from "react";
import SelectNav from "./SelectNav";
import backgroundImg from "../../assets/background/weather_bg.jpg";

function Weather() {
  return (
    <div
      className="h-100 w-100 position-absolute"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <SelectNav
          className={`p-4 m-4 row bg-white`}
          style={{ border: "2px solid", borderRadius: "15px" }}
        />
      </div>
    </div>
  );
}

export default Weather;
