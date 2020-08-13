import React from "react";
import styled from "styled-components";
import { Icon } from '@class101/ui';

const DAY_POINT_ARR = [500, 500, 1000, 1000, 2000, 2000, 3000]

function MyAttendance() {
  return (
    <MyAttendanceContainer>
      <AttendanceView>
        <Title>7일간 연속 수강해서 총 10,000P 모아요
          <InfoTooltip>
            <InfoButton>
              <Icon.Info />
            </InfoButton>
          </InfoTooltip>
        </Title>
        <Description>오늘 수강하면 <PointText>500P</PointText> 적립! 7일 연속 수강 챌린지를 시작하세요</Description>
        <DayList>
          {DAY_POINT_ARR.map((day) => {
            return (
              <DayItem>
                <BadgeEmpty />
                <BadgePoint>{day}P</BadgePoint>
              </DayItem>
            )
          })}
        </DayList>
      </AttendanceView>
    </MyAttendanceContainer>
  );
}

const MyAttendanceContainer = styled.div`
  box-shadow: rgba(41, 42, 43, 0.1) 0px 2px 5px, rgba(41, 42, 43, 0.06) 0px 0px 0.5px;
  width: 360px;
  height: 150px;
  padding: 20px;
  margin: 24px 0 24px;

`
const AttendanceView = styled.div`
  width: 100%;
  height: 100%;
`
const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: rgb(27, 28, 29);
  line-height: 20px;
  font-weight: 500;
`
const InfoTooltip = styled.span`
  display: flex;
`
const InfoButton = styled.button`
  background-color: white;
  cursor: pointer;
  width: 14px;
  height: 14px;
  margin-left: 2px;
  line-height: 20px;
  svg {
    width: 100%;
    height: 100%;
  }
`
const Description = styled.p`
  font-size: 11px;
  line-height: 16px;
  color: rgb(133, 138, 141);
  margin: 5px 0 0;
`
const PointText = styled.span`
  color: rgb(253, 126, 20);
`
const DayList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`
const DayItem = styled.li`
  display: flex;
  flex-direction: column;
`
const BadgeEmpty = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 100%;
  background-color: #f8f8f8;
`
const BadgePoint = styled.span`
  font-size: 9px;
  line-height: 12px;
  color:rgb(168, 174, 179);
  margin-top: 4px;
`

export default MyAttendance;