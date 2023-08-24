import style from "./StudyTab.module.css";
import { ActionButton } from "@/components/Common/ActionButton/ActionButton";
import { useRouter } from "next/router";

export interface StudyTabProps {
  setNewTab: () => void;
  activeTab: string;
}

export function StudyTab({ setNewTab, activeTab }: StudyTabProps) {
  const router = useRouter();

  return (
    <div className={style.tabWrapper}>
      <ActionButton
        className={`${style.tabButton} ${style.activeTabButton}`}
        onClick={() => router.replace("/makeRoom")}
      >
        스터디 만들기
      </ActionButton>
      <div className={style.tabRightSection}>
        {/* 아래는 데모에서 제외 */}
        {/* <ActionButton
          className={`${style.tabButton} ${
            activeTab === "many" && style.activeTabButton
          }`}
          onClick={setManyTab}
        >
          인원 많은 순
        </ActionButton> */}
        <ActionButton
          className={`${style.tabButton} ${
            activeTab === "new" && style.activeTabButton
          }`}
          onClick={setNewTab}
        >
          최신 순
        </ActionButton>
      </div>
    </div>
  );
}
