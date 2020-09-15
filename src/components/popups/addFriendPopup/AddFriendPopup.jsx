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
  margin-bottom: 20px;
`;

const MenuItem = styled.div`
  font-family: poppins;
  font-weight: bold;
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
  margin-bottom: 10px;
  font-family: nunito-sans;
`;

const ListContainer = styled.div`
  height: 55%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f2f2f2;
    border-radius: 10px;
  }
`;

const ListItem = styled.div`
  position: relative;
  width: 90%;
  margin-left: 5%;
  border-bottom: 1px solid rgba(196, 196, 196, 0.6);
  display: flex;
  &:hover {
    background-color: #f2f2f2;
  }
  padding-bottom: 20px;
  padding-top: 10px;
  font-family: nunito-sans;
  cursor: pointer;
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-left: 5%;
  margin-right: 5%;
`;

const UserName = styled.div`
  font-weight: 900;
  font-size: 14px;
  color: #636363;
`;

const UserSub = styled.div`
  font-size: 11px;
  color: #636363;
  display: flex;
  align-items: center;
  margin-top: 2px;
`;

const UserSeperator = styled.div`
  background-color: #636363;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  display: inline-block;
  margin-left: 3px;
  margin-right: 3px;
`;

const GoldTextContainer = styled.div`
  margin-top: 5px;
`;

const GoldSpan = styled.span`
  color: #e3b26a;
  font-size: 14px;
  margin-right: 10px;
`;

const RecipientSection = styled.div`
  border-top: 3px solid rgba(196, 196, 196, 0.6);
  position: fixed;
  bottom: 100px;
  z-index: 11;
  background-color: #ffffff;
  width: 100%;
`;

const RecipientClearText = styled.span`
  color: #e3b26a;
  font-size: 11px;
  font-family: nunito-sans;
  position: absolute;
  right: 5%;
  bottom: 6px;
  cursor: pointer;
`;

const AddFriendPopup = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("desainer");

  const [users, setUsers] = useState([]);

  const [selectedUsers, setSelectedUsers] = useState([]);

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

  const addUser = (user) => {
    const object = [...selectedUsers, user];
    setSelectedUsers(object);
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
            <ListItem onClick={() => addUser(user)}>
              <UserImage src={user.picture} />

              <div>
                <UserName>{user.name}</UserName>

                <UserSub>
                  Desainer {user.company} <UserSeperator />{" "}
                  {(user.tags || []).join(", ")}
                </UserSub>

                <GoldTextContainer>
                  <GoldSpan>
                    <i className="fas fa-star" /> 4.9
                  </GoldSpan>
                  <GoldSpan>
                    <i className="fas fa-trophy" /> 25
                  </GoldSpan>
                </GoldTextContainer>
              </div>
            </ListItem>
          ))}
        </ListContainer>

        {selectedUsers.length > 0 && (
          <RecipientSection>
            <ListHeading>Recipient</ListHeading>
            <RecipientClearText>Clear All</RecipientClearText>
          </RecipientSection>
        )}

        <LargeBlueButton>
          {" "}
          <i style={{ marginRight: "5%" }} className="fas fa-user-plus" />
          Undang Bergabung ({selectedUsers.length})
        </LargeBlueButton>
      </PopupContainer>
    </React.Fragment>
  );
};

export default AddFriendPopup;
