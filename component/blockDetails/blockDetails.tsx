

import { DetailParagraph, DetailMember, DetailJoinBtn, CommentBtn, CommentBlock, DetailHedaer } from './blockDetailsComponents'
import style from './blockDetails.module.css'

export interface blockdetailsprops{
    lectureName: string;
    instructorName: string;
    paragraph: string;
    memberCnt: string;
    members: string[];
    comments: string[];
}
export function BlockDetails({
    lectureName, 
    instructorName, 
    paragraph, 
    memberCnt, 
    members,
    comments
}: blockdetailsprops){

    return (
        // 각 팝업창의 위치는 absolut으로 지정했습니다. relative로 지정하면 위치가 각 스터디 칸 안에서 시작됩니다.
        <div className={style.wrapper}>
            {/* 맨 위 교수명, 강좌명이 나오는 header입니다. */}
            <div className={style.header}>
                <DetailHedaer instructorName={instructorName} lectureName={lectureName} />
            </div>
            {/* 좌측 방장이 작성한 스터디 모집글이 나오는 paragraph입니다. */}
            <div className={style.paragraph}>
                <DetailParagraph paragraph={paragraph}/>
            </div>
            {/* 우측 방장과 모집 인원에 관한 정보가 나오는 members 칸입니다. */}
            <div className={style.members}>
                {/* 멤버의 프로필이 나옵니다. */}
                <DetailMember memberCnt={memberCnt} members={members}/>
                {/* 스터디 가입버튼입니다. */}
                <DetailJoinBtn />
            </div>
            {/* 하단 댓글 칸입니다. */}
            <div className={style.comment}>
                <div>
                    <div>
                        {comments.length}개의 댓글
                    </div>
                    <CommentBtn />
                </div>
                {/* 각 댓글을 map으로 띄웁니다. */}
                {
                    comments.map((comment) => {
                        return <CommentBlock key={comment} comment={comment} />
                    })
                }
            </div>
        </div>
    );
}