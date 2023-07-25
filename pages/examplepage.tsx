// 이것의 화면을 보고 싶다면 http://localhost:3000/examplepage로 들어가세요

import { ListBlock } from '../component/listBlock/listBlock';

export default function index() {
  return <div>
    <ListBlock lectureName="프로그래밍 기초와 실습" instructorName="김영훈" paragraph="설명글1" memberCnt={5} members={["S1", "S2", "S3", "S4", "S5"]} />
    <ListBlock lectureName="프로그래밍 기초와 실습" instructorName="황성재" paragraph="설명글2" memberCnt={2} members={["S1", "S2"]} />
    <ListBlock lectureName="웹프로그래밍 실습" instructorName="앤드류 응" paragraph="THE LEGEND" memberCnt={1} members={["S1", "S3"]} />
  </div>;
}
