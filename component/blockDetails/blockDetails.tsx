

import { DetailParagraph, DetailMember, DetailJoinBtn, CommentBtn, CommentBlock } from './blockDetailsComponents'

export interface blockdetailsprops{
    lectureName: string;
    instructorName: string;
    paragraph: string;
    memberCnt: number;
    members: string[];
    comments: string[];
}
export function blockDetails({
    lectureName, 
    instructorName, 
    paragraph, 
    memberCnt, 
    members,
    comments
}: blockdetailsprops){

    return (
        <div>
            <div>
                <span>
                    {instructorName} /
                </span>
                <span>
                    {lectureName}
                </span>
            </div>
                <DetailParagraph paragraph={paragraph}/>
            <div>
                <DetailMember memberCnt={memberCnt} members={members}/>
                <DetailJoinBtn />
            </div>
            <div>
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