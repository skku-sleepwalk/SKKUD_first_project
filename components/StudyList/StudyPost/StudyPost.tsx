import {
  IconClock,
  IconMapPin,
  IconUsersGroup,
  IconVocabulary,
} from "@tabler/icons-react";
import style from "./StudyPost.module.css";
import { useMediaQuery } from "react-responsive";
import { UnstylesButton } from "@/components/Common/UnstyledButton/UnstyledButton";

export interface StudyPostProps {
  isLast?: boolean;
}

export function StudyPost({ isLast }: StudyPostProps) {
  const mobile = useMediaQuery({
    query: "(max-width:500px)",
  });

  return (
    <UnstylesButton
      className={`${style.wrapper} ${!isLast && style.borderBottom}`}
    >
      <div className={style.header}>
        <IconVocabulary
          size={mobile ? "1.4rem" : "1.8rem"}
          stroke={1.2}
          color="#246633"
        />
        <div className={style.title}>프로그래밍 기초와 실습</div>
        <div className={style.professor}>김영훈 교수님</div>
      </div>
      <div className={style.description}>
        <p>프기실 같이 공부할 사람 구해요</p>
      </div>
      <div className={style.footer}>
        {/* 아래는 일단 데모에서는 제외 */}
        {/* <IconClock size={mobile ? "1.1rem" : "1.5rem"} stroke={1.2} />
        <div className={style.text}>매주 화, 목 6시</div>
        <IconMapPin size={mobile ? "1.1rem" : "1.5rem"} stroke={1.2} />
        <div className={style.text}>온라인</div>
        <IconUsersGroup size={mobile ? "1.1rem" : "1.5rem"} stroke={1.2} />
        <div className={style.text}>5명</div> */}
      </div>
    </UnstylesButton>
  );
}
