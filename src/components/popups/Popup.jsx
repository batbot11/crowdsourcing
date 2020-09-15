import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #c4c4c4;
  z-index: 1;
`;

export const PopupContainer = styled.div`
  width: 25%;
  background-color: #ffffff;
  height: 95vh; 
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 10;
  border-radius: 40px;
`;

export const CloseIcon = styled.i`
  color: #636363;
  position: absolute;
  font-size: 12px;
  top: 2.93%;
  right: 5.55%;
`;

export const BackArrow = styled.i`
  position: absolute;
  left: 5%;
  top: 27px;
  font-size: 38px;
  color: #828282;
  cursor: pointer;
  pointer-events: none;
`;

export const Heading = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  width: 50%;
  margin-left: 25%;
  font-size: 18px;
  text-align: center;
  color: #636363;
  margin-top: 27px;
`;
