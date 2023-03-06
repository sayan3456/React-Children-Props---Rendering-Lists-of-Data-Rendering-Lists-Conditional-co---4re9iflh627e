import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <div id="main">
      <ChildComponent
        inputValue={inputValue}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}
export default App;
