

import { DetailParagraph, DetailMember, DetailJoinBtn, CommentBtn, CommentBlock } from './blockDetailsComponents'
import style from './blockDetails.module.css'

export interface blockdetailsprops{
    lectureName: string;
    instructorName: string;
    paragraph: string;
    memberCnt: number;
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
        <div className={style.wrapper}>
            <div className={style.header}>
                <span>
                    {instructorName} /
                </span>
                <span>
                    {lectureName}
                </span>
            </div>
            <div className={style.paragraph}>
                <DetailParagraph paragraph={paragraph}/>
            </div>
            <div className={style.members}>
                <DetailMember memberCnt={memberCnt} members={members}/>
                <DetailJoinBtn />
            </div>
            <div className={style.comment}>
                <div>
                    <div>
                        {comments.length}개의 댓글
                    </div>
                    <CommentBtn />
                </div>
                {
                    comments.map((comment) => {
                        return <CommentBlock key={comment} comment={comment} />
                    })
                }
            </div>
        </div>
    );
}