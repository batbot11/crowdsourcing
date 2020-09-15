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
import api from "../../../utils/api";

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

const ListHeading = styled.div`
  font-size: 12px;
  color: #636363;
  font-weight: bold;
  padding-left: 5%;
  margin-top: 10px;
`;

const ListContainer = styled.div``;

const ListItem = styled.div`
  position: relative;
  width: 90%;
  margin-left: 5%;
  border-bottom: 1px solid rgba(196, 196, 196, 0.6);
  display: flex;
  &:hover {
    background-color: #F2F2F2;
  }
  padding-bottom: 20px;
`;

const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
`;

const UserName = styled.div`
  font-weight: 900;
  font-size: 16px;
  color: #636363;
`;

const UserSub = styled.div`
  font-size: 16px;
  color: #636363;
`;

const UserSeperator = styled.div`
  background-color: #636363;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  display: inline-block;
`;

const GoldSpan = styled.span`
  color: #e3b26a;
`;

const AddFriendPopup = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("desainer");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersList();
  }, []);

  const getUsersList = async () => {
    try {
      const data = await api.getUsers();
      setUsers(data);
    } catch (err) {
      console.log("error in component fetching users list");
    }
  };

  console.log("users", users);

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

        <ListHeading>All Members</ListHeading>

        <ListContainer>
          {users.map((user) => (
            <ListItem>
              <UserImage src={user.picture} />

              <div>
                <UserName>{user.name}</UserName>

                <UserSub>
                  Desainer {user.company} <UserSeperator />{" "}
                  {(user.tags || []).join(", ")}

                  <div>
                    <GoldSpan>
                      <i className="fas fa-star" /> 4.9
                    </GoldSpan>
                    <GoldSpan>
                      <i className="fas fa-trophy" /> 25
                    </GoldSpan>
                  </div>
        
                </UserSub>
              </div>
            </ListItem>
          ))}
        </ListContainer>

        <LargeBlueButton>
          {" "}
          <i className="fas fa-user-plus" />
          Undang Bergabung (1)
        </LargeBlueButton>
      </PopupContainer>
    </React.Fragment>
  );
};

export default AddFriendPopup;
