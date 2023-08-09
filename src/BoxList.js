import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import "./BoxList.css";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (box) => {
    setBoxes([...boxes, box]);
  };

  const removeBox = (index) => {
    const updatedBoxes = boxes.filter((_, i) => i !== index);
    setBoxes(updatedBoxes);
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map((box, index) => (
        <Box
          key={index}
          color={box.color}
          width={box.width}
          height={box.height}
          removeBox={() => removeBox(index)}
        />
      ))}
    </div>
  );
};

export default BoxList;
