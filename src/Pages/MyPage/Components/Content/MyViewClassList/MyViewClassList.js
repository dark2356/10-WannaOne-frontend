import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ViewClass from "./ViewClass";
import { WISH_CLASS_API_URL, WISH_CLASS_MOCK_URL } from "../../../../../Config";
import "./MyViewClassList.scss";

function MyViewClassList() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(`${WISH_CLASS_MOCK_URL}`)
      .then((res) => res.json())
      .then((res) => {
        setdata(res.data);
      });
  }, []);

  return (
    <section className="MyViewClassList">
      <section className="classCardContainer">
        <h2 className="openClassTitle">내가 본 클래스</h2>
        <div className="cardClassContainer">
          <Slider {...settings}>
            {data.map((datalist, index) => {
              return (
                <ViewClass
                  key={index}
                  category={datalist.category}
                  image_src={datalist.image}
                  name={datalist.name}
                  start_date={datalist.start_date}
                  creator={datalist.creator}
                  like={datalist.like}
                  rate={datalist.rate}
                  discount_rate={datalist.discount_rate}
                  price={datalist.price}
                  month={datalist.month}
                  pay_per_month={datalist.pay_per_month}
                />
              );
            })}
          </Slider>
        </div>
      </section>
    </section>
  );
}
export default MyViewClassList;
