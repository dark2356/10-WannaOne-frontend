import React from "react";
import { withRouter, Link } from "react-router-dom";
import Nav from "../../../Components/Nav/Nav";
import TitleSlide from "../../../Components/Signature/Main/TitleSlide/TitleSlide";
import ClassInfo from "../../../Components/Signature/Main/ClassInfo/ClassInfo";
import ClassCardList from "../../../Components/Signature/Main/ClassCardList/ClassCardList";
import ClassAbout from "../../../Components/Signature/Main/ClassAbout/ClassAbout";
import Footer from "../../../Components/Footer/Footer";
import "./Main.scss";

function Main() {
  return (
    <div className="Main">
      <Nav color="white" backgroundColor="#3E4042" background="black" />
      <TitleSlide />
      <ClassInfo />
      <ClassCardList />
      <ClassAbout />
      <Footer color="white" background="#1b1c1d" />
    </div>
  );
}

export default withRouter(Main);
