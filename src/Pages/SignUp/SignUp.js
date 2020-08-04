import React, { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Input, Checkbox, InlineError, Button, Intent } from '@class101/ui';
import SocialLogin from "./SocialLogin";
import { SIGNUP_API_URL } from "../../Config";
import "./SignUp.scss";

function SignUp() {
  const history = useHistory();

  const [agreedTermsCheckBox, setAgreedTermsCheckBox] = useState(false);
  const [agreedEventCheckBox, setAgreedEventCheckBox] = useState(false);
  const [signUpSubmit, setSignUpSubmit] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordValidation: ""
  });

  const { name, email, phoneNumber, password, passwordValidation } = userInfo;

  const handleSubmit = (e) => {
    e.preventDefault();
    const signUpInfo = {
      name,
      email,
      phoneNumber,
      password
    }

    const isUserInfoValid =
      userInfo.name &&
      userInfo.email.includes("@") &&
      !userInfo.phoneNumber.includes("-") &&
      userInfo.passwordValidation.length > 7 && userInfo.passwordValidation === userInfo.password &&
      agreedTermsCheckBox

    if (isUserInfoValid) {
      fetch(`${SIGNUP_API_URL}`, {
        method: "POST",
        body: JSON.stringify(signUpInfo),
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(res => res.json())
        .then(res => {
          if (res.access_token) {
            localStorage.setItem("user-token", res.access_token)
            alert("가입이 완료되었습니다.")
            history.push('/')
          }
        })
    }
    setSignUpSubmit(true);
  };

  const handleInput = (e) => {
    const { name, value } = e.target
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  return (
    <section className="SignUp" >
      <article>
        <div className="title">
          <h1>회원가입</h1>
        </div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="userName">
            <Input
              onChange={handleInput}
              label="이름"
              name="name"
              type="text"
              placeholder="홍길동"
              value={name}
              errorMessage={
                signUpSubmit && !name ? "이름을 입력해주세요" : ""
              }
            />
          </div>
          <div className="userEmail">
            <Input onChange={handleInput}
              label="이메일"
              name="email"
              type="email"
              placeholder="example@example.com"
              value={email}
              errorMessage={
                signUpSubmit && !email.includes("@") ? "이메일을 입력해주세요" : ""
              }
            />
          </div>
          <div className="userPhoneNumber">
            <label>휴대전화 번호</label>
            <Input onChange={handleInput}
              name="phoneNumber"
              type="text"
              placeholder="-를 제외한 휴대전화 번호를 입력해주세요"
              value={phoneNumber}
              errorMessage={
                signUpSubmit ? (phoneNumber && !phoneNumber.includes("-") ? "" : "-를 제외한 휴대전화 번호를 입력해주세요") : ""
              }
            />
          </div>
          <div className="userPassword">
            <label>비밀번호 (8자 이상)</label>
            <Input onChange={handleInput}
              name="password"
              type="password"
              placeholder="********"
              value={password}
              errorMessage={
                signUpSubmit ? (password && password.length > 7 ? "" : "패스워드를 입력해주세요") : ""
              }
            />
          </div>
          <div className="userPasswordValidation">
            <label>비밀번호 확인</label>
            <Input onChange={handleInput}
              name="passwordValidation"
              type="password"
              placeholder="********"
              value={passwordValidation}
              errorMessage={
                signUpSubmit ? (passwordValidation && passwordValidation.length > 7 && passwordValidation === password ? "" : "패스워드를 입력해주세요") : ""
              }
            />
          </div>
          <div className="agreedTermsBox">
            <Checkbox
              checked={agreedTermsCheckBox}
              onChange={() => setAgreedTermsCheckBox(!agreedTermsCheckBox)}
            >
              <span><a href="-">이용약관</a> 및 <a href="-">개인정보 처리방침</a> 동의</span>
            </Checkbox>
            {signUpSubmit ? agreedTermsCheckBox ? "" : (<InlineError intent={Intent.DANGER}>
              동의하셔야지만 다음으로 진행할 수 있습니다
            </InlineError>) : ""}

          </div>
          <div className="agreedEventBox">
            <Checkbox
              checked={agreedEventCheckBox}
              onChange={() => setAgreedEventCheckBox(!agreedEventCheckBox)}
            >
              <span>이벤트 및 할인 소식 알림 동의 (선택)</span>
            </Checkbox>
          </div>
          <Button fill className="signUpBtn" type="submit">
            회원가입 하기
          </Button>
        </form>
        <hr />
      </article>
      <SocialLogin />
    </section >
  )
}

export default withRouter(SignUp);