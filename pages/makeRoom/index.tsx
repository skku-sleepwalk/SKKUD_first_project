import { useState } from "react";
import styles from "./index.module.css";
import { Commongreenbtn } from "@/components/CommonGreenBtn/Commongreenbtn";
import { MakeRoom } from "@/utils/makeRoom";
import { useRouter } from "next/router";

export default function main() {
  const router = useRouter();

  var formData = new FormData();
  const [week1, setweek1] = useState(0);
  const [week2, setweek2] = useState(0); //이걸로 날짜 보내면 될듯
  const [week3, setweek3] = useState(0);
  const [week4, setweek4] = useState(0);
  const [week5, setweek5] = useState(0);
  const [week6, setweek6] = useState(0);
  const [week7, setweek7] = useState(0);
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [professor, setprofessor] = useState("");

  //이거 배열로바꿔야... 여러개 선택 가능해야 함
  //아니면 걍 여러개도 나쁘지않은듯
  const stopEvent = (e: any) => {
    e.preventDefault();
  };
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
          <form onSubmit={stopEvent}>
            {/* 버튼 포함 */}
            <div
              style={{
                border: "solid black 0.05rem",
                width: "100%",
                height: "80%",
                borderRadius: "0.5rem",
                marginLeft: "1rem",

                paddingTop: "1vh",
                // paddingBottom: "7vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                {week1 == 1 ? (
                  <button
                    className={styles.btnTrue}
                    onClick={() => {
                      setweek1(0);
                    }}
                  >
                    월
                  </button>
                ) : (
                  <button
                    className={styles.btnFalse}
                    onClick={() => {
                      setweek1(1);
                    }}
                  >
                    월
                  </button>
                )}
                {week2 == 1 ? (
                  <button
                    className={styles.btnTrue}
                    onClick={() => {
                      setweek2(0);
                    }}
                  >
                    화
                  </button>
                ) : (
                  <button
                    className={styles.btnFalse}
                    onClick={() => {
                      setweek2(1);
                    }}
                  >
                    화
                  </button>
                )}

                {week3 == 1 ? (
                  <button
                    className={styles.btnTrue}
                    onClick={() => {
                      setweek3(0);
                    }}
                  >
                    수
                  </button>
                ) : (
                  <button
                    className={styles.btnFalse}
                    onClick={() => {
                      setweek3(1);
                    }}
                  >
                    수
                  </button>
                )}

                {week4 == 1 ? (
                  <button
                    className={styles.btnTrue}
                    onClick={() => {
                      setweek4(0);
                    }}
                  >
                    목
                  </button>
                ) : (
                  <button
                    className={styles.btnFalse}
                    onClick={() => {
                      setweek4(1);
                    }}
                  >
                    목
                  </button>
                )}
                {week5 == 1 ? (
                  <button
                    className={styles.btnTrue}
                    onClick={() => {
                      setweek5(0);
                    }}
                  >
                    금
                  </button>
                ) : (
                  <button
                    className={styles.btnFalse}
                    onClick={() => {
                      setweek5(1);
                    }}
                  >
                    금
                  </button>
                )}
                {week6 == 1 ? (
                  <button
                    className={styles.btnTrue}
                    onClick={() => {
                      setweek6(0);
                    }}
                  >
                    토
                  </button>
                ) : (
                  <button
                    className={styles.btnFalse}
                    onClick={() => {
                      setweek6(1);
                    }}
                  >
                    토
                  </button>
                )}
                {week7 == 1 ? (
                  <button
                    className={styles.btnTrue}
                    onClick={() => {
                      setweek7(0);
                    }}
                  >
                    일
                  </button>
                ) : (
                  <button
                    className={styles.btnFalse}
                    onClick={() => {
                      setweek7(1);
                    }}
                  >
                    일
                  </button>
                )}
              </div>
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  paddingBottom: "4rem",
                }}
              >
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <span className={styles.font1}>과목명</span>
                  <input
                    type="text"
                    className={styles.subjectNameInput}
                    onChange={(event) => {
                      settitle(event.target.value);
                    }}
                  />
                </div>

                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <span className={styles.font1}>교수명</span>
                  <input
                    type="text"
                    className={styles.subjectNameInput}
                    onChange={(event) => {
                      setprofessor(event.target.value);
                    }}
                  />
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingRight: "2.1rem",
                    paddingLeft: "1.5rem",
                  }}
                >
                  <span className={styles.font1}>상세 내용</span>

                  <textarea
                    placeholder="시간, 오픈채팅방 주소 등을 적어주세요"
                    className={styles.detailInput}
                    onChange={(event) => {
                      setcontent(event.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                if (
                  title != "" &&
                  content != "" &&
                  professor != "" &&
                  (week1 || week2 || week3 || week4 || week5 || week6 || week7)
                )
                  MakeRoom({
                    title: title,
                    content: content,
                    prof: professor,
                    mon: week1,
                    tue: week2,
                    wed: week3,
                    thu: week4,
                    fri: week5,
                    sat: week6,
                    sun: week7,
                    hostId: 0,
                  }).then((response) => {
                    console.log(response);
                    router.replace("/study");
                  });
              }}
            >
              <Commongreenbtn
                value="완료"
                style={{ marginTop: "10px", marginLeft: "500px" }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
