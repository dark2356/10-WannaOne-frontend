import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Main from "./Pages/Signature/Main/Main";
import DetailPage from "./Pages/Signature/Detail/DetailPage";
import SignatureSideBar from "./Components/SignatureSideBar/SignatureSideBar";
import MyPage from "./Pages/MyPage/MyPage";
import Streaming from "./Pages/Streaming/Streaming";
import SignatureHeadCover from "./Pages/Signature/Detail/SignatureHeadCover";
function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/" component={Main} />
        <Route exact path="/detail" component={DetailPage} />
        <Route exact path="/signature" component={SignatureSideBar} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/classes" component={Streaming} />
        <Route exact path="/signature/detail" component={SignatureHeadCover} />
      </Switch>
    </Router>
  );
}

export default Routes;
