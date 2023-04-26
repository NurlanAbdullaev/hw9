import { useEffect, useState } from "react";
import { Header } from "../header/Header";
import styled from "styled-components";

const URL = "https://jsonplaceholder.typicode.com/users";

export const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((datas) => setData(datas));
  }, []);

  return (
    <GeneralDiv>
      <Header />
      {data.map((el) => {
        return (
          <DivContein>
            <h1>{el.name}</h1>
            <p>{el.email}</p>
          </DivContein>
        );
      })}
    </GeneralDiv>
  );
};
const GeneralDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DivContein = styled.div`
  background-color: #ad9be9;
  color: #fff;
  padding: 30px;
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 60rem;
  height: 12rem;
`;
