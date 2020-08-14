import React, { useState, useEffect } from "react";
import NavLogo from "./NavLogo/NavLogo";
import NavRight from "../../Components/Nav/NavRight";
import { withRouter } from "react-router-dom";
import { Icon } from "@class101/ui";
import { MY_PAGE_PROFILE_API_URL } from '../../Config';
import "./Nav.scss";

function Nav({ color, background, backgroundColor, LogoColor, NavRightColor }) {
  const [isSeachActive, isSetSearchState] = useState(false);
  const [userInfo, setUserInfo] = useState({})

  const getUserInfo = () => {
    fetch(`${MY_PAGE_PROFILE_API_URL}`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("access_token")
      }
    })
      .then(res => res.json())
      .then(res => {
        setUserInfo(res.data)
      })
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="nav" style={{ background }}>
      <div className="mainHaeder">
        <div className="haederLeft">
          <div className="mainLogo" style={{ color }}>
            <NavLogo className="mainLogo" color={LogoColor} />
          </div>
          <div className="searchController" style={{ backgroundColor }}>
            <input
              type="search"
              size="sm"
              placeholder="배우고 싶은 것이 있나요?"
              style={{ backgroundColor, color }}
              className={`mainSearch 
                ${isSeachActive ? "searchActive" : "searchdeactivate"}`}
              onFocus={() => isSetSearchState(!isSeachActive)}
            />
            <Icon.Search fillColor={color} className="searchIcon" />
          </div>
        </div>
        <NavRight color={NavRightColor} userInfo={userInfo} />
      </div>
    </div>
  );
}
export default withRouter(Nav);
