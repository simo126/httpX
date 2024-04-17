import React from "react";

const Circle = ({ radius, color }) => {
  const circleStyle = {
    width: radius * 2,
    height: radius * 2,
    borderRadius: "50%",
    backgroundColor: color,
  };

  return <div style={circleStyle}></div>;
};

export default Circle;
