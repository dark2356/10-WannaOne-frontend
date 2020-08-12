import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";
import { SIGNATURE_MOCKUP_DATA, SIGNATURE_API_URL } from "../../../Config";

function SignatureHeadCover() {
  const [modalState, setModalState] = useState(false);
  const [product, setProduct] = useState({});

  const GetProudctData = () => {
    fetch(`${SIGNATURE_MOCKUP_DATA}`)
      .then(res => res.json())
      .then(res => setProduct(res))
  }

  useEffect(() => {
    GetProudctData();
  }, [])

  return (
    <SignatureHeadCoverContainer>
      <SignatureHeadCoverWrap
        onClick={() => setModalState(true)}
      >
        <TitleViewWrap>
          <TitleViewImage src={product.topPictures && product.topPictures[0]} />
        </TitleViewWrap>
        <SubViewWrap>
          <SubViewTop>
            <SubViewTopImage src={product.topPictures && product.topPictures[1]} />
          </SubViewTop>
          <SubViewBottom>
            <SubViewBottomImage>
              <div className="left imageBox">
                <img className="leftImg" src={product.topPictures && product.topPictures[2]} alt="productImg" />
              </div>
              <div className="right imageBox">
                <img className="rightImg" src={product.topPictures && product.topPictures[3]} alt="productImg" />
              </div>
            </SubViewBottomImage>
          </SubViewBottom>
        </SubViewWrap>
      </SignatureHeadCoverWrap>
      <Modal state={modalState} closeModal={() => setModalState(false)} product={product} />
    </SignatureHeadCoverContainer>
  );
}

const SignatureHeadCoverContainer = styled.section`
  background-color: rgb(27, 28, 29);
  max-width: 1920px;
  height: 690px;
`
const SignatureHeadCoverWrap = styled.div`
  display: flex;
`
const TitleViewWrap = styled.article`
  width: 64.3%;
  height: 690px;
`
const TitleViewImage = styled.img`
  cursor: pointer;
  height: 100%;
  width: 100%;
  object-fit: cover;
`
const SubViewWrap = styled.article`
  display: flex;
  flex-direction: column;
  width: 35.7%;
  margin-left: 6px;
  
`
const SubViewTop = styled.div`
  height: 380px;
`
const SubViewTopImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const SubViewBottom = styled.div`
  display: flex;
  margin-top: 6px;
  height: 304px;
`
const SubViewBottomImage = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;

    .imageBox {
    cursor: pointer;

    .leftImg, .rightImg {
      height: 100%;
      width: 100%;
    }

    .rightImg {
      margin-left: 6px;
    }
  }
`

export default withRouter(SignatureHeadCover);