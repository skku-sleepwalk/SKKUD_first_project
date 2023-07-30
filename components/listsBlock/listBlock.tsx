
import style from './listBlockStyle.module.css'

export interface listblockprops{
    lectureName: string;
    instructorName: string;
    paragraph: string;
    memberCnt: string;
    members: string[];
}
export function ListBlock({lectureName, instructorName, paragraph, memberCnt, members}: listblockprops){

    // 클릭시 팝업 형식으로 스터디 정보가 나오도록 개발 중입니다. frontend/listBlock 브랜치에서 확인할 수 있습니다.
    const showBlockInfo = () => {
        
    }

    return <div className={style.blockWrapper} onClick={showBlockInfo}>
        {/* 이미지, 교수님 성함, 강좌 명이 포함된 첫번째 줄을 감싸는 div입니다. */}
        <div className={style.firstLine}>
            <img src='/book.png' className={style.img}></img>
            <span className={style.instructorName}>
                {instructorName} 교수님 / 
            </span>
            <span className={style.lectureName}>
                {lectureName}
            </span>
        </div>
        {/* 방의 설명글을 보여주는 줄을 감싸는 div입니다. */}
        <div className={style.normalText}>
            {paragraph}
        </div>
        {/* 모집 인원 수와 멤버의 프로필 사진을 보여주는 줄입니다. */}
        <div className={style.thirdLine}>
            {/* box class는 img에 상위 div height을 상속(inherit)하기 위한 클래스입니다. 박스를 제거하면 height이 상속되지 않아 이미지 원본 크기로 보여집니다. */}
            {/* 모든 이미지는 해당 라인의 height (thirdLine class)에 맞춰져있습니다. */}
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
                {/* 멤버의 이미지를 map으로 한번에 보여줍니다. */}
                {members.map((member) => (
                    <span key={member} className={style.box}>
                        <img src={`${member}.jpg`} className={style.circleImg} />
                    </span>
                ))}
            </div>
        </div>
    </div>;
}