import React from "react";
import { Link } from "react-router-dom";
import { Headline3, Badge, Icon, Colors } from "@class101/ui";
import "./Curriculum.scss";

function Curriculum({ data }) {
  return (
    <>
      {data.length &&
        data.map((el, i) => {
          return (
            <div className="curiList" key={i}>
              <div className="curiContent">
                <div className="curiContBox">
                  <div className="curiImgBox">
                    <span>
                      <picture>
                        <img alt="curiImg" src={el.image} />
                      </picture>
                    </span>
                  </div>
                </div>
                <div className="curiTitleBox">
                  <Headline3>
                    <div className="curiListTitle">{el.number}</div>
                    <div className="curiListTitle int">{el.title}</div>
                  </Headline3>
                  {el.content[1].map((el, i) => {
                    return (
                      <Link
                        to={{
                          pathname: "/classes",
                          state: {
                            data,
                          },
                        }}
                        key={i}
                      >
                        <div className="curiLink">
                          <span className="curiIcon">
                            <Badge pill>{i + 1}</Badge>
                          </span>
                          <div className="missionItem">{el}</div>
                          <Badge icon={<Icon.Play fillColor={Colors.white} />}>
                            무료 공개
                          </Badge>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Curriculum;
