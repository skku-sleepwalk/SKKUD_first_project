import headerBox from "./headerBox.module.css";

export interface loginProps {
  isLogin: boolean;
}

export default function LoginBox({ isLogin }: loginProps) {
  return (
    <div className={headerBox.loginBox}>
      <button type="button" className={headerBox.loginButton}>
        {!isLogin && "LOGIN"}
        {isLogin && "MY PAGE"}
      </button>
    </div>
  );
}
