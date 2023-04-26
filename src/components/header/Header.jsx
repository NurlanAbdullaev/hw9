import React from "react";
import styled from "styled-components";

export const Header = ({ expensHandler, closeLogin, UserMaps, isloggedIn }) => {
  return (
    <Container>
      {isloggedIn ? (
        <Div>
          <ButtonContainer>
            <BtnExpens onClick={expensHandler}>Expens</BtnExpens>
            <BtnUser onClick={UserMaps}>User</BtnUser>
            <BtnLogout onClick={closeLogin}>Logout</BtnLogout>
          </ButtonContainer>
        </Div>
      ) : null}
    </Container>
  );
};

const BtnExpens = styled.button`
  background: #4a026b;
  color: #fff;
  border-radius: 10px;
  width: 80px;
  height: 30px;
`;
const BtnUser = styled.button`
  background: #4a026b;
  color: #fff;
  border-radius: 10px;
  width: 80px;
  height: 30px;
`;

const BtnLogout = styled.button`
  background: #4a026b;
  color: #fff;
  border-radius: 10px;
  width: 80px;
  height: 30px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 50px;
  background-color: #ad9be9;
  justify-content: center;
`;
const Div = styled.div`
  width: 100%;
  background-color: #ad9be9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-right: 5rem;
`;
