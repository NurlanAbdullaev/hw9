import React from "react";
import styled from "styled-components";
import { ChartBar } from "./ChartBar";

export const Chart = ({ filteredYear }) => {
  const maxPrice = 2000;

  const months = [
    { label: "Январь", currentPrice: 0 },
    { label: "Февраль", currentPrice: 0 },
    { label: "Март", currentPrice: 0 },
    { label: "Апрель", currentPrice: 0 },
    { label: "Май", currentPrice: 0 },
    { label: "Июнь", currentPrice: 0 },
    { label: "Июль", currentPrice: 0 },
    { label: "Август", currentPrice: 0 },
    { label: "Сентябрь", currentPrice: 0 },
    { label: "Октябрь", currentPrice: 0 },
    { label: "Ноябрь", currentPrice: 0 },
    { label: "Декабрь", currentPrice: 0 },
  ];

  filteredYear.forEach((item) => {
    const monthNum = new Date(item.date).getMonth();
    months[monthNum].currentPrice += item.price;
  });
  return (
    <StyledChart>
      {months.map((el) => {
        return (
          <ChartBar
            key={el.label}
            label={el.label}
            currentPrice={el.currentPrice}
            maxPrice={maxPrice}
          />
        );
      })}
    </StyledChart>
  );
};

const StyledChart = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
  margin: 18px 10px 0px 10px;
  width: 740px;

  margin-left: 5px;
  margin-top: 20px;
`;
