import styles from "./SearchBar.module.css";
export function SearchBar() {
  return (
    <div className={styles.search} style={{ marginLeft: "25%" }}>
      <img
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
        width="20"
        height="20"
        style={{ position: "absolute", marginTop: "15px", marginLeft: "15px" }}
      ></img>
      <input type="text" id={styles.Search} placeholder="검색" />
    </div>
  );
}
