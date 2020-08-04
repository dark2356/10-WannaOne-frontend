import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import LoginTitle from "./LoginTitle";
import LoginInput from "./LoginInput";
import "./Login.scss";

function Login() {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <div className="Login">
      {isExpand ? <LoginInput /> : <LoginTitle setIsExpand={setIsExpand} />}
      <div className="loginImgBox" />
    </div>
  );
}

export default withRouter(Login);
