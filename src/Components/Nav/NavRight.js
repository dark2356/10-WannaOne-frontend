import React, { useState } from "react";
import { withRouter, Link, useHistory } from "react-router-dom";
import { Icon, Colors } from "@class101/ui";
import NavLogo from "./NavLogo/NavLogo";
import "./NavRight.scss";

function Nav({ color }) {
  const [isProfile, isSetProfileState] = useState(false);
  const history = useHistory();

  const logoutHandler = (e) => {
    localStorage.removeItem("Kakao_token");
    localStorage.removeItem("kakao_02968fb885dd1157ed15437185cb6582");
    localStorage.removeItem("access_token");
    history.push("/login");
  };

  return (
    <div className="haederRight">
      {!localStorage.getItem("access_token") &&
      !localStorage.getItem("Kakao_token") ? (
        <>
          <div className="navigationLink" style={{ color }}>
            크리에이터 지원
          </div>
          <Link to="/login">
            <div className="navigationLink" style={{ color }}>
              로그인
            </div>
          </Link>
        </>
      ) : (
        <>
          <div className="navigationLink" style={{ color }}>
            크리에이터 지원
          </div>
          <div className="navigationLink" style={{ color }}>
            주문 및 배송
          </div>
          <div className="navigationLink" style={{ color }}>
            내 쿠폰
          </div>
          <div className="navigationLink" style={{ color }}>
            내 클래스
          </div>
          <div
            className="profileBtnContainer"
            onClick={() => isSetProfileState(!isProfile)}
          >
            <img
              src="https://ssl.pstatic.net/static/pwe/address/img_profile.png"
              className="profileImage"
            />
            <Icon.ChevronDown
              fillColor={color}
              className={!isProfile ? "arrowBtn" : "arrowBtn arrowTransform"}
            />
          </div>
          <div className={isProfile ? "profileModalContainer" : "none"}>
            <div className="myProfileContainer">
              <span>
                <img
                  src="https://ssl.pstatic.net/static/pwe/address/img_profile.png"
                  className="profileImage"
                />
              </span>
              <div>
                <div className="profileName">이윤식</div>
                <span className="profileMypage">
                  <Link to="/mypage">
                    <span>마이페이지</span>
                  </Link>
                </span>
              </div>
            </div>
            <div className="logoutContainer">
              <div className="logout" onClick={logoutHandler}>
                로그아웃
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default withRouter(Nav);
