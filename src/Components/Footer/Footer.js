import React from "react";
import FooterIcon from "./FooterIcon/FooterIcon";
import KakaoBtn from "./KakaoBtn/KakaoBtn";
import "./Footer.scss";

function Footer({ color, background }) {
  return (
    <footer className="footer" style={{ background }}>
      <div className="contentsContainer">
        <div className="footerTitle">
          <div className="menuClassContainer">
            <div className="footerText boldText" style={{ color }}>
              클래스101
            </div>
            <div className="footerText">홈</div>
            <div className="footerText">채용</div>
          </div>
          <div className="menuCreaterContainer">
            <div className="footerText boldText" style={{ color }}>
              크리에이터
            </div>
            <div className="footerText">지원하기</div>
            <div className="footerText">영상 제작 파트너 지원하기</div>
          </div>
          <div className="serviceCenterContainer">
            <div className="boldText" style={{ color }}>
              고객센터
              <span className="serviceCenterTime">
                오전 10시 ~ 오후 6시 (주말, 공휴일 제외)
              </span>
            </div>
            <KakaoBtn color="white" background="#1b1c1d" />
          </div>
        </div>
        <div className="footerInfoContainer">
          <div className="footerAgreementBox">
            <div className="footerInc">Class inc.</div>
            <div className="AgreementContainer">
              <div className="AgreementLink">이용약관</div>
              <div className="AgreementLink">개인 정보 처리 방침</div>
              <div className="AgreementLink">사업자 정보 확인</div>
              <div className="AgreementLink">제휴/ 협력 문의</div>
              <div className="AgreementLink">단체 기업 문의</div>
              <div className="AgreementLink">정기구독서비스 이용약관</div>
            </div>
          </div>
          <div className="footerInfoText">
            (주)클래스101 | 대표 고지연 | 서울특별시 중구 통일로 10 세브란스빌딩
            18층 | 사업자등록번호 : 457-81-00277 | 통신판매업신고 :
            2019-서울중구-0087 | 주식회사 클래스101은 전자상거래 등에서의
            소비자보호에 관한 법률에 따른 통신판매업과 통신판매중개업을 영위하고
            있습니다. 주식회사 클래스101은 통신판매중개자로서 중개하는
            통신판매에 관하여서는 통신판매의 당사자가 아니므로 어떠한 책임도
            부담하지 아니합니다.
          </div>
        </div>
        <FooterIcon />
      </div>
    </footer>
  );
}

export default Footer;
