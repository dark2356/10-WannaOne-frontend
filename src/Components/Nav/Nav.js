import React, { useState } from "react";
import NavLogo from "./NavLogo/NavLogo";
import Login from "../../Pages/Login/Login";
import NavRight from "../../Components/Nav/NavRight";
import { withRouter, Link, useHistory } from "react-router-dom";
import { Icon, Colors } from "@class101/ui";
import "./Nav.scss";

function Nav({ color, background, backgroundColor, LogoColor, NavRightColor }) {
  const [isSeachActive, isSetSearchState] = useState(false);
  const [isProfile, isSetProfileState] = useState(false);
  const history = useHistory();

  const logoutHandler = (e) => {
    localStorage.removeItem("Kakao_token");
    localStorage.removeItem("kakao_02968fb885dd1157ed15437185cb6582");
    localStorage.removeItem("access_token");
    history.push("/login");
  };

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
        <NavRight color={NavRightColor} />
      </div>
    </div>
  );
}
export default withRouter(Nav);
