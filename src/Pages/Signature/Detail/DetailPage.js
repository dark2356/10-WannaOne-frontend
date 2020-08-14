import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Tabs, Theme, Headline3 } from "@class101/ui";
import FloatingBtn from "../../../Components/Nav/FloatingBtn";
import Curriculum from "./Curriculum";
import ClassSummary from "./ClassSummary";
import ProductView from "./ProductView";
import IntroSection from "./IntroSection";
import Package from "./Package";
import Delivery from "./Delivery";
import Benefit from "./Benefit";
import Creator from "./Creator";
import Recommend from "./Recommend";
import Refund from "./Refund";
import Nav from "../../../Components/Nav/Nav";
import Footer from "../../../Components/Footer/Footer";
import SignatureSideBar from "../../../Components/SignatureSideBar/SignatureSideBar";
import SignatureHeadCover from "./SignatureHeadCover";
import {
  PRODUCT_VIEW_URL,
  TABITEMS_URL,
  DETAIL_DATA_URL,
  REVIEW_ITEMS_URL,
} from "../../../Config";
import "./DetailPage.scss";

function DetailPage() {
  const [currentValue, setCurrentValue] = useState("PREVIEW");
  const [productData, setProductData] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [tabItems, setTabItems] = useState([]);
  const [reviewItems, setReviewItems] = useState([]);
  const [curiItems, setCuriItems] = useState([]);
  const [isFold, setIsFold] = useState(true);
  const [isCouponClicked, setIsCouponClicked] = useState(false);
  const focusTarget = useRef([]);

  const customAxiosFunctions = async () => {
    const urls = [
      PRODUCT_VIEW_URL,
      TABITEMS_URL,
      DETAIL_DATA_URL,
      REVIEW_ITEMS_URL,
    ];
    const promises = urls.map((el) => {
      return axios.get(el);
    });

    const resolvedResponses = await Promise.all(promises);

    resolvedResponses.map((el) => {
      const url = el.config.url;
      if (url === PRODUCT_VIEW_URL) {
        setProductData(el.data.data);
      } else if (url === TABITEMS_URL) {
        setTabItems(el.data.data);
        focusTarget.current = Array(el.data.data.length);
      } else if (url === DETAIL_DATA_URL) {
        setDetailData(el.data);
        setCuriItems(el.data.chapter);
      } else {
        setReviewItems(el.data.data);
      }
    });
  };

  useEffect(() => {
    customAxiosFunctions();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollToRef = (value) => {
    const obj = {
      PREVIEW: 0,
      CURRICULUM: 1,
      PACKAGE: 2,
      DELIVERY: 3,
      BENEFIT: 4,
      CREATOR: 5,
      RECOMMEND: 6,
      REFUND: 7,
    };
    focusTarget.current[obj[value]].scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (value) => {
    setCurrentValue(value);
    scrollToRef(value);
  };

  const handleClick = () => {
    setIsFold(!isFold);
  };

  return (
    <>
      <Nav color="white" backgroundColor="#3E4042" background="black" LogoColor="white"
        NavRightColor="white"/>
      {curiItems.length && (
        <>
          <SignatureHeadCover />
          <div className="DetailPage">
            <div className="detailContainer">
              <div className="detailWrapper">
                <div className="detailBox">
                  <header>
                    <Tabs
                      value={currentValue}
                      theme={Theme.dark}
                      type="red"
                      className="detailHeader"
                      onChange={handleChange}
                    >
                      {tabItems.map((el, i) => {
                        return (
                          <Tabs.Item
                            value={el.value}
                            title={el.title}
                            key={i}
                            onClick={scrollToRef}
                          />
                        );
                      })}
                    </Tabs>
                  </header>
                  <ClassSummary
                    detailData={detailData}
                    reviewItems={reviewItems}
                  />
                  <ProductView
                    productData={productData}
                    focusTarget={focusTarget}
                  />
                  <IntroSection />
                  <div
                    className="curriculum"
                    ref={(el) => (focusTarget.current[1] = el)}
                  >
                    <Headline3 className="curiTitle">커리큘럼</Headline3>
                    <div className="curiBox">
                      <div className="curiInt">
                        클래스를 신청하신 분들이 배우고 있는 커리큘럼입니다.
                        콘텐츠는 배우기 쉽게 영상, 수업노트, 첨부파일로
                        구성되어있습니다.
                    </div>
                      <Curriculum data={curiItems} />
                    </div>
                  </div>
                  <Package
                    focusTarget={focusTarget}
                    detailData={detailData}
                    isFold={isFold}
                    handleClick={handleClick}
                  />
                  <Delivery focusTarget={focusTarget} />
                  <Benefit
                    focusTarget={focusTarget}
                    isCouponClicked={isCouponClicked}
                    setIsCouponClicked={setIsCouponClicked}
                    detailData={detailData}
                  />
                  <Creator focusTarget={focusTarget} />
                  <Recommend focusTarget={focusTarget} />
                  <Refund focusTarget={focusTarget} />
                </div>
                <SignatureSideBar
                  isCouponClicked={isCouponClicked}
                  setIsCouponClicked={setIsCouponClicked}
                />
              </div>
            </div>
            <FloatingBtn scrollToTop={scrollToTop} />
          </div>
        </>
      )}
      <Footer color="white" background="#1b1c1d" />
    </>
  );
}

export default withRouter(DetailPage);
