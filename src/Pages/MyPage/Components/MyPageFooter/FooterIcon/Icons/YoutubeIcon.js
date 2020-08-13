import React from "react";
import "./YoutubeIcon.scss";

export default function YoutubeIcon() {
  return (
    <span className="YoutubeIcon">
      <a href="https://www.youtube.com/channel/UCDJ1ZXSnt37KLaLFPFlBkqw">
        <span>
          <svg width="20" height="20" viewBox="0 0 24 20" className="iconfill">
            <path
              fill="#edeff0"
              d="M21.582 7.17a2.513 2.513 0 00-1.768-1.78C18.254 4.968 12 4.968 12 4.968s-6.254 0-7.814.42a2.513 2.513 0 00-1.768 1.78C2 8.74 2 12.014 2 12.014s0 3.276.418 4.845c.23.866.908 1.52 1.768 1.752 1.56.42 7.814.42 7.814.42s6.254 0 7.814-.42a2.476 2.476 0 001.768-1.752C22 15.29 22 12.014 22 12.014s0-3.275-.418-4.845zM9.955 14.987V9.04l5.227 2.974-5.227 2.974z"
            ></path>
          </svg>
        </span>
      </a>
    </span>
  );
}
