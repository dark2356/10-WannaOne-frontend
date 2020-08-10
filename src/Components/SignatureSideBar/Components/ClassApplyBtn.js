import React from "react";
import styled from "styled-components";
import { Button, ButtonColor } from '@class101/ui';

function ClassApplyBtn() {
  return (
    <ApplyBtnContainer>
      <Button color={ButtonColor.RED}><span>클래스 신청하기</span></Button>
    </ApplyBtnContainer >
  );
}

const ApplyBtnContainer = styled.section`
  .vwQtN {
    width: 100%;
    height: 48px;
    
    span {
      font-size: 16px;
      font-weight: 700;
    }
  }
`

export default ClassApplyBtn;