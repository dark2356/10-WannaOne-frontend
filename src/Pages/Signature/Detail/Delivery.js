import React from "react";
import { Headline3, Icon, Colors } from "@class101/ui";
import "./Delivery.scss";

function Delivery({ focusTarget }) {
  return (
    <div className="delivery" ref={(el) => (focusTarget.current[3] = el)}>
      <div className="delTitle">
        <Headline3>배송 일정</Headline3>
      </div>
      <div className="delSchedule">
        <div className="delIconBox">
          <div>
            <Icon.ShippingTruck fillColor={Colors.red600} />
          </div>
          7.9
        </div>
        <div>
          <div className="delScheduleInf">배송 시작</div>
          <ul>
            <li>배송 업체의 사정에 따라 2~7 영업일이 소요됩니다.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
