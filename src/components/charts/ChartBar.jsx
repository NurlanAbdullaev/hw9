import React from "react";
import styled from "styled-components";

export const ChartBar = ({ label, currentPrice, maxPrice }) => {
  const fillHeight = Math.round((100 * currentPrice) / maxPrice);

  return (
    <StyledChartBar>
      <ChartBarInner>
        <ChartBarFill style={{ height: fillHeight }}></ChartBarFill>
      </ChartBarInner>
      <ChartBarName>{label}</ChartBarName>
    </StyledChartBar>
  );
};

const StyledChartBar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartBarInner = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 20px;
`;

const ChartBarFill = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
`;

const ChartBarName = styled.p`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;
