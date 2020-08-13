import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { Headline3 } from "@class101/ui";
import { SIGNATURE_API_URL } from "../../../Config";
import SimilarClass from "./SimilarClass";
import "./Recommend.scss";

function Recommend({ focusTarget }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const [classData, setClassData] = useState([]);
  useEffect(() => {
    axios.get(`${SIGNATURE_API_URL}`).then((res) => {
      setClassData(res.data.data);
    });
  }, []);

  return (
    <div className="recommend" ref={(el) => (focusTarget.current[6] = el)}>
      <div className="recTitle">
        <Headline3>비슷한 유저분들이 함께 본 클래스</Headline3>
      </div>
      <div className="slideBox">
        <Slider {...settings}>
          {classData.map((datalist, index) => {
            return (
              <SimilarClass
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
                pay_per_month={datalist.monthPrice}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Recommend;
