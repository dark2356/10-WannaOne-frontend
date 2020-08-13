import React from "react";
import { Headline3, Avatar } from "@class101/ui";
import "./Creator.scss";

function Creator({ focusTarget }) {
  return (
    <div className="creator" ref={(el) => (focusTarget.current[5] = el)}>
      <div className="creaTitle">
        <Headline3>
          크리에이터
          <br />
          <strong>묘정</strong>입니다.
        </Headline3>
        <Avatar
          size={64}
          src="https://cdn.class101.net/images/d40364d7-9671-4307-af7f-ee1dd115e4b1"
        />
      </div>
      <div className="creaInsta">
        <span>
          <a
            href="https://www.instagram.com/my.o_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="insta" src="/images/ic-instagram.png" />
            <span>my.o_</span>
          </a>
        </span>
      </div>
      <div className="creaAct">
        <div className="creaInt">
          마지막 활동
          <div className="creaInt update">11일 전 정보 업데이트</div>
        </div>
        <div className="htmlDivider" />
        <div className="creaDes">
          15살부터 미용을 했고, 저도 처음에는 고객들의 클레임을 많이 받던 시절이
          있었어요. 정규 교육 같은 게 없다 보니 가발에 연습을 많이 했어요. 더
          예쁘게, 잘하고 싶은데 유익한 강의가 많이 없어서 고생을 많이 했던 것
          같아요. 그래서 이번 클래스가 꼭 유익했으면 좋겠어요. 묘정 쌤 덕분에
          탈색, 디자인 염색에 성공했다는 후기를 꼭 듣고 싶어요. 그러면 정말
          벅차고, 눈물이 날 것 같아요. 준비 정말 열심히 했거든요 :) 클래스를
          보고 궁금한 점, 이해가 잘 안되는 부분이 있다면 언제든지 댓글로
          레시피나 노하우 달아드릴게요. 이번 클래스에 저의 모든 걸 쏟아서
          알려드릴 테니 많이 응원해 주세요!
        </div>
      </div>
      <div className="htmlDivider" />
    </div>
  );
}

export default Creator;
