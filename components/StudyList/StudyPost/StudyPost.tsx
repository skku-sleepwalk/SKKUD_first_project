import {
  IconClock,
  IconMapPin,
  IconUsersGroup,
  IconVocabulary,
} from "@tabler/icons-react";
import style from "./StudyPost.module.css";
import { useMediaQuery } from "react-responsive";
import { UnstylesButton } from "@/components/Common/UnstyledButton/UnstyledButton";
import { Study } from "@/types/study";
import { useRouter } from "next/router";

export interface StudyPostProps {
  data: Study;
}

export function StudyPost({ data }: StudyPostProps) {
  const router = useRouter();
  const mobile = useMediaQuery({
    query: "(max-width:500px)",
  });

  // 스터디 진행 요일 확인
  const dayOfWeek_EN = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const dayOfWeek_Ko = ["월", "화", "수", "목", "금", "토", "일"];
  let studyDay: string[] = [];
  dayOfWeek_EN.forEach((value, index) => {
    if (data[value as keyof Study] === 1) {
      // data 객체에 해당 요일에 대한 값이 존재하는 경우
      studyDay.push(dayOfWeek_Ko[index]);
    }
  });

  return (
    <UnstylesButton
      className={style.wrapper}
      onClick={() => router.replace(`/study/${data.postId}`)}
    >
      <div className={style.header}>
        <IconVocabulary
          size={mobile ? "1.4rem" : "1.8rem"}
          stroke={1.2}
          color="#246633"
        />
        <div className={style.title}>{data.title}</div>
        <div className={style.professor}>{data.prof}</div>
      </div>
      <div className={style.description}>{data.content}</div>
      <div className={style.footer}>
        <IconClock size={mobile ? "1.1rem" : "1.5rem"} stroke={1.2} />
        <div className={style.text}>매주 {studyDay.join(", ")}</div>
        {/* 아래는 일단 데모에서는 제외 */}
        {/* <IconMapPin size={mobile ? "1.1rem" : "1.5rem"} stroke={1.2} />
        <div className={style.text}>온라인</div>
        <IconUsersGroup size={mobile ? "1.1rem" : "1.5rem"} stroke={1.2} />
        <div className={style.text}>5명</div> */}
      </div>
    </UnstylesButton>
  );
}
