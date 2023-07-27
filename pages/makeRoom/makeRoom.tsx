import { useState } from "react";
import styles from "./makeRoom.module.css";
export default function main() {
  const [week, setweek] = useState(0);
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
      <div
        style={{
          height: "69%",
          width: "45%",
          backgroundColor: "white",
          margin: "20vh",
          marginLeft: "58vh",
        }}
      >
        <div style={{ marginLeft: "2rem", paddingTop: "1.5rem" }}>
          <h1 className={styles.h1}>방 만들기</h1>
        </div>
        <div
          style={{
            // border: "solid black 0.5rem",
            margin: "1rem",
            marginTop: "1.5rem",
            width: "95%",
            height: "75%",
          }}
        >
          {/* 버튼 포함 */}
          <div
            style={{
              border: "solid black 0.05rem",
              width: "100%",
              height: "90%",
              borderRadius: "0.5rem",
            }}
          >
            {week == 0 ? (
              <button
                style={{
                  height: "50px",
                  width: "50px",
                }}
              ></button>
            ) : (
              <button
                style={{
                  height: "50px",
                  width: "50px",
                }}
              ></button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
