import React from "react";
import ProfileEdit from "./ProfileEdit";
import Point from "./Point";
import Coupon from "./Coupon";
import Wish from "./Wish";
import Order from "./Order";
import styled from "styled-components";

function ProfileCard({ wishAmount }) {
  return (
    <ProfileCardContainer>
      <UserContainer>
        <ProfileEdit />
        <Point />
      </UserContainer>
      <ToolTipContainer>
        <Coupon />
        <Wish wishAmount={wishAmount} />
        <Order />
      </ToolTipContainer>
    </ProfileCardContainer>
  )
}

const ProfileCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(41, 42, 43, 0.08) 0px 2px 6px, rgba(41, 42, 43, 0.04) 0px 1px 0px;
  border-radius: 3px;
  width: 360px;
  height: 330px;
`
const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ToolTipContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 360px;
  margin: 24px 0 28px;
  padding: 0 40px;
`

export default ProfileCard;