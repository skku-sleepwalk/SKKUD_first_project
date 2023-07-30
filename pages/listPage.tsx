import Header from '@/components/header/header';
import { SearchedResult } from '@/components/searchedText/SearchedResult';
import { DoubleBtn } from '@/components/DoubleBtn/DoubleBtn';
import { ListBlock } from '../components/listsBlock/listBlock';
import styles from './listPage.module.css'

export default function index() {
    
    // 각 방(스터디 모집 글) Info List // json file 백엔드에서 받는 코드로 추후 대체
    const lectureInfoList = [
        {
            'id': '0',
            'lectureName': '프로그래밍 기초와 실습',
            'instructorName': '김영훈',
            'paragraph': '프로그래밍 기초와 실습을 함께 공부할 분들을 찾습니다!',
            'memberCnt': '5',
            'members': [
                "S1", "S2", "S3", "S4", "S5"
            ]
        },
        {
            'id': '1',
            'lectureName': '프로그래밍 기초와 실습',
            'instructorName': '황성재',
            'paragraph': '1일 1솔 챌린지',
            'memberCnt': '2',
            'members': [
                "S1", "S2"
            ]
        },
        {
            'id': '2',
            'lectureName': '웹프로그래밍 실습',
            'instructorName': '이이익',
            'paragraph': 'FrontEndProgramming && BackEndProgramming',
            'memberCnt': '1',
            'members': [
                "S1"
            ]
        }
    ]

    return (
    <div className={styles.listPageWrapper}>
            <style jsx global>
            {`
            body {
                margin: 0px;
                padding: 0px;
                background-color: #81C690;
            }
            `}
            </style>
            {/* grid header grid 왼쪽 초록 색 지정 */}
            <div className={styles.green1}></div>
            {/* header component */}
            <div className={styles.header}>
                <Header />
            </div>
            {/* grid header grid 오른쪽 초록 색 지정 */}
            <div className={styles.green2}></div>
            {/* // query prop에 검색어와 방 개수 전달, 표시 */}
            <div className={styles.text}>
                <SearchedResult query="프기실" ResultCnt={3} />
            </div>
            <div className={styles.contentWrapper}>
                {/* doubleBtn 컴포넌트 오른쪽에 위치시키는 div */}
                <div className={styles.contentHeader}>
                    <div className={styles.DoubleBtnWrapper}>
                        {/* DoubleBtn 컴포넌트 = 인원 많은 순 / 최신 순 정렬 기준 스왑하는 버튼 */}
                        <DoubleBtn value1='인원 많은 순' value2='최신 순' />
                    </div>
                </div>
                {/* map으로 방 리스트 정보 한번에 보냄. 스터디 모집 글 별로 ListBlock에 정보 전달. */}
                {
                    lectureInfoList.map((lectureInfo) => <ListBlock 
                            key={lectureInfo['id']}
                            lectureName={lectureInfo['lectureName']}
                            instructorName={lectureInfo['instructorName']}
                            paragraph={lectureInfo['paragraph']}
                            memberCnt={lectureInfo['memberCnt']}
                            members={lectureInfo['members']}
                        />
                    )
                }
        </div>
    </div>
    );
  }
  