import React from "react";
import { Colors, Icon } from "@class101/ui";
import "./ButtonIcon/ButtonIcon";
import "./SlideButton.scss";
import ButtonIcon from "./ButtonIcon/ButtonIcon";

export default function SlideButton() {
  return (
    <>
      <div className="btnFlexBox">
        <button className="teserButton">
          <div className="btnFlexBox">
            <Icon.Play fillColor={Colors.white} />
            <span>티저 미리보기</span>
          </div>
        </button>
        <button className="teserButton LearnButton">
          <div className="btnFlexBox">
            <span>더 알아보기</span>
            <ButtonIcon />
          </div>
        </button>
      </div>
    </>
  );
}
