import React from "react";
import { Headline3, Icon, Colors, Subtitle1 } from "@class101/ui";
import "./IntroSection.scss";

function IntroSection() {
  return (
    <>
      <div className="introSection">
        <div className="introTitle">
          <Headline3>
            <span className="blueText">초급자</span>분들을 위한
            <br />
            <span className="blueText">헤어 디자인</span>
            <br />
            클래스입니다.
          </Headline3>
        </div>
        <div className="introBody">
          <div className="introBodyTitle">
            <div className="bodyTitleBox">
              <div className="firstBox">
                <div className="calendarIcon">
                  <Icon.Canlendar size={32} fillColor={Colors.black} />
                </div>
                <div className="dueDate">1년 수강 가능</div>
                <div className="dueInt">
                  수강 기간 내 무제한 수강 가능합니다
                </div>
              </div>
            </div>
            <div className="bodyTitleBox">
              <div className="firstBox">
                <div className="iconBox">
                  <Icon.Contents size={32} fillColor={Colors.white} />
                </div>
                <div className="dueDate">37개 콘텐츠</div>
                <div className="dueInt">
                  총 37개의 강의를 수강하실 수 있습니다.
                </div>
              </div>
            </div>
          </div>
          <div>
            <Headline3 className="h3First" color="white">
              어디에서도 볼 수 없던
              <br />
              독보적인 콘텐츠
            </Headline3>
            <Subtitle1 className="divH4">
              <br />
            </Subtitle1>
            <Subtitle1 color="white">옴브레 시술의 모든 것</Subtitle1>
            <Headline3 className="divH4 designImg">
              <img
                alt="img"
                src="https://cdn.class101.net/images/2b0c7a81-ec2b-444f-91cb-5035b56d3912/autoxauto.webp"
              />
            </Headline3>
            <p className="divH4">
              옴브레 시술은 경력이 많은 디자이너분들도 어려워하는 경우가 많아요.
              단발, 세미롱, 긴 머리 세 가지 기장에 표현하기 까다로운 컬러들을
              골라 클래스를 준비했어요.
            </p>
            <Subtitle1 className="h3First" color="white">
              기본이 탄탄하면,
              <br />
              표현할 수 있는 색은 무제한
            </Subtitle1>
            <Headline3 className="divH4 designImg">
              <img
                alt="img"
                src="https://cdn.class101.net/images/5c4a0dee-956c-4bad-a351-5f92df130203/2880xauto.webp"
              />
            </Headline3>
            <Subtitle1 className="divH4">
              <br />
            </Subtitle1>
            <p className="divH4">
              옴브레 시술에 적절한 기장별 커트 노하우, 검은 모발 탈색 방법,
              마이오 헤어에서 실제로 사용하는 염색 제품들의 종류와 정확한 비율,
              백콤, 호일, 위빙의 구체적인 테크닉 등 정확한 레시피와 기술들을
              실제로 따라 할 수 있도록 꼼꼼하고 전문적으로 알려드릴 거예요.
              기본기를 탄탄하게 배워서 다양한 컬러를 시도해보세요.
            </p>
            <Subtitle1 className="divH4">
              <br />
            </Subtitle1>
            <Subtitle1 className="h3First" color="white">
              쉿, 영업 비밀.
              <br />
              10가지 컬러의 레시피 노트
            </Subtitle1>
            <Headline3 className="divH4 designImg">
              <img
                alt="img"
                src="https://cdn.class101.net/images/981b13e0-fd18-4a30-a309-7dc052b3e47f/autoxauto.webp"
              />
            </Headline3>
            <Headline3 className="divH4 designImg">
              <img
                alt="img"
                src="https://cdn.class101.net/images/09c27815-1957-4c33-a5bb-505380113de5/autoxauto.webp"
              />
            </Headline3>
            <p className="divH4">
              마이오 헤어에서 실제로 사용하는 컬러들의 레시피 노트를 공개합니다.
              왜 내가 상상한 대로 색이 잘 안 나올까? 고민하시는 분들이 많을 것
              같아요. 같은 컬러도 모발의 탈색 정도, 모질에 따라 다르게 표현이
              되는데 그런 부분들을 고려해서 연출할 수 있도록 레시피를 정리해서
              공개합니다.
            </p>
            <Subtitle1 className="h3First" color="white">
              유튜브에는 없어요
            </Subtitle1>
            <Headline3 className="divH4 designImg">
              <img
                alt="img"
                src="https://cdn.class101.net/images/9fb47964-a822-4f75-abff-b938d690ee8c/2880xauto.webp"
              />
            </Headline3>
            <p className="divH4">
              유튜브에 토닝이나 옴브레 시술의 방법에 대해서 검색을 해보면, 시술
              과정을 일부 다루더라도 가장 중요한 핵심 정보들은 빠져있어요. 초보
              디자이너분들, 전문적인 염색 테크닉을 배우고 싶은 분들, 한국인의
              모발에 맞는 염색 레시피를 찾는 디자이너분들이 실제로 고객님께
              해드렸을 때 만족스러운 후기를 얻을 수 있을 만큼 실질적인 정보와
              노하우를 담았어요.
            </p>
            <Subtitle1 className="h3First" color="white">
              15년 경력 묘정의 실전 고객 응대 노하우
            </Subtitle1>
            <Headline3 className="divH4 designImg">
              <img
                alt="img"
                src="https://cdn.class101.net/images/ecb6f50c-be2b-4ba4-bba5-8cad30c6bfef/autoxauto.webp"
              />
            </Headline3>
            <p className="divH4">
              고객에게 어울리는 헤어스타일 상담, 다양한 상황에서의 응대 노하우,
              샵 홍보와 SNS 관리, 슬럼프 극복까지. 미용 테크닉만큼 중요하지만
              물어볼 곳 없었던 속 깊은 고민들을 나눠보세요. 미리 주셨던 다양한
              질문들에 대한 Q&A를 준비했구요, 프리챕터를 통해 추가 질문을 주시면
              정리해서 답변을 드릴 예정입니다.
            </p>
            <Headline3 className="h3First" color="white">
              영상의 한계를
              <br />
              뛰어넘는 생생한 경험
            </Headline3>
            <Subtitle1 className="h3First" color="white">
              서울, 부산, 대전
              <br />
              언제 어디에서나
            </Subtitle1>
            <Headline3 className="divH4 designImg">
              <img
                alt="img"
                src="https://cdn.class101.net/images/b746f5a9-f38b-4d73-9d1e-8b14f84d76e8/autoxauto.webp"
              />
            </Headline3>
            <p className="divH4">
              묘정쌤 수업 듣고 싶은데 서울까지 찾아오기 힘드셨던 분, 코로나
              때문에 여러 가지 교육 기회에서 단절되신 분들, 공부는 하고 싶은데
              시간적으로 여유가 없다고 느끼셨던 분들 모두 함께할 수 있어요.
              옆에서 배우는 것처럼 다양한 앵글로 답답한 부분 없이 보여드릴게요.
            </p>
            <Subtitle1 className="h3First" color="white">
              묘정 원장님의 댓글 피드백
            </Subtitle1>
            <Headline3 className="divH4 designImg">
              <img
                alt="img"
                src="https://cdn.class101.net/images/0fc19225-0e4c-4ff8-9328-0ec614b03ade/autoxauto.webp"
              />
            </Headline3>
            <p className="divH4">
              클래스를 수강하며 궁금한 점, 이해가 가지 않는 부분이 있다면 댓글을
              통해 질문할 수 있어요. 묘정 원장님이 정성을 다해 답변을 달아주실
              거에요. 클래스를 수강하고 실제로 기술을 사용했을 때 생기는
              어려움들을 끝까지 책임지고 도와줄게요.
            </p>
          </div>
          <Headline3>
            <br />
          </Headline3>
          <Headline3>
            <br />
          </Headline3>
        </div>
      </div>
      <div className="htmlDivider" />
    </>
  );
}

export default IntroSection;
