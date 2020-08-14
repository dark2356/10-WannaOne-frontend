import React, { useState } from "react";
import Slider from "react-slick";
import styled, { css } from "styled-components";
import { Icon, Colors } from '@class101/ui';

function Modal({ state, closeModal, product }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (state &&
    <Container>
      <Contents>
        <Head>
          <CloseWrapper onClick={e => closeModal(e)}>
            <Icon.Close fillColor={Colors.white} />
            <Text>닫기</Text>
          </CloseWrapper>
        </Head>
        <Body>
          <Slider {...settings}>
            {product.topPictures && product.topPictures.map((el, i) => (
              <Image src={el} key={i} idx={i} />
            ))}
          </Slider>
        </Body>
      </Contents>
    </Container>
  );
};

const positionCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.section`
  ${positionCenter}
  position: fixed;
  background-color: rgba(0, 0, 0, 0.72);
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Contents = styled.div`
  z-index: 1001;
  position: relative;
  top: 0;
  padding: 0 auto;
  width: 896px;
  height: 672px;
`
const Head = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 10%;
`

const CloseWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: rgb(255, 255, 255);

  &:hover {
        color: rgb(230, 230, 230);
    text-decoration-line: underline;
  }

  svg {
    width: 28px;
    height: 28px;

    path {
      width: 100%;
      height: 100%;
    }
  }
`

const Text = styled.span`
  font-size: 16px;
  font-weight: 700;
`

const Body = styled.div`
  width: 896px;
  height: 672px;

  .slick-prev {
    left: -100px;
  }

  .slick-next {
    right: -75px;
  }

  .slick-next:before,
  .slick-prev:before {
      font-size: 50px;
    }
`
const Image = styled.img`
  width: 896px;
  height: 672px;
  object-fit: cover;
`

export default Modal;