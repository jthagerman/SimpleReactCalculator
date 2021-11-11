import styled from "styled-components";


 const StyledButton = styled.button`
  background: LightSteelBlue;
  border-radius: 10px;
  border: 0px ;
  color: white;
  width: 100px;
  height: 100px;
  font-weight: 900;
  font-size: 40px;
  &:hover {
    background-color: cornflowerBlue;
    color: white;
    transition: .3s;
  }
  margin: 5px
`;

export default StyledButton
