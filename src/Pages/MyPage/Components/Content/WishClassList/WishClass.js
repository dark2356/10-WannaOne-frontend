
/* global history */
/* global location */
/* global window */

/* eslint no-restricted-globals: ["off"] */

import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { Icon, Colors, Card, Caption1, Badge, Divider } from "@class101/ui";
import "./WishClass.scss";
import { SIGNATURE_WISH_API_URL } from "../../../../../Config";


function WishClass({
  dipStatus,
  product_id,
  image_url,
  category,
  creator,
  product_name,
  price,
  discount_rate,
  like,
  monthPrice,
  installment,
  start_date,
  satisfactory,
  setWishAmout,
  wishAmount,
  getData,
}) {

  const [isWishAdd, setIsWishAdd] = useState(false)

  const wishAddHandler = () => {
    if (confirm("정말로 취소하시겠습니까? 알림 및 혜택을 받지 못하실 수 있습니다.") == true) {
      setIsWishAdd(!isWishAdd)
      !isWishAdd && setWishAmout(wishAmount - 1)
      fetch(`${SIGNATURE_WISH_API_URL}`, {
        method: "POST",
        headers: {
          "Authorization": localStorage.getItem("access_token")
        },
        body: JSON.stringify({
          user_id: 8,
          product_id,
          dipStatus
        })
      })
        .then(getData())
    } else {
      return setIsWishAdd(isWishAdd)
    }

  }
  return (
    <section className="WishClass" product_id={product_id} dipStatus={dipStatus}>
      <Card
        title={product_name}
        coverImage={image_url}
        extraTop={
          <Caption1 fontWeight={600} color={Colors.gray900}>
            {category} ・ {creator}
          </Caption1>
        }
        extraBottom={
          <div style={{ marginLeft: '-4px', lineHeight: '0' }}>
            <Badge
              icon={<Icon.Heart fillColor={Colors.gray400} />}
              backgroundColor="transparent"
              color={Colors.gray400}
              size="sm"
            >
              {like}
            </Badge>{' '}
            <Badge
              icon={<Icon.Like fillColor={Colors.gray400} />}
              backgroundColor="transparent"
              color={Colors.gray400}
              size="sm"
            >
              {satisfactory}
            </Badge>
          </div>
        }
      >
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <Divider color="#F2F4F5" />
        </div>
        <div className="discountPrice">
          <span className="originalPrice">{price}</span>
          <span className="discountPercent">{discount_rate}%</span>
        </div>
        <div className="payMonth">
          <strong className="pay">월 {monthPrice.slice(0, monthPrice.indexOf('.'))}원</strong>
          <span className="month">({installment}개월)</span>
        </div>
        <Badge
          size="sm"
          color={Colors.gray600}
          backgroundColor={Colors.gray000}
          style={{ marginTop: '8px' }}
        >
          <div className="startDate">{start_date}</div>
        </Badge>
        <div className="wishContainer" onClick={wishAddHandler}>
          <Icon.Heart
            fill className="onIcon"
          />
        </div>
      </Card>
    </section>
  );
}
export default withRouter(WishClass);
