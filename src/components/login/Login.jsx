import React, { useState } from "react";
import styled from "styled-components";

export const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailValid, setEmailValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState();
  const [formValid, setFormValid] = useState(false);

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);

    setFormValid(
      e.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);

    setFormValid(
      e.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };
  const validateEmailHandler = () => {
    setEmailValid(enteredEmail.includes("@"));
  };
  const validatePasswordHandler = () => {
    setPasswordValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.getLogin(enteredEmail, enteredPassword);
  };

  return (
    <ContainerDiv>
      <MiniContainerDiv>
        <form onSubmit={submitHandler}>
          <InputControl>
            <label htmlFor="email">E-Mail</label>

            {emailValid === false ? (
              <InputDiv
                style={{ borderColor: "red", background: "#f1aeae" }}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
                type="email"
                id="email"
              />
            ) : (
              <InputDiv
                type="email"
                id="email"
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
              />
            )}
          </InputControl>
          <InputControl>
            <label htmlFor="password">Password</label>
            {passwordValid === false ? (
              <InputDiv
                style={{ borderColor: "red", background: "#f1aeae" }}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
                type="password"
                id="password"
              />
            ) : (
              <InputDiv
                type="password"
                id="password"
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
              />
            )}
          </InputControl>
          <BtnLogin disabled={!formValid} type="submit">
            login
          </BtnLogin>
        </form>
      </MiniContainerDiv>
    </ContainerDiv>
  );
};
const InputDiv = styled.input`
  width: 400px;
  height: 30px;
  background-color: #dad5d5;

  border: 2px solid #fff;
  border-radius: 12px;
  font: inherit;
  &:focus {
    outline: none;
    border-color: #7c1292;
    background: #e7c8ef;
  }
`;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const MiniContainerDiv = styled.div`
  width: 600px;
  height: 220px;
  border: 2px solid;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: rgba(34, 60, 80, 0.2) -9px -6px 44px 21px;
  -webkit-box-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BtnLogin = styled.button`
  background: #4a026b;
  color: #fff;
  border-radius: 10px;
  width: 80px;
  height: 30px;
`;

const InputControl = styled.div``;
