import React from "react";
import styled, { css } from "styled-components";
import { Button, Icon } from "@class101/ui";

function ProductPriceInfo({ isCouponClicked, setIsCouponClicked }) {
  return (
    <ProductPriceInfoContainer>
      <PriceInfo>
        <Installment>12개월 할부</Installment>
        <DiscountAndPrice>
          <div className="discount">27%</div>
          <div className="price">월 29,416원</div>
        </DiscountAndPrice>
      </PriceInfo>
      <div className="discoutDescription">할인 자세히 보기</div>
      <MaxBenefitCard>
        <div className="notice">
          <div className="title">
            고객 님이 받을 수 있는
            <br />
            최대 혜택
          </div>
          <div className="cupponBtnBox">
            <Button
              fill
              onClick={() => setIsCouponClicked(true)}
              className={`cupponBtn ${isCouponClicked && "disabled"}`}
            >
              {isCouponClicked ? "받기 완료" : "쿠폰 받기"}
            </Button>
          </div>
        </div>
        <div className="maxBenefit">
          <span className="maxBenefitText">최대 할인가</span>
          <div className="maxBenefitPriceContainer">
            <span className="maxBenefitPriceBox">
              <span className="maxBenefitPrice">-157,000</span>원
            </span>
            <Icon.ChevronDown fill className="downIcon" />
          </div>
        </div>
        <div className="basicDiscount"></div>
        <div className="cupponAddDiscount"></div>
      </MaxBenefitCard>
    </ProductPriceInfoContainer>
  );
}
const flexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductPriceInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  color: rgb(237, 239, 240);
  font-weight: 700;
  margin: 16px 0 12px;

  .discoutDescription {
    text-align: end;
    color: rgb(168, 174, 179);
    cursor: pointer;
    transition: color 0.1s ease 0s;
    line-height: 16px;
    font-size: 11px;

    &:hover {
      color: rgb(141, 149, 155);
      text-decoration-line: underline;
    }
  }
`;
const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Installment = styled.div`
  font-size: 14px;
`;
const DiscountAndPrice = styled.div`
  display: flex;
  align-items: center;
  line-height: 24px;

  .discount {
    font-size: 16px;
    color: rgb(252, 61, 70);
  }

  .price {
    margin-left: 4px;
    font-size: 18px;
  }
`;
const MaxBenefitCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(62, 64, 66);
  border-radius: 3px;
  padding: 16px;
  margin-top: 16px;

  .notice {
    ${flexBetween}
    margin-bottom: 8px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgb(97, 101, 104);
    width: 294px;

    .cupponBtnBox {
      display: flex;

      .cupponBtn {
        background-color: rgb(243, 51, 64);
        color: rgb(255, 255, 255);
        width: 76px;
        height: 32px;

        &.disabled {
          background-color: rgb(97, 101, 104);
          color: rgb(133, 138, 141);
        }
      }
    }
  }

  .maxBenefit {
    ${flexBetween}

    .maxBenefitText {
      font-size: 14px;
      line-height: 20px;
      color: rgb(168, 174, 179);
    }

    .maxBenefitPriceContainer {
      display: flex;
      align-items: center;

      .maxBenefitPriceBox {
        font-size: 20px;
        line-height: 28px;
        color: rgb(243, 51, 64);
      }
    }
    .downIcon {
      margin-left: 7px;
      width: 14px;
      path {
        fill: rgb(97, 101, 104);
      }
    }
  }
`;
export default ProductPriceInfo;
