import React from "react";
import { Headline3, ModalBottomSheet, TextButton, Icon } from "@class101/ui";
import "./Refund.scss";

function Refund({ focusTarget }) {
  return (
    <>
      <div className="htmlDivider" />
      <div className="refund" ref={(el) => (focusTarget.current[7] = el)}>
        <div className="refTitle">
          <Headline3>환불 정책</Headline3>
        </div>
        <div className="refundInfBox">
          <div className="refundInf">
            <div className="refundDes">
              키트 미개봉 시, 클래스 런칭일인 <span>7월 16일</span> 전까지 취소
              및 전액 환불이 가능합니다.
            </div>
            <ModalBottomSheet
              opener={
                <TextButton rightIcon={<Icon.ChevronRight />}>
                  전체 환불 정책 보기
                </TextButton>
              }
              hideScroll
              title="환불 정책"
              className="refundModal"
            >
              <div className="modalTitle">수강권 환불</div>
              <table className="RefundPolicy__Table-sc-17izcpl-7 kUSUsn">
                <thead className="RefundPolicy__THead-sc-17izcpl-8 byXHIG">
                  <tr className="RefundPolicy__TRow-sc-17izcpl-10 enHvWt">
                    <th className="RefundPolicy__THeadCol-sc-17izcpl-11 jVBuvf">
                      구분
                    </th>
                    <th className="RefundPolicy__THeadCol-sc-17izcpl-11 jVBuvf">
                      환불액
                    </th>
                    <th className="RefundPolicy__THeadCol-sc-17izcpl-11 jVBuvf">
                      위약금
                    </th>
                  </tr>
                </thead>
                <tbody className="RefundPolicy__TBody-sc-17izcpl-9 kQRgPn">
                  <tr className="RefundPolicy__TRow-sc-17izcpl-10 enHvWt">
                    <th className="RefundPolicy__THeadCol-sc-17izcpl-11 jVBuvf">
                      수강 시작으로부터 7일 이내
                    </th>
                    <td className="RefundPolicy__TBodyCol-sc-17izcpl-12 fgDEJF">
                      기준금액*에서 수강권 기이용분(정상가 기준)을 제한 금액
                    </td>
                    <td className="RefundPolicy__TBodyCol-sc-17izcpl-12 fgDEJF">
                      없음
                    </td>
                  </tr>
                  <tr className="RefundPolicy__TRow-sc-17izcpl-10 enHvWt">
                    <th className="RefundPolicy__THeadCol-sc-17izcpl-11 jVBuvf">
                      수강 시작으로부터 7일 초과
                    </th>
                    <td className="RefundPolicy__TBodyCol-sc-17izcpl-12 fgDEJF">
                      기준금액*에서 수강권 기이용분(정상가 기준)을 제한 금액
                    </td>
                    <td className="RefundPolicy__TBodyCol-sc-17izcpl-12 fgDEJF">
                      수강권 정상가 기준의 10%
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="modalTitle">키트 환불 및 교환</div>
              <table className="RefundPolicy__Table-sc-17izcpl-7 kUSUsn">
                <thead className="RefundPolicy__THead-sc-17izcpl-8 byXHIG">
                  <tr className="RefundPolicy__TRow-sc-17izcpl-10 enHvWt">
                    <th className="RefundPolicy__THeadCol-sc-17izcpl-11 jVBuvf">
                      구분
                    </th>
                    <th className="RefundPolicy__THeadCol-sc-17izcpl-11 jVBuvf">
                      키트 상품성 훼손 여부
                    </th>
                    <th className="RefundPolicy__THeadCol-sc-17izcpl-11 jVBuvf">
                      환불액
                    </th>
                    <th className="RefundPolicy__THeadCol-sc-17izcpl-11 jVBuvf">
                      교환 요청 가능 여부
                    </th>
                  </tr>
                </thead>
                <tbody className="RefundPolicy__TBody-sc-17izcpl-9 kQRgPn">
                  <tr className="RefundPolicy__TRow-sc-17izcpl-10 enHvWt">
                    <th className="RefundPolicy__THeadCol-sc-17izcpl-11 jVBuvf">
                      배송 완료로부터 7일 이내
                    </th>
                    <td className="RefundPolicy__TBodyCol-sc-17izcpl-12 fgDEJF">
                      X
                    </td>
                    <td className="RefundPolicy__TBodyCol-sc-17izcpl-12 fgDEJF">
                      결제금액에서 키트 정가를 제한 금액
                    </td>
                    <td className="RefundPolicy__TBodyCol-sc-17izcpl-12 fgDEJF">
                      가능
                    </td>
                  </tr>
                  <tr className="RefundPolicy__TRow-sc-17izcpl-10 enHvWt">
                    <th className="RefundPolicy__THeadCol-sc-17izcpl-11 jVBuvf">
                      배송 완료로부터 7일 이내
                    </th>
                    <td className="RefundPolicy__TBodyCol-sc-17izcpl-12 fgDEJF">
                      O
                    </td>
                    <td className="RefundPolicy__TBodyCol-sc-17izcpl-12 fgDEJF">
                      청약철회 제한
                    </td>
                    <td className="RefundPolicy__TBodyCol-sc-17izcpl-12 fgDEJF">
                      불가
                    </td>
                  </tr>
                  <tr className="RefundPolicy__TRow-sc-17izcpl-10 enHvWt">
                    <th className="RefundPolicy__THeadCol-sc-17izcpl-11 jVBuvf">
                      배송 완료로부터 7일 초과
                    </th>
                    <td className="RefundPolicy__TBodyCol-sc-17izcpl-12 fgDEJF">
                      -
                    </td>
                    <td className="RefundPolicy__TBodyCol-sc-17izcpl-12 fgDEJF">
                      청약철회 제한
                    </td>
                    <td className="RefundPolicy__TBodyCol-sc-17izcpl-12 fgDEJF">
                      불가
                    </td>
                  </tr>
                </tbody>
              </table>
              <ul>
                <li>기이용분 = 정상가 * (이용한 챕터 수 / 전체 챕터 수)</li>
                <li>
                  강의 재생 시간에 관계없이 챕터 당 재생된 경우 이용한 것으로
                  간주합니다.
                </li>
                <li>수강권의 수강기간은 일시정지 할 수 없습니다.</li>
                <li>
                  상품준비중에 있을 때 취소요청을 하신 경우, 배송업체 확인 후
                  취소절차가 진행됩니다. (배송이 이미 시작된 경우 왕복배송비를
                  부담하셔야 합니다.)
                </li>
                <li>
                  단, 수업 자료를 다운받았을 경우에는 수강한 것으로 간주합니다.
                </li>
                <li>
                  단, 한정 선물이 있는 경우에는 한정 선물은 키트 구성품으로
                  간주합니다.
                </li>
                <li>
                  *기준금액은 아래를 따릅니다.
                  <br />
                  1. 키트 환불 가능 시 : 총 결제금액
                  <br />
                  2. 키트 환불 불가 시 : 총 결제금액 - 키트의 정가
                </li>
                <li>총 환불액 = 각 환불액 - 위약금</li>
                <li>
                  *키트 교환 요청이 가능한 것과 별개로 실제 교환 진행은 키트
                  공급자의 교환 정책에 따릅니다.
                </li>
                <li>
                  *키트 환불 및 교환에는 왕복배송비가 발생할 수 있으며, 고객센터
                  연락을 통해 확인 및 진행이 가능합니다.
                </li>
                <li>
                  회원의 요청으로 수강권 환불(기이용분을 제외한 미이용분에 대한
                  환불이 이루어지는 경우 포함)이 이루어진 경우, 강의 전체에 대한
                  수강 권한이 상실됩니다.
                </li>
                <li>
                  환불은 원칙적으로 위의 약정을 따르나, 클래스별로 환불에 대한
                  특이 기준이 안내 되는 경우에는 해당 특이 기준을 따릅니다.
                </li>
              </ul>
              <br />
              <div className="modalTitle naver">네이버페이 환불</div>
              <ul>
                <li>
                  간편 신용카드/체크카드 : 취소 완료 후 3~5영업일 이후
                  환불(승인/매입 구분 불가)
                </li>
                <li>
                  간편 계좌이체 : 취소 완료 즉시 환불(단, 은행
                  정기점검시간등에는 환불 실패)
                </li>
                <li>포인트 : 취소 완료 즉시 환불</li>
              </ul>
            </ModalBottomSheet>
          </div>
        </div>
      </div>
    </>
  );
}

export default Refund;
