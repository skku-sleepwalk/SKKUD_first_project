export interface listblockprops{
    lectureName: string;
    instructorName: string;
    paragraph: string;
    memberCnt: number;
    members: string[];
}
export function ListBlock({lectureName, instructorName, paragraph, memberCnt, members}: listblockprops){

    return <div>
        <div>
            <img />
            <span>
                {instructorName}/ 
            </span>
            <span>
                {lectureName}
            </span>
        </div>
        <div>
            {paragraph}
        </div>
        <div>
            <div>
                <img />
                <span>
                    {memberCnt}명
                </span>
            </div>
            <div>
                <span>
                    members
                </span>
                {members.map((member) => (<span><img src={member} /></span>))}
            </div>
        </div>
    </div>;
}