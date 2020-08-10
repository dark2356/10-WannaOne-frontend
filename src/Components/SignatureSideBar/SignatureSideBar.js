import React, { useState, useEffect } from "react";
import styled from "styled-components"
import Label from "./Components/Label";
import ProductPriceInfo from "./Components/ProductPriceInfo";
import SummaryOptions from "./Components/SummaryOptions";
import WishShare from "./Components/WishShare";
import ClassApplyBtn from "./Components/ClassApplyBtn";
import Class101IntroductionBanner from "./Components/Class101IntroductionBanner";
import { SIGNATURE_API_URL } from "../../Config";

function SignatureSideBar() {
  const [productInfo, setProductInfo] = useState({})

  useEffect(() => {
    fetch(`${SIGNATURE_API_URL}`)
      .then(res => res.json())
      .then(res => setProductInfo(res))
  }, [])

  return (
    <SignatureSideBarContainer>
      <article className="productHeader">
        <span className="creatorName">
          By. {productInfo.creater && productInfo.creater.name}
        </span>
        <h2 className="title">{productInfo && productInfo.name}</h2>
        <div className="labelBox">
          <Label productInfo={productInfo} />
        </div>
        <div className="priceInfoBox">
          <ProductPriceInfo />
        </div>
        <SummaryOptions productInfo={productInfo} />
        <WishShare />
        <ClassApplyBtn />
      </article>
      <Class101IntroductionBanner />
    </SignatureSideBarContainer>
  )
}

const SignatureSideBarContainer = styled.section`
  background-color: rgb(27, 28, 29);
  color: rgb(237, 239, 240);
  width: 376px;
  height: 720px;

  .productHeader {
    width: 376px;
    height: 580px;
    margin: 0 0 15px;
    padding: 24px;
    border: 1px solid rgb(62, 64, 66);
    
    .creatorName {
      display: block;
      color: rgb(168, 174, 179);
      font-weight: bold;
      margin: 0 0 4px;
      font-size: 14px;
    }

    .title {
      text-decoration: none;
      margin: 0 0 8px;
      font-size: 20px;
    }
  }
`

export default SignatureSideBar;