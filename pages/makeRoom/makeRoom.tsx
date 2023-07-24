import styles from "./makeRoom.module.css";
export default function main() {
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
          height: "60%",
          width: "45%",
          backgroundColor: "white",
          margin: "20vh",
          marginLeft: "55vh",
        }}
      ></div>
    </div>
  );
}
