import React from 'react';
import styled from "styled-components";
import Button from "../Button";

const StyledButton = styled(Button)`
  background-color: #83cdec;
  border-radius: 35px;
  width: 90%;
  height: 55px;
`;

const LargeBlueButton = () => <StyledButton  />

export default LargeBlueButton;
