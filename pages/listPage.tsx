import Header from '@/component/header/header'
import { SearchedResult } from '@/component/searchedText/SearchedResult';
import { DoubleBtn } from '@/component/DoubleBtn/DoubleBtn'
import { ListBlock } from '../component/listsBlock/listBlock';

const lectureInfoList = [
    {
        'lectureName': '프로그래밍 기초와 실습',
        'instructorName': '김영훈',
        'paragraph': '프로그래밍 기초와 실습을 함께 공부할 분들을 찾습니다!',
        'memberCnt': '5',
        'members': [
            "S1", "S2", "S3", "S4", "S5"
        ]
    },
    {
        'lectureName': '프로그래밍 기초와 실습',
        'instructorName': '황성재',
        'paragraph': '1일 1솔 챌린지',
        'memberCnt': '2',
        'members': [
            "S1", "S2"
        ]
    },
    {
        'lectureName': '웹프로그래밍 실습',
        'instructorName': '이이익',
        'paragraph': 'FrontEndProgramming && BackEndProgramming',
        'memberCnt': '1',
        'members': [
            "S1"
        ]
    }
]

export default function index() {
    
    return <div>
        <Header />
        <SearchedResult query="프기실" ResultCnt={3} />
        <div>
            <DoubleBtn value1='인원 많은 순' value2='최신 순' />
            {lectureInfoList.map((lectureInfo) => {
                return lectureInfo;
            })}
            <ListBlock lectureName="프로그래밍 기초와 실습" instructorName="김영훈" paragraph="설명글1" memberCnt={5} members={["S1", "S2", "S3", "S4", "S5"]} />
            <ListBlock lectureName="프로그래밍 기초와 실습" instructorName="황성재" paragraph="설명글2" memberCnt={2} members={["S1", "S2"]} />
            <ListBlock lectureName="웹프로그래밍 실습" instructorName="크롱" paragraph="크롱!" memberCnt={1} members={["S1", "S3"]} />
        </div>
    </div>;
  }
  