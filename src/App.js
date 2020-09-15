import React, { useState } from 'react';
import styled from 'styled-components';
import AddFriendPopup from './components/popups/addFriendPopup/AddFriendPopup';

const BlueButton = styled.button`
background-color:  #3c8dbc;
border: 1px solid  #3c8dbc;
color: #fff;
padding: 8px 12px;
border-radius: 2px;
font-size: 12px;
cursor: pointer;
margin-left: 50%;
transform: translateX(-50%);
margin-top: 60px;
`;

const App = () => {

  const [openPopup, setOpenPopup] = useState(false);

  return (
    <React.Fragment>

    {openPopup && <AddFriendPopup/>}

      <BlueButton onClick={() => setOpenPopup(true)} >Add a Friend</BlueButton>
    </React.Fragment>
  );
};

export default App;