import React, { useState, useEffect } from "react";
import { withRouter, Link, useHistory } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Icon,
  ButtonColor,
  Input,
  Divider,
  Toaster,
  Colors,
} from "@class101/ui";
import {
  LoginTitleIcons,
  KakaoLogin,
  NaverLogin,
  FacebookLogin,
  GoogleLogin,
  AppleLogin,
} from "./LoginIcons";
import { API_URL } from "../../Config";
import { FB_API_URL } from "../../Config";
import "./LoginInput.scss";

function LoginInput() {
  const [form, setValues] = useState({
    id: "",
    password: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const history = useHistory();

  const handleInput = ({ target: { name, value } }) => {
    setValues({
      ...form,
      [name]: value,
    });
  };

  let AppToaster;
  async function showError(props) {
    if (!AppToaster) {
      AppToaster = await Toaster.create();
    }
    AppToaster.show(props);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    axios
      .post(`${API_URL}`, {
        email: form.email,
        password: form.password,
      })
      .then((res) => {
        if (res.data.access_token) {
          sessionStorage.setItem("access_token", res.data.access_token);
          history.push("/main");
        } else {
          showError({
            backgroundColor: Colors.redError,
            message:
              "아이디 또는 비밀번호를 다시 확인하세요. 아이디 또는 비밀번호를 잘못 입력하셨습니다.",
            icon: <Icon.Alert fillColor={Colors.white} />,
          });
        }
      });
  };

  useEffect(() => {
    setFBAsyncInit();
  }, []);

  const setFBAsyncInit = () => {
    window.fbAsyncInit = () => {
      window.FB.init({
        version: "v8.0",
        appId: "645904496132731",
        xfbml: true,
        cookie: true,
      });
      window.FB.AppEvents.logPageView();
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  };

  const checkLogin = () => {
    window.FB.getLoginStatus((res) => {
      if (res.status === "connected") {
        axios.post(`${FB_API_URL}`).then((res) => {
          console.log(res);
        });
      }
    });
  };

  return (
    <div className="LoginInput">
      <h1 className="loginHeader">
        <div className="loginHeaderBox">
          <Link to="/main" className="goToMain">
            <LoginTitleIcons />
          </Link>
          <div className="languageSelectBox">
            <Button leftIcon={<Icon.Web />} color={ButtonColor.TRANSPARENT}>
              한국어
            </Button>
          </div>
        </div>
      </h1>
      <div className="loginInputWrapper">
        <div className="inputBox">
          <h2>로그인</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            label="이메일"
            placeholder="example@naver.com"
            value={form.email}
            name="email"
            fill
            errorMessage={
              isSubmit && !form.email ? "이메일을 입력해주세요." : ""
            }
            onChange={handleInput}
          />
          <Input
            label="비밀번호"
            placeholder="********"
            value={form.password}
            name="password"
            fill
            type="password"
            errorMessage={
              isSubmit && !form.password ? "비밀번호를 입력해주세요." : ""
            }
            onChange={handleInput}
          />
          <div className="signUpBox">
            <Link to="/">비밀번호를 잊으셨나요?</Link>
            <Link to="/register">회원 가입하기</Link>
          </div>
          <Button
            fill
            color={ButtonColor.ORANGE}
            type="submit"
            className="loginBtn"
          >
            로그인
          </Button>
        </form>
        <Divider className="divider" />
      </div>
      <KakaoLogin />
      <NaverLogin />
      <FacebookLogin checkLogin={checkLogin} />
      <GoogleLogin />
      <AppleLogin />
      <div className="loginFooter">
        최초 로그인 시<br />
        <a
          href="https://docs.google.com/document/d/1QfM61dBfDRfiL_7E7dbMqSpzcJO6MF0eOEpFgnpVO10"
          target="_blank"
          rel="noopener noreferrer"
        >
          이용약관
        </a>
        과{" "}
        <a
          href="https://docs.google.com/document/d/1VlL2MopA-EFJGQrqyKFc4Fkwvi0k1Wd069hIA5EScvQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          개인정보 처리방침
        </a>
        에 동의하는 것으로 간주합니다.
      </div>
    </div>
  );
}

export default withRouter(LoginInput);
