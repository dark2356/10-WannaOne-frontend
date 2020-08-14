import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ViewClass from "./ViewClass";
import { VIEW_CLASS_API_URL } from "../../../../../Config";
import "./MyViewClassList.scss";

function MyViewClassList({ getData, setWishAmout, wishAmount }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${VIEW_CLASS_API_URL}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <section className="MyViewClassList">
      <section className="classCardContainer">
        <h2 className="openClassTitle">내가 본 클래스</h2>
        <div className="cardClassContainer">
          <Slider {...settings}>
            {data.map((datalist) => {
              return (
                <ViewClass
                  dipStatus={datalist.dipStatus}
                  product_id={datalist.product_id}
                  image_url={datalist.image}
                  category={datalist.category}
                  creator={datalist.creator}
                  product_name={datalist.name}
                  price={datalist.price}
                  like={datalist.like}
                  discount_rate={datalist.discount_rate}
                  monthPrice={datalist.monthPrice}
                  installment={datalist.installment}
                  start_date={datalist.start_date}
                  satisfactory={datalist.rate}
                  dataHandler={getData}
                  setWishAmout={setWishAmout}
                  wishAmount={wishAmount}
                  getData={getData}
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
