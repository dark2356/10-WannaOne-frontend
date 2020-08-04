import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, ButtonColor } from "@class101/ui";
import { LoginTitleIcons, KakaoLogin } from "./LoginIcons";
import "./LoginTitle.scss";

function LoginTitle({ setIsExpand }) {
  return (
    <div className="LoginTitle">
      <h1 className="loginHeader">
        <div className="loginHeaderBox">
          <Link to="/main">
            <LoginTitleIcons />
          </Link>
          <div className="languageSelectBox">
            <Button leftIcon={<Icon.Web />} color={ButtonColor.TRANSPARENT}>
              한국어
            </Button>
          </div>
        </div>
      </h1>
      <div className="loginTitleWrapper">
        <div className="box">
          <h2>
            준비물까지 챙겨주는
            <br />
            온라인 클래스
          </h2>
        </div>
        <KakaoLogin />
        <Button fill className="btn" onClick={() => setIsExpand(true)}>
          다른 방법으로 시작하기
        </Button>
      </div>
    </div>
  );
}

export default LoginTitle;
