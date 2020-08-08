import React from "react";
import "./ClassInfo.scss";

function ClassInfo() {
  return (
    <section className="ClassInfo">
      <section className="SignaturePlusConatiner">
        <img
          src="/images/img-signature-plus.png"
          className="img-signature-plus"
        />
        <div className="SignatureDreamPlusConatiner">
          <div className="SignatureText">Signnature</div>
          <p className="PlusTitle">내 꿈에 가치를 더하다</p>
          <div className="SignatureDreamPlusText">
            총 500개 이상의 콘텐츠
            <br />
            매월 새롭게 추가되는 클래스까지
            <br />
            1년 무제한 수강!
          </div>
          <div className="signatureMamberContainer">
            <button className="signatureMamber">멤버쉽 더 알아보기</button>
          </div>
        </div>
      </section>
      <section className="previewBannerContainer">
        <h3 className="previewBannerTitle">오픈 예정 시그니처 클래스</h3>
        <div className="previewBannerFlexBox">
          <div>
            <img src="/images/primary.webp" className="primary" />
            <p className="previewBannerText">프라이머리의 프로듀싱 클래스</p>
          </div>
          <div>
            <img src="/images/Profiling.webp" className="Profiling" />
            <p className="previewBannerText">표창원의 프로파일링 클래스</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ClassInfo;
