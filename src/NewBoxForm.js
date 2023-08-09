import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (width && height && color) {
      addBox({ width, height, color });
      setWidth("");
      setHeight("");
      setColor("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Width:
        <input
          type="text"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </label>
      <br />
      <label>
        Height:
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <br />
      <label>
        Background Color:
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Create Box</button>
    </form>
  );
};

export default NewBoxForm;
