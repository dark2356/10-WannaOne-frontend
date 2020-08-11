import React from "react";
import YoutubeIcon from "./Icons/YoutubeIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import FacebookIcon from "./Icons/FacebookIcon";
import NaverIcon from "./Icons/NaverIcon";
import MobileIcon from "./Icons/MobileIcon";
import "./FooterIcon.scss";

function FooterIcon() {
  return (
    <div className="iconFlexBox">
      <div className="iconContainer">
        <YoutubeIcon />
        <InstagramIcon />
        <FacebookIcon />
        <NaverIcon />
        <MobileIcon />
      </div>
    </div>
  );
}
export default FooterIcon;
