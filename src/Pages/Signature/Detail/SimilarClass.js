import React from "react";
import { Icon, Colors, Card, Caption1, Badge, Divider } from "@class101/ui";
import "./SimilarClass.scss";

function SimilarClass({
  category,
  image_src,
  creator,
  name,
  rate,
  start_date,
  like,
  discount_rate,
  price,
  pay_per_month,
}) {
  return (
    <section className="SimilarClass">
      <Card
        title={name}
        coverImage={image_src}
        className="card"
        extraTop={
          <Caption1 fontWeight={600} color={Colors.white}>
            {category} ・ {creator}
          </Caption1>
        }
        extraBottom={
          <div style={{ marginLeft: "-4px", lineHeight: "0" }}>
            <Badge
              icon={<Icon.Heart fillColor={Colors.gray600} />}
              backgroundColor="transparent"
              color={Colors.gray600}
              size="sm"
            >
              {like}
            </Badge>{" "}
            <Badge
              icon={<Icon.Like fillColor={Colors.gray600} />}
              backgroundColor="transparent"
              color={Colors.gray600}
              size="sm"
            >
              {rate}
            </Badge>
          </div>
        }
      >
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <Divider color="#3E4042" />
        </div>
        <div className="discountPrice">
          <span className="originalPrice">{price}</span>
          <span className="discountPercent">{discount_rate}%</span>
        </div>
        <div className="payMonth">
          <strong className="pay">월 {pay_per_month}원</strong>
        </div>
        <Badge
          size="sm"
          color={Colors.gray600}
          backgroundColor={Colors.gray800}
          style={{ marginTop: "8px" }}
        >
          <div className="startDate">{start_date}</div>
        </Badge>
        <div className="wishContainer">
          <Icon.HeartOutline
            fillColor={Colors.white}
            className="cardClassHeart"
          />
        </div>
      </Card>
    </section>
  );
}

export default SimilarClass;
