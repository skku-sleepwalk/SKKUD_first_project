import style from "./StudySearch.module.css";

export interface StudySearchProps {
  isSearch: boolean;
}

export function StudySearch({ isSearch }: StudySearchProps) {
  return (
    <div className={style.searchContainer}>
      {isSearch ? (
        <div className={style.searchWrapper}>
          <div className={style.searchKeyword}>"프기실" 검색</div>
          <div className={style.searchResult}>4개 검색됨</div>
        </div>
      ) : (
        <div className={style.searchKeyword}>
          Study in <img src="/images/45logoBlack.svg" className={style.img} />
        </div>
      )}
    </div>
  );
}
