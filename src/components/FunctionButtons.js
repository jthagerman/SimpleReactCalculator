import React from "react";
import ClearButtonStyled from "./Styled/ClearButtonStyled";

const FunctionButtons = (props) => {
  return (
    <>
      <ClearButtonStyled onClick={() => props.clear()}>clear</ClearButtonStyled>
      <ClearButtonStyled onClick={() => props.del()}>del</ClearButtonStyled>
    </>
  );
};

export default FunctionButtons;
