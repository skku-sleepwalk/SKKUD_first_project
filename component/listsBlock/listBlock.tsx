
import style from './listBlockStyle.module.css'

export interface listblockprops{
    lectureName: string;
    instructorName: string;
    paragraph: string;
    memberCnt: string;
    members: string[];
}
export function ListBlock({lectureName, instructorName, paragraph, memberCnt, members}: listblockprops){

    const showBlockInfo = () => {
        
    }

    return <div className={style.blockWrapper} onClick={showBlockInfo}>
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
    </div>;
}