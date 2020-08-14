import React from "react";
import WishClass from "./WishClass";
import "./WishClassList.scss";

function WishClassList({ data, getData, setWishAmout, wishAmount }) {
  return (
    <section className="WishClassList">
      <div className="classCardContainer">
        <h2 className="openClassTitle">찜한 클래스</h2>
        <div className="cardClassContainer">
          {data && data.map((datalist) => {
            return (
              <WishClass
                dipStatus={datalist.dipStatus}
                product_id={datalist.product_id}
                image_url={datalist.image}
                category={datalist.category}
                creator={datalist.creator}
                product_name={datalist.name}
                price={datalist.price}
                discount_rate={datalist.discount_rate}
                like={datalist.like}
                monthPrice={datalist.monthPrice}
                installment={datalist.installment}
                start_date={datalist.start_date}
                satisfactory={datalist.rate}
                getData={getData}
                setWishAmout={setWishAmout}
                wishAmount={wishAmount}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default WishClassList;
