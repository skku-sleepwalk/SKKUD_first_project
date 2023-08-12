import style from "./StudyListLayout.module.css";

export interface StudyListLayoutProps {
  searchSection: React.ReactNode;
  tabSection: React.ReactNode;
  children: React.ReactNode;
}

export function StudyListLayout({
  searchSection,
  tabSection,
  children,
}: StudyListLayoutProps) {
  return (
    <div className={style.container}>
      <div className={style.searchContainer}>{searchSection}</div>
      <div className={style.tabContainer}>{tabSection}</div>
      <div className={style.mainContainer}>{children}</div>
    </div>
  );
}
