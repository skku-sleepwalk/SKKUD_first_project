import Header from '@/component/header/header';
import { SearchedResult } from '@/component/searchedText/SearchedResult';
import { DoubleBtn } from '@/component/DoubleBtn/DoubleBtn';
import { ListBlock } from '../component/listsBlock/listBlock';
import styles from './listPage.module.css'

export default function index() {
    
    // json file 백엔드에서 받는 코드로 추후 대체
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
            <div className={styles.green1}></div>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.green2}></div>
            <div className={styles.text}>
                <SearchedResult query="프기실" ResultCnt={3} />
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.contentHeader}>
                    <div className={styles.DoubleBtnWrapper}>
                        <DoubleBtn value1='인원 많은 순' value2='최신 순' />
                    </div>
                </div>
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
  