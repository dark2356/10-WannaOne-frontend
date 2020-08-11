import React from "react";
import styled from "styled-components";
import { Icon } from '@class101/ui';

function Wish() {
  return (
    <WishContainer>
      <Icon.HeartOutline />
      <WishDescription>
        찜 <Quantity>6</Quantity>개
      </WishDescription>
    </WishContainer>
  );
}

const WishContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const WishDescription = styled.div`
  font-size: 11px;
  color: rgb(27, 28, 29);
  line-height: 16px;
  margin-top: 8px;
`
const Quantity = styled.span``

export default Wish;