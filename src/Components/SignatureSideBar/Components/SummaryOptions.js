import React from "react";
import "./SummaryOptions.scss";
import { Icon } from '@class101/ui';

function SummaryOptions({ productInfo }) {
  return (
    <section className="SummaryOptionsContainer">
      <div className="SummaryOptionsList">
        <div className="Wrapper contentUseTicket">
          <div className="iconBox">
            <Icon.VideoOutline fill className="icon" />
          </div>
          <div className="text">컨텐츠 이용권</div>
        </div>
        <div className="Wrapper materialsKit">
          <div className="iconBox">
            <Icon.GiftOutline fill className="icon" />
          </div>
          <div className="text">준비물 키트</div>
        </div>
        <div className="Wrapper targetUser">
          <div className="iconBox">
            <Icon.PersonOutline fill className="icon" />
          </div>
          <div className="text">{productInfo && productInfo.level}</div>
        </div>
        <div className="Wrapper satisfactionScore">
          <div className="iconBox">
            <Icon.LikeOutline fill className="icon" />
          </div>
          <div className="text">강의 만족도 {productInfo && productInfo.satisfactory}</div>
        </div>
      </div>
    </section>
  )
}

export default SummaryOptions;