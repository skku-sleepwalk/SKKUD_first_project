import { ReactNode } from "react";
import style from "./AppShell.module.css";
import { Header } from "./Header/Header";
import { useRouter } from "next/router";

interface AppShellProps {
  children: ReactNode;
  isLogin?: boolean;
}

export function AppShell({ children, isLogin = false }: AppShellProps) {
  const router = useRouter();

  return (
    <div className={style.wrapper}>
      <div
        className={`${style.headerSection} ${
          router.pathname.includes("/main") && style.displayNone
        }`}
      >
        <Header isLogin={isLogin} />
      </div>
      <div className={style.childrenSection}>{children}</div>
    </div>
  );
}
