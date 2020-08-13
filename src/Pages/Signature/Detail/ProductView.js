import React from "react";
import { Headline3, ModalBottomSheet } from "@class101/ui";
import "./ProductView.scss";

function ProductView({ focusTarget, productData }) {
  return (
    <div className="productViewBox" ref={(el) => (focusTarget.current[0] = el)}>
      <div className="productViewTitle">
        <Headline3>
          묘정과
          <br />
          <strong>총 3개의 작품</strong> 만들기
        </Headline3>
        <div className="prdIntro">
          한 작품을 만들어보는 데에 <strong>3~5시간</strong> 정도가 소요됩니다.
        </div>
      </div>
      <div className="prdImgBox">
        <ModalBottomSheet
          opener={
            <ul>
              {productData.length &&
                productData.map((el) => {
                  return (
                    <li key={el.id}>
                      <span>
                        <picture>
                          <img alt="product" src={el.imgUrl} />
                        </picture>
                      </span>
                      <p>{el.title}</p>
                    </li>
                  );
                })}
            </ul>
          }
          title="클래스 작품"
          hideScroll
        >
          {productData.length &&
            productData.map((el) => {
              return (
                <>
                  <img
                    style={{ width: "100%" }}
                    alt="img"
                    src={el.imgUrl}
                    className="modalImg"
                  />
                  <p style={{ margin: "16px 0" }}>{el.title}</p>
                </>
              );
            })}
        </ModalBottomSheet>
      </div>
      <div className="prdDivider" />
    </div>
  );
}

export default ProductView;
