import React from "react";
import "./NaverIcon.scss";

export default function NaverIcon() {
  return (
    <span className="NaverIcon">
      <a href="https://post.naver.com/class101_official">
        <span class="footerSocialButton">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path
              fill="#edeff0"
              d="M3 3h18v18H3V3zm10.431 13.117H16.5V7.883h-3.024v4.258l-2.898-4.258H7.5v8.236h3.033v-4.266l2.898 4.265z"
            ></path>
          </svg>
        </span>
      </a>
    </span>
  );
}
