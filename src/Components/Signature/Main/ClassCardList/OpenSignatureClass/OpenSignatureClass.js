import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Icon, Colors, Card } from "@class101/ui";
import "./OpenSignatureClass.scss";

function OpenSignatureClass({
  image_src,
  creator,
  name,
  rate,
  start_date,
  like,
}) {
  return (
    <section className="OpenSignatureClass">
      <span>
        <Card
          title="아이패드 드로잉"
          coverImage={image_src}
          to={"/"}
          external
        />
        <div className="cardClassHeartContainer">
          <Icon.HeartOutline
            fillColor={Colors.white}
            className="cardClassHeart"
          />
        </div>
      </span>
      <div className="cardClassCategory">{creator}</div>
      <div>{name}</div>
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
        <div className="ProductState">{start_date}</div>
      </div>
    </section>
  );
}
export default withRouter(OpenSignatureClass);
