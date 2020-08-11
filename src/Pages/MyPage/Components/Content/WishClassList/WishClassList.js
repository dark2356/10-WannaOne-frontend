import React, { useState, useEffect } from "react";
import WishClass from "./WishClass";
import { WISH_CLASS_API_URL, WISH_CLASS_MOCK_URL } from "../../../../../Config";
import "./WishClassList.scss";

function WishClassList() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(`${WISH_CLASS_MOCK_URL}`)
      .then((res) => res.json())
      .then((res) => {
        setdata(res.data);
      });
  }, []);

  return (
    <section className="WishClassList">
      <div className="classCardContainer">
        <h2 className="openClassTitle">찜한 클래스</h2>
        <div className="cardClassContainer">
          {data.map((datalist, index) => {
            return (
              <WishClass
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
        </div>
      </div>
    </section>
  );
}
export default WishClassList;
