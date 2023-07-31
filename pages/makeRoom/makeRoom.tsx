import { useState } from "react";
import styles from "./makeRoom.module.css";
export default function main() {
  const [week1, setweek1] = useState(0);
  const [week2, setweek2] = useState(0); //이걸로 날짜 보내면 될듯
  const [week3, setweek3] = useState(0);
  const [week4, setweek4] = useState(0);
  const [week5, setweek5] = useState(0);
  const [week6, setweek6] = useState(0);
  const [week7, setweek7] = useState(0);
  //이거 배열로바꿔야... 여러개 선택 가능해야 함
  //아니면 걍 여러개도 나쁘지않은듯
  return (
    <div className={styles.backgroundColor}>
      <style jsx global>
        {`
          body {
            margin: 0px;
            padding: 0px;
          }
        `}
      </style>
      <div className={styles.frame}>
        <div style={{ marginLeft: "2rem", paddingTop: "1.5rem" }}>
          <h1 className={styles.h1}>방 만들기</h1>
        </div>
        <div className={styles.innerframe}>
          {/* 버튼 포함 */}
          <div
            style={{
              border: "solid black 0.05rem",
              width: "100%",
              height: "90%",
              borderRadius: "0.5rem",
              paddingTop: "3vh",
            }}
          >
            {week1 == 1 ? (
              <button
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "0",
                  border: "0",
                  backgroundColor: "#246633",
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setweek1(0);
                }}
              >
                월
              </button>
            ) : (
              <button
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "0",
                  border: "0",
                  backgroundColor: "#F2F2F2",
                  color: "#B2B2B2",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setweek1(1);
                }}
              >
                월
              </button>
            )}
            {week2 == 1 ? (
              <button
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "0",
                  border: "0",
                  backgroundColor: "#246633",
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setweek2(0);
                }}
              >
                화
              </button>
            ) : (
              <button
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "0",
                  border: "0",
                  backgroundColor: "#F2F2F2",
                  color: "#B2B2B2",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setweek2(1);
                }}
              >
                화
              </button>
            )}

            {week3 == 1 ? (
              <button
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "0",
                  border: "0",
                  backgroundColor: "#246633",
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setweek3(0);
                }}
              >
                수
              </button>
            ) : (
              <button
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "0",
                  border: "0",
                  backgroundColor: "#F2F2F2",
                  color: "#B2B2B2",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setweek3(1);
                }}
              >
                수
              </button>
            )}

            {week4 == 1 ? (
              <button
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "0",
                  border: "0",
                  backgroundColor: "#246633",
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setweek4(0);
                }}
              >
                목
              </button>
            ) : (
              <button
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "0",
                  border: "0",
                  backgroundColor: "#F2F2F2",
                  color: "#B2B2B2",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setweek4(1);
                }}
              >
                목
              </button>
            )}
            {week5 == 1 ? (
              <button
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "0",
                  border: "0",
                  backgroundColor: "#246633",
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setweek5(0);
                }}
              >
                금
              </button>
            ) : (
              <button
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "0",
                  border: "0",
                  backgroundColor: "#F2F2F2",
                  color: "#B2B2B2",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setweek5(1);
                }}
              >
                금
              </button>
            )}
            {week6 == 1 ? (
              <button
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "0",
                  border: "0",
                  backgroundColor: "#246633",
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setweek6(0);
                }}
              >
                토
              </button>
            ) : (
              <button
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "0",
                  border: "0",
                  backgroundColor: "#F2F2F2",
                  color: "#B2B2B2",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setweek6(1);
                }}
              >
                토
              </button>
            )}
            {week7 == 1 ? (
              <button
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "0",
                  border: "0",
                  backgroundColor: "#246633",
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setweek7(0);
                }}
              >
                일
              </button>
            ) : (
              <button
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "0",
                  border: "0",
                  backgroundColor: "#F2F2F2",
                  color: "#B2B2B2",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setweek7(1);
                }}
              >
                일
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
