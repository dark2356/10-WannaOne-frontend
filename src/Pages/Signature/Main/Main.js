import React from "react";
import { withRouter, Link } from "react-router-dom";
import Nav from "../../../Components/Nav/Nav";
import NavHaeder from "../../../Components/Nav/NavHeader";
import TitleSlide from "../../../Components/Signature/Main/TitleSlide/TitleSlide";
import ClassInfo from "../../../Components/Signature/Main/ClassInfo/ClassInfo";
import ClassCardList from "../../../Components/Signature/Main/ClassCardList/ClassCardList";
import ClassAbout from "../../../Components/Signature/Main/ClassAbout/ClassAbout";
import Footer from "../../../Components/Footer/Footer";
import "./Main.scss";

function Main() {
  return (
    <div className="Main">
      <Nav
        color="white"
        backgroundColor="#3E4042"
        background="black"
        LogoColor="white"
        NavRightColor="white"
      />
      <NavHaeder color="rgb(123,128,130)" backgroundColor="#000000" />
      <TitleSlide />
      <ClassInfo />
      <ClassCardList />
      <ClassAbout />
      <Footer
        color="white"
        background="#1b1c1d"
        kakaoBtnColor="white"
        kakaoBtnColorBack="#1C1D1E"
      />
    </div>
  );
}

export default withRouter(Main);
