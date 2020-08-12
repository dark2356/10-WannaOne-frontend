import React from "react";
import { Headline3 } from "@class101/ui";
import "./Package.scss";

function Package({ focusTarget, isFold, detailData, handleClick }) {
  return (
    <>
      <div className="packageInt" ref={(el) => (focusTarget.current[2] = el)}>
        <div className="packTitle">
          <Headline3>패키지 소개</Headline3>
        </div>
        <div className={`packImgBox ${isFold ? "fold" : ""}`}>
          {detailData.package.map((el) => {
            return <img alt="package" src={el} />;
          })}
        </div>
        <div className="moreReviewWrapper">
          <span className="moreReviewBox">
            <div className="plusIcon">
              {isFold ? (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                    fill="#fc3d46"
                  ></path>
                </svg>
              ) : (
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path d="M20 11H4v2h16v-2z" fill="#fc3d46"></path>
                </svg>
              )}
            </div>
            <span className="boxTitle" onClick={handleClick}>
              {isFold ? "더보기" : "접기"}
            </span>
          </span>
        </div>
      </div>
      <div className="htmlDivider" />
    </>
  );
}

export default Package;
