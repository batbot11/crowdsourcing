import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin-left: 5%;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  height: 35px;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.i`
  color: #bdbdbd;
  font-sixe: 20px;
  margin-left: 3%;
`;

const Input = styled.input`
  &::placeholder {
    color: #BDBDBD;
  };
  height: 90%;
  margin-left: 5%;
  width: 80%;
  border: none;
  font-family: nunito-sans;
  &:active, &:focus {
    outline: none;
  }
}`;

const SearchInput = () => {
  return (
    <Container>
      <SearchIcon className="fal fa-search" />
      <Input placeholder="Cari Nama Peserta " />
    </Container>
  );
};

export default SearchInput;
