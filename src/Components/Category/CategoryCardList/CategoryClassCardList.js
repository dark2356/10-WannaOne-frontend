import React, { useState, useEffect } from "react";
import CategoryClass from "./CategoryClass";
import { withRouter } from "react-router-dom";
import Nav from "../../Nav/Nav";
import "./CategoryClassCardList.scss";

function CategoryClassCardList(props) {
  const [data, setdata] = useState([]);

  console.log(props.match.params.id);
  useEffect(() => {
    fetch(
      `http://10.58.4.181:8000/product/?sub_category=${props.match.params.id}`
    )
      .then((res) => res.json())
      .then((res) => {
        setdata(res.data);
        console.log(res);
      });
  }, []);

  return (
    <section className="CreativeCardList">
      <Nav />
      <div className="toTitleText">신규 클래스</div>
      <span className="newClassText">
        <div>얼리버드 최저가! 일부 클래스는 수강 기간 3개월 추가 증정</div>
        <div>전체 클래스 보기</div>
      </span>
      <div className="CategoryFlex">
        {data.map((datalist, index) => {
          return (
            <CategoryClass
              key={index}
              id={datalist.id}
              image_src={datalist.image}
              name={datalist.name}
              start_date={datalist.start_date}
              creator={datalist.creator}
              like={datalist.like}
              price={datalist.price}
              pay_per_month={datalist.pay_per_month}
              discount_rate={datalist.discount_rate}
            />
          );
        })}
      </div>
    </section>
  );
}
export default withRouter(CategoryClassCardList);
