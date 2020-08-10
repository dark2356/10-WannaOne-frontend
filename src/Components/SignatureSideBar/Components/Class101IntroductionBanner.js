import React from "react";
import styled from "styled-components";
import { Icon, Colors } from '@class101/ui';

function Class101IntroductionBanner() {
  return (
    <BannerContainer>
      <BannerText>
        <Title>준비물까지 챙겨주는 온라인 클래스</Title>
        <Subtitle>클래스101, 서비스 소개보기<Icon.Help fillColor={Colors.gray600} /></Subtitle>
      </BannerText>
      <IconImg src="/images/class101Logo.jpg"></IconImg>
    </BannerContainer>
  )
}

const BannerContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(62, 64, 66, 0.4);
  padding: 16px 20px 16px 16px;
`

const BannerText = styled.div``
const Title = styled.div`
  color: rgb(248, 248, 249);
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
`
const Subtitle = styled.div`
  display: flex;
  align-items: center;
  color: rgb(168, 174, 179);
  font-size: 11px;
  line-height: 16px;
  font-weight: 500;
  margin: 4px 0 0;

  svg {
    width: 12px;
    margin-left: 4px;
  }
`
const IconImg = styled.img`
  border-radius: 10px;
  width: 36px;
  height: 36px;
`
export default Class101IntroductionBanner;