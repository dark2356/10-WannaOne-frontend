import React, { useState, useEffect } from "react";
import styled from "styled-components"
import { Button, Icon, ButtonSize, Colors } from '@class101/ui';
import { SIGNATURE_WISH_API_URL } from "../../../Config";

function WishShare() {
  const [isWishAdd, setIsWishAdd] = useState(false)
  const [wishCount, setWishCount] = useState(808)

  const wishAddHandler = () => {
    setIsWishAdd(!isWishAdd)
  }

  const wishCountHandler = () => {
    wishAddHandler()
    !isWishAdd ? setWishCount(wishCount + 1) : setWishCount(wishCount - 1)
    fetch(`${SIGNATURE_WISH_API_URL}`, {
      method: "POST",
      bodu: JSON.stringify({
        "user_id": 8,
        "product_id": 2
      })
    })
  }

  return (
    <WishShareContainer>
      <Button
        onClick={wishCountHandler}
        fill className="wishBtn" leftIcon={<Icon.Heart fill className={isWishAdd ? "onIcon" : "icon"} accentColor={Colors.red700} />} size={ButtonSize.LARGE}>
        <span className="wishNumber">{wishCount}</span>
      </Button>
      <Button fill className="shareBtn" leftIcon={<Icon.Send2 fill className="icon" />} size={ButtonSize.LARGE}>
        <span className="shareText">공유하기</span>
      </Button>
    </WishShareContainer>
  );
}



const WishShareContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 12px;

  .wishBtn, .shareBtn {
    background-color: rgb(62, 64, 66);
    color: rgb(237, 239, 240);
    transition: background-color 0.1s easy 0s;
    width: calc(50% -6px);
    height: 40px
  }

  .wishBtn {
    margin-right: 12px;

    :hover {
      background-color: rgb(37, 39, 40);
    }
  }

  .shareBtn {
    :hover {
      background-color: rgb(37, 39, 40);
    }
  }

  .icon { 
    width: 18px;
    path {
      fill: rgb(237, 239, 240);
    }
  }

  .onIcon {
    width: 18px;
    path {
      fill: rgb(252, 61, 70);
    }
  }

  .wishNumber, .shareText {
    font-size: 14px;
  }
`

export default WishShare;
