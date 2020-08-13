import React from "react";
import "./CategoryClass.scss";
import { Icon, Colors, Card, Caption1, Badge, Divider } from "@class101/ui";

function CategoryClass({
  image_src,
  creator,
  name,
  start_date,
  like,
  price,
  pay_month,
  discount_rate,
  rate,
}) {
  return (
    <section className="updateClass">
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
        <Icon.LikeOutline
          className="cardClassIconlike"
          fillColor={Colors.gray500}
        />
        <div>{rate}</div>
      </div>
      <div className="ProductStateLabel">
        <div className="ProductState">미션답변작성</div>
      </div>
    </section>
  );
}

export default CategoryClass;
