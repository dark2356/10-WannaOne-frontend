import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import {
  Headline3,
  Icon,
  Button,
  ButtonSize,
  ButtonColor,
  Subtitle1,
  Checkbox,
  AnchorButton,
} from "@class101/ui";
import Nav from "../../Components/Nav/Nav";
import FloatingBtn from "../../Components/Nav/FloatingBtn";

function Streaming() {
  const [isChecked, setIsChecked] = useState(false);
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  return (
    <>
      <Nav />
      <main>
        <StrmContainer>
          <StrmBox>
            <VideoBox>
              <TitleBox>
                <Title>
                  <Header>
                    <HeaderTitle>묘정의 옴브레 염색 클래스</HeaderTitle>
                  </Header>
                  <HeaderBigTitleBox>
                    <HeaderBigTitle>
                      <Headline3>묘정에게 무엇이든 물어보세요 (마감)</Headline3>
                      <Icon.ChevronDown size={24} />
                    </HeaderBigTitle>
                    <IconBox>
                      <Button
                        leftIcon={<Icon.Contents />}
                        size={ButtonSize.SMALL}
                        color={ButtonColor.TRANSPARENT}
                      >
                        앱으로 보기
                      </Button>
                      <Button size={ButtonSize.SMALL}>
                        <SvgBox>
                          <svg
                            width="18"
                            height="18"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M10.5 4L12 5.5 6.83 11H21v2H6.83L12 18.5 10.5 20 3 12l7.5-8z"
                              fill="#1b1c1d"
                            ></path>
                          </svg>
                        </SvgBox>
                        이전 콘텐츠
                      </Button>
                      <Button size={ButtonSize.SMALL}>
                        다음 콘텐츠
                        <SvgBox>
                          <svg
                            width="18"
                            height="18"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M13.5 4L12 5.5l5.17 5.5H3v2h14.17L12 18.5l1.5 1.5 7.5-8-7.5-8z"
                              fill="#1b1c1d"
                            ></path>
                          </svg>
                        </SvgBox>
                      </Button>
                      <Button size={ButtonSize.SMALL} className="threeDots">
                        <Icon.MoreVertical />
                      </Button>
                    </IconBox>
                  </HeaderBigTitleBox>
                </Title>
              </TitleBox>
              <Video>
                <video
                  src="./images/test.mov"
                  width="100%"
                  height="100%"
                  controls
                  autoplay
                ></video>
              </Video>
              <CommentBox>
                <CommentTitle>
                  <CommentCountBox>
                    <Subtitle1 className="commentCount">댓글</Subtitle1>
                    <CommentCount>8개</CommentCount>
                  </CommentCountBox>
                </CommentTitle>
                <StyledDivider />
                <MyComment>
                  <Checkbox
                    className="myComment"
                    size={24}
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  >
                    내 댓글보기
                  </Checkbox>
                  <Filter>
                    <Button
                      color={ButtonColor.TRANSPARENT}
                      size={12}
                      onClick={() => setIsBtnClicked(!isBtnClicked)}
                    >
                      최신순
                    </Button>
                    <Button
                      color={ButtonColor.TRANSPARENT}
                      size={12}
                      onClick={() => setIsBtnClicked(!isBtnClicked)}
                    >
                      인기순
                    </Button>
                  </Filter>
                </MyComment>
                <CommentInput>
                  <CommentSection>
                    <CommentContainer>
                      <button type="button">
                        <span>
                          <label>
                            <input
                              type="file"
                              accept="image/*,audio/*,video/mp4,video/x-m4v,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv"
                            />
                            <img
                              alt="add"
                              src="/images/ic-new-file-input-button.png"
                            />
                          </label>
                        </span>
                      </button>
                      <textarea
                        name="content"
                        placeholder="댓글을 입력해주세요."
                      ></textarea>
                    </CommentContainer>
                    <ButtonGroup>
                      <Button
                        leftIcon={<Icon.Send2 />}
                        color={ButtonColor.TRANSPARENT}
                        size={24}
                        disabled
                      />
                    </ButtonGroup>
                  </CommentSection>
                </CommentInput>
                <EmptyComment>
                  <img alt="empty" src="/images/im-reply-empty.png" />
                  <Subtitle1>작성된 댓글이 없어요.</Subtitle1>
                </EmptyComment>
              </CommentBox>
            </VideoBox>
            <IntroBox>
              <TicketBox>
                <TicketContainer>
                  <TicketImg>
                    <picture>
                      <img
                        alt="ticket"
                        src="https://cdn.class101.net/images/53b02c0b-5ffa-4719-aea6-d568b27dd341/autoxauto.webp"
                      />
                    </picture>
                  </TicketImg>
                  <TicketTitleBox>
                    <TicketTitle>묘정의 옴브레 염색 클래스</TicketTitle>
                    <AnchorButton
                      to="/detail"
                      color={ButtonColor.ORANGE}
                      size={ButtonSize.SMALL}
                    >
                      클래스 둘러보기
                    </AnchorButton>
                  </TicketTitleBox>
                </TicketContainer>
              </TicketBox>
              <ClassNoteBox>
                <a
                  href="https://class101.net/events/5dfb62b8904d910d9f6e17e7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="refundBox">
                    클래스 완주하고
                    <br />
                    <span className="refundBox bold">5만원 환급 받으세요!</span>
                  </span>
                  <span className="refundDetail">자세히보기</span>
                  <img alt="refund" src="/images/refund.png" />
                </a>
              </ClassNoteBox>
              <Subtitle1 className="noteTitle">수업 노트</Subtitle1>
              <ClassNote>
                <div>
                  <span>
                    <p>띵동~ 묘정쌤으로부터 라이브 방송 초대가 왔어요! 📬</p>
                    <p>
                      <br />
                    </p>
                    <p>
                      평소 묘정쌤에게 <strong>궁금했던 점들을 댓글</strong>로
                      남겨주세요!
                    </p>
                    <p>클래스를 신청해 주신 클래스메이트분들에 한해</p>
                    <p>
                      묘정쌤이 무엇이든 시원~하게 대답해드리는{" "}
                      <strong>시크릿 라이브 방송</strong>이 진행될 예정이에요 😊
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <strong>
                        2020년 8월 3일 오후 7시 클래스101 유튜브 채널
                      </strong>
                      에서 만나요!
                    </p>
                    <p>채널 링크는 라이브 방송 10분 전 클래스 메이트 분들께</p>
                    <p>휴대폰으로 전달 드릴게요 🙌 💕</p>
                    <p>
                      <br />
                    </p>
                    <p>묘정쌤과 직접 소통할 수 있는 기회!</p>
                    <p>
                      <strong>댓글로 궁금한 점들을 무엇이든! 마구마구</strong>{" "}
                      올려주세요! 👍 ✨
                    </p>
                  </span>
                </div>
              </ClassNote>
            </IntroBox>
          </StrmBox>
        </StrmContainer>
      </main>
      <FloatingBtn />
    </>
  );
}

export default withRouter(Streaming);

const StrmContainer = styled.div`
  user-select: none;
  border-top: 1px solid rgb(237, 239, 240);
  background-color: rgb(255, 255, 255);
`;

const StrmBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
`;

const VideoBox = styled.div`
  position: relative;
  padding: 32px;
  width: 66.6667%;
  height: calc(100vh - 74px);
  min-height: 1px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const IntroBox = styled(VideoBox)`
  width: 33.3333%;
  min-height: 1px;
  border-left: 1px solid rgb(237, 239, 240);

  .noteTitle {
    margin-bottom: 16px;
  }
`;

const TitleBox = styled(StrmBox)`
  position: relative;
  margin-left: -12px;
  margin-right: -12px;
  margin-bottom: 24px;
`;

const Title = styled.div`
  position: relative;
  padding: 0 12px;
  width: 100%;
  min-height: 1px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.15px;
  color: rgb(133, 138, 141);
`;

const HeaderTitle = styled.span`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.15px;
  color: rgb(27, 28, 29);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const HeaderBigTitleBox = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderBigTitle = styled(HeaderBigTitleBox)`
  display: flex;
  flex: 1 1 0%;
  min-width: 0;
  cursor: pointer;

  h3 {
    margin-right: 8px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 34px;
    color: rgb(27, 28, 29);
  }
`;

const IconBox = styled.div`
  flex: 0 1 auto;

  button {
    &:not(:last-child) {
      margin-right: 8px;
    }

    &:hover {
      background-color: rgb(221, 221, 225);
    }

    &.threeDots {
      width: 32px;
      height: 32px;
    }
  }
`;

const SvgBox = styled.div`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  margin-right: 4px;
  font-size: 0px;
`;

const Video = styled.div`
  width: 100%;
  height: auto;
`;

const CommentBox = styled.div`
  margin-top: 20px;
`;

const CommentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentCountBox = styled.div`
  display: flex;
  align-items: center;

  .commentCount {
    display: flex;
    align-items: center;
  }
`;

const CommentCount = styled(Header)`
  padding-left: 8px;
  margin-bottom: 0;
  color: rgb(133, 138, 141);
`;

const StyledDivider = styled.hr`
  margin: 16px 0;
  height: 1px;
  color: rgb(237, 239, 240);
  border-bottom: 1px solid rgba(16, 22, 26, 0.15);
`;

const MyComment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  .myComment {
    span {
      color: rgb(133, 138, 141);
    }
  }
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  button {
    &:first-child {
      padding-right: 8px;
    }

    span {
      font-size: 14px;
      font-weight: bold;
      line-height: 20px;
      letter-spacing: -0.15px;
      color: rgb(133, 138, 141);
    }
  }
`;

const CommentInput = styled.form`
  display: block;
  margin-bottom: 24px;
  padding: 0px 10px;
  border: 1px solid rgb(237, 239, 240);
  border-radius: 25px;
  background: rgb(255, 255, 255);
`;

const CommentSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 48px;
  width: 100%;
`;

const CommentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1 1 0%;

  button {
    display: inline-flex;
    vertical-align: middle;
    color: rgb(168, 174, 179);
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.2px;
    background: none;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0 0 auto;

      label {
        display: inline-block;
        margin-right: 16px;
        padding: 10px 0;
        cursor: pointer;

        input {
          display: none;
        }

        img {
          width: 28px;
          height: 28px;
          vertical-align: middle;
          border-style: none;
        }
      }
    }

    &:focus {
      outline: none;
    }
  }

  textarea {
    width: 100%;
    height: 48px;
    min-height: 36px;
    padding: 14px 10px 14px 8px;
    font-size: 14px;
    font-weight: normal;
    color: rgb(27, 28, 29);
    line-height: 20px;
    letter-spacing: -0.15px;
    background-color: transparent;
    outline: 0px;
    border: none;
    resize: none;
    overflow: hidden;
    overflow-wrap: break-word;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }
`;

const ButtonGroup = styled.div`
  display: inline-flex;
  align-items: center;
  flex: 0 1 0%;
  padding: 12px 3px 12px 0px;
`;

const EmptyComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;

  img {
    vertical-align: middle;
  }

  h4 {
    padding-top: 16px;
    color: rgb(133, 138, 141);
  }
`;

const TicketBox = styled.div`
  margin-bottom: 32px;
`;

const TicketContainer = styled.div`
  display: flex;
  padding: 24px;
  background-color: rgb(248, 248, 249);
`;

const TicketImg = styled.span`
  display: block;
  margin-right: 16px;
  flex: 0 0 auto;
  width: 112px;
  height: 84px;
  font-size: 0;

  picture {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const TicketTitleBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const TicketTitle = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: rgb(27, 28, 29);
  line-height: 20px;
  letter-spacing: -0.15px;
`;

const ClassNoteBox = styled.div`
  margin-bottom: 48px;

  a {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: rgb(248, 248, 249);
    border-radius: 2px;
    padding: 22px 24px;
    overflow: hidden;

    .refundBox {
      font-size: 20px;
      font-weight: 300;
      letter-spacing: -0.3px;
      line-height: 28px;
      color: rgb(27, 28, 29);
      z-index: 10;

      &.bold {
        font-weight: bold;
      }
    }

    .refundDetail {
      margin: 20px 0px 0px;
      font-size: 11px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: normal;
      color: rgb(168, 174, 179);
      text-decoration: underline;
    }

    img {
      position: absolute;
      right: -36px;
      bottom: -20%;
      height: 110%;
    }
  }
`;

const ClassNote = styled.div`
  background-color: rgb(255, 255, 255);

  span:last-child {
    margin-bottom: 0px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.3px;
    color: rgb(27, 28, 29);
    padding: 4px 0px;

    &:first-of-type {
      padding-top: 0px;
    }
  }
`;
