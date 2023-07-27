
import styles from './blockDetailsComponents.module.css'

type detailparagraphprops = {
    paragraph: string;
}
export function DetailParagraph({ paragraph }: detailparagraphprops){
    return (
        <div className={styles.detailParagraph}>
            <div className={styles.detailParagraphContent}>
                {paragraph}
            </div>
        </div>
    );
}

type detailmemberprops = {
    memberCnt: number;
    members: string[];
}
export function DetailMember({ memberCnt, members }: detailmemberprops){
    return (
        <div>
            {memberCnt} + {members}
        </div>
    );
}

export function DetailJoinBtn(){
    return (
        <button>

        </button>
    );
}

export function CommentBtn(){
    return (
        <div>

        </div>
    );
}

type commentblockprops = {
    comment: string;
}
export function CommentBlock({ comment }: commentblockprops){
    return (
        <div>

        </div>
    );
}

type detailheaderprops = {
    instructorName: string;
    lectureName: string;
}
export function DetailHedaer({ instructorName, lectureName }: detailheaderprops){
    return(
        <h1>
            {instructorName} / {lectureName}
        </h1>
    );
}