import React from "react";
import styled from "styled-components"
import { Badge } from '@class101/ui';

function Label({ productInfo }) {
  return (
    <LabelContainer>
      <ClassCatagory>
        <Badge>{productInfo && productInfo.category}</Badge>
      </ClassCatagory>
      <Badge>바로 수강 가능</Badge>
    </LabelContainer>
  );
}

const LabelContainer = styled.div`
  display: flex;
  margin-top: 8px;
  width: 318px;
`;
const ClassCatagory = styled.div`
  padding-right: 5px;
`

export default Label;