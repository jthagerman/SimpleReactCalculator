import React from "react";
import StyledButton from "./Styled/StyledPushBotton";

const PushButton = (props) => {
  if (!props.title) props.title = " ";
  return <StyledButton onClick={() => props.func(props.title)}>{props.title}</StyledButton>;
};

export default PushButton;
