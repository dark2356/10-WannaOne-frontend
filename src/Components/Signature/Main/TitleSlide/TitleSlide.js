import React, { Component } from "react";
import { Title_Silde_URL } from "../../../../Config";
import SlideButton from "./SlideButton/SlideButton";
import Slider from "react-slick";
import { Colors, Icon } from "@class101/ui";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TitleSlide.scss";

export default class TitleSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      data: [],
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
    fetch(`${Title_Silde_URL}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          data: res.signature,
        })
      );
  }

  render() {
    const { data } = this.state;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
    };
    return (
      <section className="TitleSlide">
        <div className="mainContainer">
          <Slider
            {...settings}
            asNavFor={this.state.nav2}
            ref={(slider) => (this.slider1 = slider)}
          >
            {data.map((datalist, index) => {
              return (
                <div className="MainItemContainer" key={index}>
                  <img
                    sizes="100vw"
                    className="mainItemImg"
                    src={datalist.imgsrc}
                    alt="TopSlide"
                  />
                  <div className="SignatureTitleDescription">
                    <h1 className="DescriptionTextConatiner">
                      {datalist.description}
                      <br />
                      {datalist.name}
                      <span className="producerText">{datalist.category}</span>
                    </h1>
                    <SlideButton />
                  </div>
                </div>
              );
            })}
          </Slider>
          <Slider
            {...settings}
            asNavFor={this.state.nav1}
            slidesToShow={4}
            focusOnSelect={true}
          >
            {data.map((datalist, index) => {
              return (
                <div className="CarouselItemContainer" key={index}>
                  <img
                    className="CarouselItemImg"
                    src={datalist.imgsrc}
                    alt="BottomSlide"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    );
  }
}
