import React from "react";
import styled from "styled-components";


function Point() {
  return (
    <PointContainer>
      7,000
      <PointUnit>P</PointUnit>
      <BallImg src="/images/pointBall.png" alt="" />
    </PointContainer>
  );
}

const PointContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 249, 242);
  width: 90px;
  line-height: 20px;
  margin: 16px 0 0;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;
`
const PointUnit = styled.span`
  margin-left: 2px;
  line-height: 20px;
`
const BallImg = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 4px;
`

export default Point;