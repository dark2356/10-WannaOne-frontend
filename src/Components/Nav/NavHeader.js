import React from "react";
import { Icon } from "@class101/ui";

import "./NavHeader.scss";

function NavHaeder({ color, backgroundColor }) {
  return (
    <div className="NavHeader" style={{ backgroundColor }}>
      <div className="MainNav" style={{ color }}>
        <Icon.Menu style={{ color }} className="navMenu" />
        <span className="navText">전체</span>
        <span className="navText">크리에이티브</span>
        <span className="navText">커리어</span>
        <span className="navText signature">시그니쳐</span>
        <span className="navText Libre">리브레</span>
        <span className="navText">스토어</span>
      </div>
    </div>
  );
}

export default NavHaeder;
