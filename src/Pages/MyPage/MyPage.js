import React from "react";
import styled from "styled-components";
import ProfileCard from "./Components/LeftAside/ProfileCard/ProfileCard";
import MyAttendance from "./Components/LeftAside/MyAttendance/MyAttendance";
import MyViewClassList from "./Components/Content/MyViewClassList/MyViewClassList"
import WishClassList from "./Components/Content/WishClassList/WishClassList"
import MyPageNav from "./Components/MyPageNav/MyPageNav";
import MyPageFooter from "./Components/MyPageFooter/MyPageFooter";

function MyPage() {
  return (
    <MyPageContainer>
      <MyPageNav />
      <MypageWrapper>
        <LeftAside>
          <ProfileCard />
          <MyAttendance />
          <Membership />
        </LeftAside>
        <Content>
          <MyViewClassList />
          <WishClassList />
        </Content>
      </MypageWrapper>
      <MyPageFooter />
    </MyPageContainer>
  );
}

const MyPageContainer = styled.section`
  display: flex;
  flex-direction: column;
`
const MypageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px 0 24px;
`
const LeftAside = styled.aside`
  margin-right: 28px;
`
const Membership = styled.img.attrs({
  src: "/images/membership.png",
  alt: "user",
})`
`

const Content = styled.main`
  width: 800px;
`

export default MyPage;