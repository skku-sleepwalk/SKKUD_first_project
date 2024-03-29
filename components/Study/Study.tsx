import {
  IconCalendar,
  IconClock,
  IconLink,
  IconMapPin,
  IconVocabulary,
} from "@tabler/icons-react";
import style from "./Study.module.css";
import { useMediaQuery } from "react-responsive";
import { Study } from "@/types/study";
import { GetSemester } from "@/utils/getSemester";
import { GetDate } from "@/utils/getDate";

function extractKakaoLink(input: string): string | undefined {
  const urlPattern = /https?:\/\/open\.kakao\.com\S+/i; // Kakao 링크 패턴을 정규 표현식으로 정의합니다.

  // 정규 표현식과 매치되는 모든 링크를 추출합니다.
  const matches = input.match(urlPattern);

  if (matches && matches.length > 0) {
    // 매치된 첫 번째 링크를 반환합니다.
    return matches[0];
  } else {
    // 매치된 링크가 없는 경우 undefined를 반환합니다.
    return undefined;
  }
}

export interface StudyProps {
  data: Study;
}

export function Study({ data }: StudyProps) {
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

  // 오픈 채팅방 링크 추출
  const link = extractKakaoLink(data.content);

  return (
    <div className={style.container}>
      <div className={style.subjectContainer}>
        <IconVocabulary
          size={mobile ? "1.4rem" : "1.8rem"}
          stroke={1.2}
          color="#246633"
        />
        <div className={style.title}>{data.title}</div>
        <div className={style.professor}>/ {data.prof} 교수님</div>
      </div>
      <div className={style.mainContainer}>
        <div className={style.box}>
          <div className={style.largeText}>Study 대표</div>
          <div className={style.wrapper}>내가 성대 1짱</div>
        </div>
        <div className={style.box}>
          <div className={style.largeText}>
            <div>Study 소개</div>
            <div className={style.smallText}>
              ({GetDate(data.createdAt)} 작성)
            </div>
          </div>
          <div className={style.wrapper}>{data.content}</div>
        </div>
        <div className={style.box}>
          <div className={style.largeText}>Study 일정</div>
          <div className={style.wrapper}>
            <div className={style.scheduleBox}>
              <IconCalendar size={mobile ? "1.1rem" : "1.5rem"} stroke={1.2} />
              <div className={style.text}>{GetSemester(data.createdAt)}</div>
            </div>
            <div className={style.scheduleBox}>
              <IconClock size={mobile ? "1.1rem" : "1.5rem"} stroke={1.2} />
              <div className={style.text}>매주 {studyDay.join(", ")}</div>
            </div>

            {/* <div className={style.scheduleBox}>
              <IconMapPin size={mobile ? "1.1rem" : "1.5rem"} stroke={1.2} />
              <div className={style.text}>온라인</div>
            </div> */}
          </div>
        </div>
        {link && (
          <div className={style.linkWrapper}>
            <div className={style.linkBox}>
              <IconLink color="white" />
              <a className={style.link} href={link} target="_blank">
                Study 카카오톡 오픈채팅방으로 이동
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
