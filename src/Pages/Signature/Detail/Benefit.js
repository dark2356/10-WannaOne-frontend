import React from "react";
import {
  Headline3,
  Subtitle1,
  Button,
  Icon,
  ButtonColor,
  Colors,
  ModalBottomSheet,
} from "@class101/ui";
import "./Benefit.scss";

function Benefit({
  focusTarget,
  isCouponClicked,
  detailData,
  setIsCouponClicked,
}) {
  return (
    <div className="benefit" ref={(el) => (focusTarget.current[4] = el)}>
      <div className="benTitle">
        <Headline3>
          지금 적용되고 있는
          <br />
          혜택이에요!
        </Headline3>
      </div>
      <div className="couponBox">
        <div className={`coupon ${isCouponClicked ? "disabled" : ""}`}>
          <Subtitle1>20,000원 할인 쿠폰 증정</Subtitle1>
          <div className="coupInf">
            <div>[시그니처] 💌 특별 할인 20,000원 쿠폰 💌</div>
            <div>12월 31일까지 사용 가능</div>
            <Button
              leftIcon={!isCouponClicked && <Icon.Download />}
              color={ButtonColor.RED}
              fill
              onClick={() => setIsCouponClicked(true)}
              className={isCouponClicked && "disabled"}
            >
              {isCouponClicked ? "쿠폰 받기 완료" : "쿠폰 받기"}
            </Button>
          </div>
        </div>
      </div>
      <div className="benefitCalc">
        <Subtitle1>할인 혜택 계산</Subtitle1>
        <dl>
          <dt>정가</dt>
          <dd>{detailData.price.toLocaleString()}원</dd>
        </dl>
        <dl>
          <dt>기본 할인 금액</dt>
          <dd>-137,000원</dd>
        </dl>
        <dl>
          <dt>쿠폰 추가 할인</dt>
          <dd>-20,000원</dd>
        </dl>
        <dl>
          <dt>총 할인 금액</dt>
          <dd>-157,000원</dd>
        </dl>
        <dl>
          <dt>최종 금액</dt>
          <dd>333,000원</dd>
        </dl>
        <dl>
          <dt className="installment">
            <ModalBottomSheet
              opener={
                <div>
                  쿠폰 할인 적용
                  <br />
                  12개월 할부 시
                  <Icon.Help
                    size={12}
                    fillColor={Colors.red600}
                    className="instIcon"
                  />
                </div>
              }
              title="카드사 무이자 할부 안내"
              className="cardInf"
            >
              ▣ 무이자 할부 적용 가능 금액: 5만원 이상
              <br />
              <br /> 비씨: 2~12개월 무이자
              <br />
              KB국민: 2~12개월 무이자
              <br />
              하나(외환): 2~12개월 무이자
              <br />
              삼성: 2~12개월 무이자
              <br />
              신한: 2~12개월 무이자
              <br />
              현대: 2~12개월 무이자
              <br />
              롯데: 2~12개월 무이자
              <br />
              NH채움: 2~12개월 무이자
              <br />
              하나: 2~12개월 무이자
              <br />
              씨티: 2~12개월 무이자
              <br />
              <br />
              [네이버페이 유의사항]
              <br />· 주문 변경 시 카드사 혜택 및 할부 적용 여부는 해당 카드사
              정책에 따라 변경될 수 있습니다.
              <br />· 네이버페이는 네이버ID로 별도 앱 설치 없이 신용카드 또는
              은행계좌 정보를 등록하여 네이버페이 비밀번호로 결제할 수 있는
              간편결제 서비스입니다.
              <br />· 결제 가능한 신용카드: 신한, 삼성, 현대, BC, 국민, 하나,
              롯데, NH농협, 씨티
              <br />· 결제 가능한 은행: NH농협, 국민, 신한, 우리, 기업, SC제일,
              부산, 경남, 수협, 우체국, 미래에셋대우, 광주, 대구, 전북,
              새마을금고, 제주은행,신협, 하나은행
              <br />· 네이버페이 카드 간편결제는 네이버페이에서 제공하는 카드사
              별 무이자, 청구할인 혜택을 받을 수 있습니다.
              <br />
              <br />
            </ModalBottomSheet>
          </dt>
          <dd className="instPrice">월 27,750</dd>
        </dl>
      </div>
    </div>
  );
}

export default Benefit;
