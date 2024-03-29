import { SearchedResult } from "@/components/searchedText/SearchedResult";
import { DoubleBtn } from "@/components/DoubleBtn/DoubleBtn";
import { ListBlock } from "../components/listsBlock/listBlock";
import styles from "./listPage.module.css";

// 로그인 상태를 받아옴.
export const isLogin = false;

// listPage에서 각 스터디 방을 누르면 스터디의 상세 정보가 나오는 팝업 창 기능을 구현 중에 있습니다.
// listPage/blockDetails 브랜치에서 확인 가능합니다. 미완성인 부분이 있습니다.

export default function index() {
  // 각 방(스터디 모집 글) Info List // json file 백엔드에서 받는 코드로 추후 대체
  const lectureInfoList = [
    {
      id: "0",
      lectureName: "프로그래밍 기초와 실습",
      instructorName: "김영훈",
      paragraph: "프로그래밍 기초와 실습을 함께 공부할 분들을 찾습니다!",
      memberCnt: "5",
      members: ["S1", "S2", "S3", "S4", "S5"],
    },
    {
      id: "1",
      lectureName: "프로그래밍 기초와 실습",
      instructorName: "황성재",
      paragraph: "1일 1솔 챌린지",
      memberCnt: "2",
      members: ["S1", "S2"],
    },
    {
      id: "2",
      lectureName: "웹프로그래밍 실습",
      instructorName: "이이익",
      paragraph: "FrontEndProgramming && BackEndProgramming",
      memberCnt: "1",
      members: ["S1"],
    },
  ];

  return (
    <>
      {/* // query prop에 검색어와 방 개수 전달, 표시 */}
      <div className={styles.text}>
        <SearchedResult query="프기실" ResultCnt={3} />
      </div>
      <div className={styles.contentWrapper}>
        {/* doubleBtn 컴포넌트 오른쪽에 위치시키는 div */}
        <div className={styles.contentHeader}>
          <div className={styles.DoubleBtnWrapper}>
            {/* DoubleBtn 컴포넌트 = 인원 많은 순 / 최신 순 정렬 기준 스왑하는 버튼 */}
            <DoubleBtn value1="인원 많은 순" value2="최신 순" />
          </div>
        </div>
        {/* map으로 방 리스트 정보 한번에 보냄. 스터디 모집 글 별로 ListBlock에 정보 전달. */}
        {lectureInfoList.map((lectureInfo) => (
          <ListBlock
            key={lectureInfo["id"]}
            lectureName={lectureInfo["lectureName"]}
            instructorName={lectureInfo["instructorName"]}
            paragraph={lectureInfo["paragraph"]}
            memberCnt={lectureInfo["memberCnt"]}
            members={lectureInfo["members"]}
          />
        ))}
      </div>
    </>
  );
}
