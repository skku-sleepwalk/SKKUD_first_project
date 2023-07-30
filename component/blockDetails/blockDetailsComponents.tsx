
import styles from './blockDetailsComponents.module.css'

// 팝업창의 각 컴포넌트 스타일링을 하는 문서입니다.
// 팝업창의 모든 컴포넌트를 여기서 작업합니다.
// 미완성입니다. 배치 작업 중에 떠나게 되어 스타일링은 다시 해야 할 것 같습니다..

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
    memberCnt: string;
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