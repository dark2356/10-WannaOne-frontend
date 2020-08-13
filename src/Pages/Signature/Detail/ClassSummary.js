import React from "react";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import { Headline3 } from "@class101/ui";
import "./ClassSummary.scss";

function ClassSummary({ detailData, reviewItems }) {
  return (
    <>
      <div className="classSummary">
        <h2>클래스 정보</h2>
        <dl>
          <dt className="summary">클래스 분량</dt>
          <dd className="summary">
            {detailData.numberOfChapter}개 챕터, 37개 세부강의
          </dd>
          <dt className="summary">수강 가능일</dt>
          <dd className="summary">{detailData.start_date}</dd>
          <dt className="summary">자막 포함 여부</dt>
          <dd className="summary">{detailData.subtitle}</dd>
        </dl>
      </div>
      <div className="divider" />
      <div className="classPostWrapper">
        <section className="classPost">
          <Headline3 className="postTitle">
            실제 수강생들의
            <br />
            생생한 후기
          </Headline3>
          <div className="reviewContainer">
            <div className="review">
              <Link to="/">
                <dt>클래스 후기</dt>
                <dd>340</dd>
              </Link>
            </div>
            <div className="horizontal"></div>
            <div className="review">
              <Link to="/">
                <dt>수강생 만족도</dt>
                <dd>
                  {detailData.rate}
                  <span>%</span>
                </dd>
              </Link>
            </div>
          </div>
          <div className="reviewImg">
            {reviewItems.map((el, i) => {
              return (
                <Link to="/" key={i}>
                  <span>
                    <div className={`reviewImgBox ${i !== 7 && "more"}`}>
                      <p className="moreView">더보기</p>
                    </div>
                    <picture>
                      <img alt="review" src={el.imgUrl} />
                    </picture>
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="reviewDivider" />
          <Comment />
          <div className="moreReviewWrapper">
            <span className="moreReviewBox">
              <div className="plusIcon">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                    fill="#fc3d46"
                  ></path>
                </svg>
              </div>
              <span className="boxTitle">더보기</span>
            </span>
          </div>
        </section>
      </div>
    </>
  );
}

export default ClassSummary;
