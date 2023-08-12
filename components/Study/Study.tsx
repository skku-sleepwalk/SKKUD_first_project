import { IconClock, IconMapPin, IconVocabulary } from "@tabler/icons-react";
import style from "./Study.module.css";
import { useMediaQuery } from "react-responsive";
import { ActionButton } from "../Common/ActionButton/ActionButton";

export function Study() {
  const mobile = useMediaQuery({
    query: "(max-width:500px)",
  });

  return (
    <div className={style.container}>
      <div className={style.subjectContainer}>
        <IconVocabulary
          size={mobile ? "1.4rem" : "1.8rem"}
          stroke={1.2}
          color="#246633"
        />
        <div className={style.title}>프로그래밍 기초와 실습</div>
        <div className={style.professor}>/ 김영훈 교수님</div>
      </div>
      <div className={style.mainContainer}>
        <div className={style.box}>
          <div className={style.largeText}>Study 대표</div>
          <div className={style.wrapper}>내가 성대 1짱</div>
        </div>
        <div className={style.box}>
          <div className={style.largeText}>Study 소개</div>
          <div className={style.wrapper}>
            열정적으로 같이 공부하실 분들 구해요.
          </div>
        </div>
        <div className={style.box}>
          <div className={style.largeText}>Study 일정</div>
          <div className={style.wrapper}>
            <div className={style.scheduleBox}>
              <IconClock size={mobile ? "1.1rem" : "1.5rem"} stroke={1.2} />
              <div className={style.text}>매주 화, 목 6시</div>
            </div>
            <div className={style.scheduleBox}>
              <IconMapPin size={mobile ? "1.1rem" : "1.5rem"} stroke={1.2} />
              <div className={style.text}>온라인</div>
            </div>
          </div>
        </div>
        <div className={style.linkBox}>
          <ActionButton className={style.link}>
            Study 카카오톡 오픈채팅방으로 이동
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
