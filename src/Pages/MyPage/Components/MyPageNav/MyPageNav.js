import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Colors } from "@class101/ui";
import "./MyPageNav.scss";

function MyPageNav({ color, background, backgroundColor }) {
  const [isSeachActive, isSetSearchState] = useState(false);
  return (
    <div className="MyPageNav" style={{ background }}>
      <div className="mainHaeder">
        <div className="haederLeft">
          <div className="mainLogo" style={{ color }}>
            CLASS1O1
          </div>
          <div className="searchController" style={{ backgroundColor }}>
            <input
              type="search"
              size="sm"
              placeholder="배우고 싶은 것이 있나요?"
              style={{ backgroundColor }}
              className={`mainSearch 
                ${isSeachActive ? "searchActive" : "searchdeactivate"}`}
              onFocus={() => isSetSearchState(!isSeachActive)}
            />
            <Icon.Search fillColor={color} className="searchIcon" />
          </div>
        </div>
        <div className="haederRight">
          <a className="navigationLink" style={{ color }}>
            크리에이터 지원
          </a>
          <a className="navigationLogin" style={{ color }}>
            <Link to="/login">로그인</Link>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyPageNav;
