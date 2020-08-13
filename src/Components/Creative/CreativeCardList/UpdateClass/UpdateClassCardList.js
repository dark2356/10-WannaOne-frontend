import React, { useState, useEffect } from "react";
import UpdateClass from "./UpdateClass";
import "./UpdateClassCardList.scss";

function UpdateClassCardList() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/data/Creative.json")
      .then((res) => res.json())
      .then((res) => {
        setdata(res.data);
      });
  }, []);

  return (
    <section className="UpdateCardList">
      <div className="updateTitleText">최근업데이트클래스</div>
      <div className="updateFlexBox">
        {data.map((datalist, index) => {
          return (
            <UpdateClass
              key={index}
              image_src={datalist.image}
              name={datalist.name}
              start_date={datalist.start_date}
              creator={datalist.creator}
              like={datalist.like}
              discount_rate={datalist.discount_rate}
            />
          );
        })}
      </div>
    </section>
  );
}
export default UpdateClassCardList;
