import React from "react";
import Display from "./Display";
import StyledCalculatorContainer from "./Styled/StyledCalculatorContainer";
import FunctionButtons from "./FunctionButtons";

import { useState, useEffect } from "react";
import Keypad from "./Keypad";

const Calculator = (props) => {
  const [value, setValue] = useState(0);
  const [currentEntry, setCurrentEntry] = useState(0);
  const [currentOperation, setCurrentOPeration] = useState("");


  useEffect(() => {
    console.log("dom changed")
  })

 


  const numEntry = (value) => {
    if (currentEntry) {
      if (!((value === ".") & currentEntry.toString().includes("."))) {
        let newValue = currentEntry.toString() + value;
        if (newValue.length < 13) setCurrentEntry(newValue);
      }
    } else setCurrentEntry(value);
  };

  const selectOpp = (symbol) => {
    if (currentOperation === "") {
      setCurrentOPeration(symbol);
      setValue(currentEntry);
      setCurrentEntry(null);
    }
  };

  const equals = () => {
    switch (currentOperation) {
      case "/": {
        if(Number(currentEntry) === 0) {
          setValue(0);
          setCurrentEntry(0);
          
        }
        else {
          let newValue = Number(value) / Number(currentEntry);
          setValue(newValue);
          setCurrentEntry(newValue);

        }

        break;
      }
      case "+": {
        let newValue = Number(value) + Number(currentEntry);
        setValue(newValue);
        setCurrentEntry(newValue);
        break;
      }
      case "-": {
        let newValue = Number(value) - Number(currentEntry);
        setValue(newValue);
        setCurrentEntry(newValue);
        break;
      }
      case "x": {
        let newValue = Number(value) * Number(currentEntry);
        setValue(newValue);
        setCurrentEntry(newValue);
        break;
      }
      default: {
        break;
      }
    }
    setCurrentOPeration("");
  };

  const clear = () => {
    setValue(0);
    setCurrentOPeration("");
    setCurrentEntry(0);
  };

  const del = () => {
    if (currentEntry) setCurrentEntry(currentEntry.toString().slice(0, -1));
  };

  const handleKey = (e)  =>{
    if(e.key === "Backspace") del()
    if(!isNaN(e.key)){
      numEntry(e.key)
    }

  }

  return (
    <StyledCalculatorContainer onKeyDown={handleKey}>
      <Display value={currentEntry} opp={currentOperation} />
      <FunctionButtons del={del} clear={clear} />
      <Keypad numEntry={numEntry} selectOpp={selectOpp} equals={equals} />
    </StyledCalculatorContainer>
  );
};

export default Calculator;
