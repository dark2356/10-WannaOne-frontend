import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Icon, Colors, Card, Caption1 } from "@class101/ui";
import "./NewClass.scss";

function NewClass({
  image_src,
  creator,
  name,
  start_date,
  like,
  price,
  pay_month,
  discount_rate,
}) {
  return (
    <section className="NewClass">
      <span>
        <Card
          title={name}
          coverImage={image_src}
          extraTop={
            <Caption1 fontWeight={600} color={Colors.gray900}>
              {creator}
            </Caption1>
          }
        />
        <div className="cardClassHeartContainer">
          <Icon.HeartOutline
            fillColor={Colors.white}
            className="cardClassHeart"
          />
        </div>
      </span>
      <div className="cardClassIconFlex">
        <Icon.Heart className="cardClassIcon" fillColor={Colors.gray500} />
        <div>{like}</div>
      </div>
      <div>
        <span className="priceFlexBox">
          <div className="price">${Number(price).toLocaleString()}원</div>
          <div className="discount">{discount_rate}%</div>
        </span>
        <div className="payMonth">
          월 {Number(pay_month).toLocaleString()}원
          <span className="month">(5개월)</span>
        </div>
      </div>
      <div className="ProductStateLabel">
        <div className="ProductState">{start_date}</div>
      </div>
    </section>
  );
}
export default withRouter(NewClass);
