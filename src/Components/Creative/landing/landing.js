import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Creative.scss";

function landing() {
  return (
    <section className="landing">
      <section className="landingContainer">
        <div className="landingTextContainer">
          <div className="landingText">
            <div className=""></div>
            <div></div>
          </div>
        </div>
        <div className="landingImgContainer">
          {/* <img className="landingImg" src="/images/ClassBox.png" /> */}
        </div>
      </section>
    </section>
  );
}

export default withRouter(landing);
