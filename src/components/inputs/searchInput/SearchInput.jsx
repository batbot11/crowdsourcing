import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  margin-left: 5%;
  border: 1px solid #BDBDBD;
  border-radius: 10px;
  height: 55px;
`;

const SearchIcon = styled.i`
  color: #BDBDBD;
  font-szie: 20px;
`;

const Input = styled.input`
  
`;

const SearchInput = () => {
  return (
    <Container>
      <SearchIcon className="fal fa-search" />
      <Input placeholder="Cari Nama Peserta " />
    </Container>
  );
};

export default SearchInput;