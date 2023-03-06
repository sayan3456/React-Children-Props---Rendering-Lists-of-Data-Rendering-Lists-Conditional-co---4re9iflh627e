import React from "react";

function ChildComponent(props) {
  const { inputValue, handleInputChange } = props;

  const handleSquare = () => {
    const squareValue = inputValue ** 2;
    return squareValue;
  };

  return (
    <div id="child">
      Find The Square <br />
      <input
        id="input"
        type="number"
        onChange={handleInputChange}
        value={inputValue}
      />
      <p id="output">{handleSquare()}</p>
    </div>
  );
}
export default ChildComponent;
