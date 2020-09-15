import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Overlay,
  PopupContainer,
  CloseIcon,
  BackArrow,
  Heading,
} from "../Popup";
import SearchInput from "../../inputs/searchInput/SearchInput";
import Button from "../../buttons/Button";
import api from '../../../utils/api';

const Menu = styled.div`
  width: 90%;
  margin-left: 5%;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
`;

const MenuItem = styled.div`
  width: 50%;
  padding: 10px 10px;
  text-align: center;
  cursor: pointer;
  color: ${(props) => (props.active ? "#64B3D5" : "#E0E0E0")};
  border-bottom: ${(props) => (props.active ? "3px solid #64B3D5" : "none")};
`;

const LargeBlueButton = styled.button`
  background-color: #83cdec;
  border-radius: 35px;
  width: 90%;
  height: 55px;
  border: 1px solid #83cdec;
  position: absolute;
  bottom: 10px;
  left: 5%;
  color: #ffffff;
`;

const AddFriendPopup = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("desainer");

  useEffect(() => {
    getUsersList();
  }, []);

  const getUsersList = async () => {
    const data = await api.getUsers();
  };

  return (
    <React.Fragment>
      <Overlay />
      <PopupContainer>
        <CloseIcon className="fas fa-times" />
        <BackArrow className="fal fa-long-arrow-left" />
        <Heading>Undang Peserta Terbaik untuk Tim Baru mu!</Heading>
        <Menu>
          <MenuItem
            active={activeMenuItem === "desainer"}
            onClick={() => setActiveMenuItem("desainer")}
          >
            Desainer
          </MenuItem>
          <MenuItem
            active={activeMenuItem === "guru"}
            onClick={() => setActiveMenuItem("guru")}
          >
            Guru
          </MenuItem>
        </Menu>
        <SearchInput />
        <LargeBlueButton> <i className="fas fa-user-plus" />Undang Bergabung (1)</LargeBlueButton>
      </PopupContainer>
    </React.Fragment>
  );
};

export default AddFriendPopup;
