import style from "./StudyTab.module.css";
import { ActionButton } from "@/components/Common/ActionButton/ActionButton";

export interface StudyTabProps {
  setManyTab: () => void;
  setNewTab: () => void;
  activeTab: string;
}

export function StudyTab({ setManyTab, setNewTab, activeTab }: StudyTabProps) {
  return (
    <div className={style.tabWrapper}>
      <ActionButton
        className={`${style.tabButton} ${
          activeTab === "many" && style.activeTabButton
        }`}
        onClick={setManyTab}
      >
        인원 많은 순
      </ActionButton>
      <ActionButton
        className={`${style.tabButton} ${
          activeTab === "new" && style.activeTabButton
        }`}
        onClick={setNewTab}
      >
        최신 순
      </ActionButton>
    </div>
  );
}
