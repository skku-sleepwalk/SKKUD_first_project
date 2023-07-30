
import style from './listBlockStyle.module.css';
import { useState } from 'react';
import { BlockDetails } from '../blockDetails/blockDetails';

export interface listblockprops{
    lectureName: string;
    instructorName: string;
    paragraph: string;
    memberCnt: string;
    members: string[];
}
export function ListBlock({lectureName, instructorName, paragraph, memberCnt, members}: listblockprops){

    // comments 변수는 댓글을 의미합니다. 댓글은 백엔드로부터 받아옵니다.
    const comments = ["Something Comments1", "Something Comments2"]
    // popIsOpen 변수는 스터디 상세 정보 창 팝업의 오픈 여부를 나타냅니다. 
    const [popIsOpen, setPopIsOpen] = useState(false);

    return <div className={style.blockWrapper} onClick={()=>setPopIsOpen(true)}>
        <div className={style.firstLine}>
            <img src='/book.png' className={style.img}></img>
            <span className={style.instructorName}>
                {instructorName} 교수님 / 
            </span>
            <span className={style.lectureName}>
                {lectureName}
            </span>
        </div>
        <div className={style.normalText}>
            {paragraph}
        </div>
        <div className={style.thirdLine}>
            <div className={style.box}>
                <img src='/gather.png' className={style.img}/>
                <span className={style.normalText}>
                    {memberCnt}명
                </span>
            </div>
            <div className={style.box}>
                <span className={style.normalText}>
                    members
                </span>
                {members.map((member) => (
                    <span key={member} className={style.box}>
                        <img src={`${member}.jpg`} className={style.circleImg} />
                    </span>
                ))}
            </div>
        </div>
        {/* 각 스터디 칸별로 누르면 나올 팝업을 정의합니다.누르지 않았을 때는 PopIsOpen이 False이므로 표시되지 않습니다. */}
        {popIsOpen ? 
            <BlockDetails lectureName={lectureName} instructorName={instructorName} paragraph={paragraph} memberCnt={memberCnt} members={members} comments={comments} />
        : null
        }
    </div>;
}