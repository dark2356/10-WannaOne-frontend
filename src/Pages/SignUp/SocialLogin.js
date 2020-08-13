
import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from '@class101/ui';
import { KAKAO_LOGIN_API_URL } from "../../Config";
import { KakaoIcon, NaverIcon, FacebookIcon, GoogoleIcon, AppleIcon } from './SocialIcons';
import "./SocialLogin.scss";

const { Kakao } = window;

function SocialLogin() {

  const history = useHistory()
  const kakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(`${KAKAO_LOGIN_API_URL}`, {
          method: "POST",
          body: JSON.stringify({
            access_token: authObj.access_token,
          }),
        })

          .then(res => res.json())
          .then(res => {
            localStorage.setItem("Kakao_token", res.access_token);
            if (res.access_token) {
              alert("Wanna One 에 오신걸 환영합니다!")
              history.push("/");
            }
          })
      },
      fail: function (err) {
        alert(JSON.stringify(err))
      },
    })
  }

  return (
    <article className="socialLogin">
      <Button fill className="btn kakao"
        onClick={kakaoLoginClickHandler}>
        <div className="kakaoIcon">
          <KakaoIcon />
        </div>
        카카오로 5초 만에 시작하기
      </Button>
      <Button fill className="btn naver">
        <div className="naverIcon">
          <NaverIcon />
        </div>
            네이버로 시작하기
          </Button>
      <Button fill className="btn facebook">
        <div className="facebookIcon">
          <FacebookIcon />
        </div>
            페이스북으로 시작하기
          </Button>
      <Button fill className="btn google">
        <div className="googleIcon">
          <GoogoleIcon />
        </div>
            구글로 시작하기
          </Button>
      <Button fill className="btn apple">
        <div className="appleIcon">
          <AppleIcon />
        </div>
        애플로 시작하기
      </Button>
    </article >
  )
}

export default SocialLogin;