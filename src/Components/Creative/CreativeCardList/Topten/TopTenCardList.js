import React, { useState, useEffect } from "react";
import Topten from "./Topten";
// import { Class_Card_URL } from "../../../../Config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TopTenCardList.scss";

function CreativeCardList() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/data/Creative.json")
      .then((res) => res.json())
      .then((res) => {
        setdata(res.data);
      });
  }, []);

  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="CreativeCardList">
      <div className="toTitleText">지금 인기 TOP 10</div>
      <Slider {...settings}>
        {data.map((datalist, index) => {
          return (
            <Topten
              key={index}
              image_src={datalist.image}
              name={datalist.name}
              start_date={datalist.start_date}
              creator={datalist.creator}
              like={datalist.like}
              price={datalist.price}
              pay_month={datalist.pay_per_month}
              discount_rate={datalist.discount_rate}
            />
          );
        })}
      </Slider>
    </section>
  );
}
export default CreativeCardList;
