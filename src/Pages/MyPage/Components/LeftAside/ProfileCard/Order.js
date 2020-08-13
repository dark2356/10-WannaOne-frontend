import React from "react";
import styled from "styled-components";
import { Icon } from '@class101/ui';

function Order() {
  return (
    <OrderContainer>
      <Icon.ToteBag />
      <OrderDescription>
        주문내역 <Quantity>1</Quantity>개
      </OrderDescription>
    </OrderContainer>
  );
}

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const OrderDescription = styled.div`
  font-size: 11px;
  color: rgb(27, 28, 29);
  line-height: 16px;
  margin-top: 8px;
`
const Quantity = styled.span``

export default Order;