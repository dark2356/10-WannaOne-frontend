import React from "react";
import "./KakaoBtn.scss";

function KakaoBtn({ color, backgroundColor }) {
  return (
    <button className="kakaoBtn" style={{ color, backgroundColor }}>
      문의하기
    </button>
  );
}

export default KakaoBtn;
