import React from "react";
import styled from "styled-components";

function FloatingBtn({ scrollToTop }) {
  return (
    <Wrapper onClick={scrollToTop}>
      <Box />
    </Wrapper>
  );
}

export default FloatingBtn;

const Wrapper = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: transparent;
  flex-wrap: nowrap;
  overflow: initial;
`;

const Box = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  background-image: url(/images/floating.png);
  background-size: cover;
  cursor: pointer;
`;
