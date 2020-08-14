import React, { useState, useEffect } from "react";
import OpenSignatureClass from "./OpenSignatureClass/OpenSignatureClass";
import { SIGNATURE_MAIN_URL } from "../../../../Config";
import "./ClassCardList.scss";

function ClassCardList() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(`${SIGNATURE_MAIN_URL}`)
      .then((res) => res.json())
      .then((res) => {
        setdata(res.data);
      });
  }, []);

  return (
    <section className="classCardList">
      <section className="classCardContainer">
        <h3 className="openClassTitle">오픈된 시그니처 클래스</h3>
        <div className="cardClassContainer">
          {data.map((datalist, index) => {
            return (
              <OpenSignatureClass
                dipStatus={datalist.dipStatus}
                product_id={datalist.product_id}
                key={index}
                image_src={datalist.image}
                name={datalist.name}
                start_date={datalist.start_date}
                creator={datalist.creator}
                like={datalist.like}
                rate={datalist.rate}
              />
            );
          })}
        </div>
      </section>
    </section>
  );
}
export default ClassCardList;
