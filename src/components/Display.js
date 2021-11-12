import React from "react";
import StyledDisplayHolder from "./Styled/StyledDisplayHolder";
import StyledDisplayText from "./Styled/StyledDisplayText";

const Display = (props) => {
  return (
    <StyledDisplayHolder>
      <StyledDisplayText>
        {props.value || (props.opp === "" ? 0 : props.opp)}
      </StyledDisplayText>
    </StyledDisplayHolder>
  );
};

export default Display;
