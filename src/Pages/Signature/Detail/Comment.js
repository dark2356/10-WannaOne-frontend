import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Comment.scss";

function Comment() {
  const [commentData, setCommentData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/data/commentdata.json").then((res) => {
      setCommentData(res.data.data);
    });
  }, []);

  return (
    <>
      {commentData.length &&
        commentData.map((el, i) => {
          return (
            <div className="reviewComment" key={i}>
              <section className="userProfile">
                <div className="profileImgBox">
                  <span className="profileImg">
                    <picture>
                      <img alt="profile" src="/images/ic-unknown.png" />
                    </picture>
                  </span>
                  <div className="thumbUp">
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 10.68c0-.691.503-1.251 1.135-1.251h2.273V22H3.135C2.508 22 2 21.427 2 20.749v-10.07zM13.361 8.17h6.367c1.255 0 2.272 1.126 2.272 2.515 0 .15-.012.301-.037.45l-1.615 9.832C20.25 21.566 19.779 22 19.23 22H7.68V9.429L11.09 0c1.703 0 2.84 1.257 2.84 3.143 0 1.257-.19 2.933-.569 5.028z"
                        fill="#FFF"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="profileInfoBox">
                  <strong>{el.name}</strong>
                  <div className="commentDate">{el.created_at}</div>
                </div>
              </section>
              <div className="comment">{el.comment}</div>
            </div>
          );
        })}
    </>
  );
}

export default Comment;
