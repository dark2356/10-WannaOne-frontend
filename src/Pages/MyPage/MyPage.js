import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProfileCard from "./Components/LeftAside/ProfileCard/ProfileCard";
import MyAttendance from "./Components/LeftAside/MyAttendance/MyAttendance";
import MyViewClassList from "./Components/Content/MyViewClassList/MyViewClassList"
import WishClassList from "./Components/Content/WishClassList/WishClassList"
import MyPageNav from "./Components/MyPageNav/MyPageNav";
import MyPageFooter from "./Components/MyPageFooter/MyPageFooter";
import { MY_PAGE_API_URL } from "../../Config";

function MyPage() {
  const [data, setData] = useState([]);
  const [wishAmount, setWishAmout] = useState(0)

  useEffect(() => {
    getData()
    getWishAmout()
  }, []);

  const getData = () => {
    setTimeout(() => {
      fetch(`${MY_PAGE_API_URL}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res.dipClass);
        });
    }, 500)
  }

  const getWishAmout = () => {
    fetch(`${MY_PAGE_API_URL}`)
      .then((res) => res.json())
      .then((res) => {
        setWishAmout(res.dips);
      });
  }

  return (
    <MyPageContainer>
      <MyPageNav />
      <MypageWrapper>
        <LeftAside>
          <ProfileCard wishAmount={wishAmount} />
          <MyAttendance />
          <Membership />
        </LeftAside>
        <Content>
          <MyViewClassList data={data} getData={getData} setWishAmout={setWishAmout} wishAmount={wishAmount} />
          <WishClassList data={data} getData={getData} setWishAmout={setWishAmout} wishAmount={wishAmount} />
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