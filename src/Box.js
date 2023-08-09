import React from "react";

const Box = ({ color, width, height, removeBox }) => {
  const boxStyle = {
    backgroundColor: color,
    width: width,
    height: height,
  };

  return (
    <div className="box" style={boxStyle}>
      <button onClick={removeBox}>X</button>
    </div>
  );
};

export default Box;
