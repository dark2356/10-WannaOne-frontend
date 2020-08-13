import React, { useState, useEffect } from "react";
import NewClass from "./NewClass";
// import { Class_Card_URL } from "../../../../Config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewClassCardList.scss";

function NewClassCardList() {
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
      <div className="toTitleText">신규 클래스</div>
      <span className="newClassText">
        <div>얼리버드 최저가! 일부 클래스는 수강 기간 3개월 추가 증정</div>
        <div>전체 클래스 보기</div>
      </span>

      <Slider {...settings}>
        {data.map((datalist, index) => {
          return (
            <NewClass
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
export default NewClassCardList;
