import headerBox from "./headerBox.module.css";

export default function SearchBox() {
  return (
    <div className={headerBox.searchBox}>
      <input
        type="text"
        placeholder="SEARCH"
        className={headerBox.searchInput}
      ></input>
    </div>
  );
}
