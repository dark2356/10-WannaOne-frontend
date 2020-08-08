import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./ClassAbout.scss";

function ClassAbout() {
  return (
    <section className="signatureAboutContainer">
      <h1 className="about">ABOUT</h1>
      <div className="content">
        <div className="StartContainer">
          <h1 className="aboutTitle">
            <div className="aboutSection">CLASS101</div>
            SIGNATURE
          </h1>
          <div class="aboutSectionSubTitle">
            당신의 꿈이 더이상 꿈으로 머무르지 않도록,
            <br /> 각 분야 최고의 크리에이터들과 시작해보세요.
          </div>
        </div>
        <div className="curriculumContainer">
          <h1 className="curriculum">
            직접 준비한 <br /> 커리큘럼과 미션
          </h1>
          <h4 className="SignatureSubTitle">
            분야 최고의 크리에이터가 고민한 커리큘럼과
            <br />
            미션을 경험해보세요
          </h4>
        </div>
        <div className="aboutSectionTextContainer">
          <div className="borderTop">
            <h1 className="aboutSectionTextHaeder">
              역시나 준비물까지 <br />
              보내드릴게요
            </h1>
            <div className="aboutSectionText">
              시작에 필요한 모든 준비물을 간퍈하게
              <br />
              받아보세요.
            </div>
          </div>
        </div>
        <div className="aboutSectionTextContainer">
          <div className="borderTop">
            <h1 className="aboutSectionTextHaeder">
              최고에게 답을 묻다. <br />
              피드백 챕터
            </h1>
            <div className="aboutSectionText">
              자주 묻는 질문이나 인기가 많은 댓글을 <br />
              피드백해주는 보너스 챕터가 추후 공개됩니다. <br />
              피드백 챕터에서 최고의 답변을 얻어가세요!
            </div>
          </div>
        </div>
        <div className="aboutSectionTextContainer">
          <div className="borderTop">
            <h1 className="aboutSectionTextHaeder">
              모든 디바이스 <br />
              무제한 재생
            </h1>
            <div className="aboutSectionText">
              한 번 수강신청으로, 모든 디바이스에서 무제한
              <br />
              재생이 가능합니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withRouter(ClassAbout);
