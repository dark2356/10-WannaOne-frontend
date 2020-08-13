import React from "react";
import "./UpdateClass.scss";
import { Icon, Colors, Card, Caption1, Badge, Divider } from "@class101/ui";

function UpdateClass({
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
      </div>
      <div className="ProductStateLabel">
        <div className="ProductState">미션답변작성</div>
      </div>
    </section>
  );
}

export default UpdateClass;
