import { ReactNode, useState } from "react";
import style from "./AppShell.module.css";
import { Header } from "./Header/Header";
import { useRouter } from "next/router";
import { PopUpMenu } from "./PopUpMenu/PopUpMenu";

interface AppShellProps {
  children: ReactNode;
  isLogin?: boolean;
}

export function AppShell({ children, isLogin = false }: AppShellProps) {
  const router = useRouter();
  const [opened, setOpened] = useState(false);

  // main 페이지에서는 헤더가 나타나지 않도록
  const isHeader = !router.pathname.includes("/main");

  return (
    <div className={style.wrapper}>
      {isHeader && (
        <div className={style.headerSection}>
          <Header onOpen={() => setOpened(true)} isLogin={isLogin} />
        </div>
      )}
      <PopUpMenu
        onClose={() => {
          setOpened(false);
        }}
        opened={opened}
      />
      <div
        className={`${style.childrenSection} ${
          isHeader && style.childrenSectionPadding
        }`}
      >
        {children}
      </div>
    </div>
  );
}
