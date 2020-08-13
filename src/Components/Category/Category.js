import React, { useState, useEffect } from "react";
import "./Category.scss";
import { Icon, Colors } from "@class101/ui";
import { withRouter, Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

function Category(props) {
  console.log(props);
  const [data, setdata] = useState({});
  const [Cate, setCate] = useState([]);

  return (
    <>
      <Nav />
      <section className="CategoryViewContainer">
        <div className="CategoryView">
          <div className="CategoryTitleContainer">
            <Link to="/">
              <svg width="24" height="24" fill="#CDD1D4" viewBox="0 0 24 24">
                <path
                  d="M10.5 4L12 5.5 6.83 11H21v2H6.83L12 18.5 10.5 20 3 12l7.5-8z"
                  fill="#1b1c1d"
                ></path>
              </svg>
            </Link>
            <span className="categoryTitle">전체 카테고리</span>
          </div>
          <div className="CategoryTextContainer">
            <div className="creativeCategory">
              <strong className="creativeCategoryTitle">
                <a>크리에이티브</a>
                <Icon.ChevronRight size={16} />
              </strong>
              <div
                onClick={() => props.history.push("/CategoryClassCardList/1")}
              >
                미술
              </div>
              <div
                onClick={() => props.history.push("/CategoryClassCardList/2")}
              >
                공예
              </div>
              <div
                onClick={() => props.history.push("/CategoryClassCardList/3")}
              >
                디지털 드로잉
              </div>
              <div
                onClick={() => props.history.push("/CategoryClassCardList/4")}
              >
                라이프 스타일
              </div>
              <div>디자인/개발</div>
              <div>사진/영상</div>
              <div>요리/음료</div>
              <div>음악</div>
              <div>운동</div>
            </div>
            <div className="creativeCategory">
              <strong className="creativeCategoryTitle">
                <a>커리어</a>
                <Icon.ChevronRight size={16} />
              </strong>
              <div>부업/창업재태크</div>
              <div>자기계발</div>
              <div>직물</div>
            </div>
            <div className="creativeCategory">
              <strong className="creativeCategoryTitle">
                <a>시그니처</a>
                <Icon.ChevronRight size={16} />
              </strong>
            </div>
            <div className="creativeCategory">
              <strong className="creativeCategoryTitle">
                <a>스토어</a>
                <Icon.ChevronRight size={16} />
              </strong>
              <div>EASY DIY</div>
              <div>굿즈</div>
              <div>미술재료</div>
              <div>공예재료</div>
              <div>디지털기기/ACC</div>
              <div>악기/음악</div>
              <div>헬스/뷰티/ACC</div>
              <div>인테리어/소품</div>
              <div>푸드/키친</div>
              <div>문구/도서</div>
            </div>

            <div className="creativeCategory">
              <strong className="creativeCategoryTitle">
                <a>둘러보기</a>
                <Icon.ChevronRight size={16} />
              </strong>
              <div>이벤트</div>
              <div>얼리버드</div>
              <div>베스트</div>
              <div>오픈 예정</div>
              <div>바로 수강</div>
              <div>할인 알림창</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default withRouter(Category);
