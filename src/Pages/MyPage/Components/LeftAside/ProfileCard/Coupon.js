import React from "react";
import styled from "styled-components";
import { Icon } from '@class101/ui';
import { flexColumnCenter } from "../../../../../Styles/styled";

function Coupon() {
  return (
    <CouponContainer>
      <Icon.Coupon />
      <CouponDescription>
        쿠폰 <Quantity>6</Quantity>개
      </CouponDescription>
    </CouponContainer>
  );
}

const CouponContainer = styled.div`
  ${flexColumnCenter}
`
const CouponDescription = styled.div`
  font-size: 11px;
  color: rgb(27, 28, 29);
  line-height: 16px;
  margin-top: 8px;
`
const Quantity = styled.span``

export default Coupon;