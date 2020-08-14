import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { Icon, Colors, Card } from "@class101/ui";
import "./OpenSignatureClass.scss";
import { SIGNATURE_WISH_API_URL } from "../../../../../Config.js";

function OpenSignatureClass({
  dipStatus,
  product_id,
  image_src,
  creator,
  name,
  rate,
  start_date,
  like,
}) {
  const [isWishAdd, setIsWishAdd] = useState(false);

  const wishAddHandler = () => {
    setIsWishAdd(!isWishAdd);
    fetch(`${SIGNATURE_WISH_API_URL}`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("access_token")
      },
      body: JSON.stringify({
        product_id,
      })
    })
  }

  return (
    <section
      className="OpenSignatureClass"
      product_id={product_id}
      dipStatus={dipStatus}
    >
      <span>
        <Link to="/detail">
          <Card title="디지털 드로잉" coverImage={image_src} external />
        </Link>
        <div className="cardClassHeartContainer" onClick={wishAddHandler}>
          <Icon.Heart
            fillColor={Colors.white}
            fill className={isWishAdd ? "onIcon" : "icon"}
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
