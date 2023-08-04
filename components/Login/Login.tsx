import { IconCheck, IconLock, IconUser } from "@tabler/icons-react";
import style from "./Login.module.css";
import { useState } from "react";

export function Login() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleIsChecked = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    // container로 wrapper 가운데 정렬
    <div className={style.container}>
      {/* input과 버튼을 세로로 정렬해주는 flex div입니다. */}
      <div className={style.loginWrapper}>
        <div className={style.loginText}>로그인</div>
        <div className={style.loginInputBox} style={{ marginTop: "0.8rem" }}>
          <IconUser className={style.loginIcon} stroke={1.5} />
          <input
            className={style.loginInput}
            type="text"
            placeholder="아이디"
          ></input>
        </div>
        <div className={style.loginInputBox}>
          <IconLock className={style.loginIcon} stroke={1.5} />
          <input
            className={style.loginInput}
            type="password"
            placeholder="비밀번호"
          ></input>
        </div>
        <div className={style.loginNoticeBox}>
          <button
            className={`${style.checkButton} ${
              isChecked && style.checkedButton
            }`}
            style={{ width: "1.2rem", height: "1.2rem" }}
            onClick={() => toggleIsChecked()}
          >
            <IconCheck
              size={"0.6rem"}
              stroke={3}
              color={isChecked ? "#246633" : "gray"}
            />
          </button>
          <div className={style.loginNoticeText}>로그인 상태 유지</div>
        </div>
        <button className={style.loginLoginBtn} type="submit">
          로그인
        </button>
        <div className={style.buttonBox}>
          <button className={style.button}>회원가입</button>
          <button className={style.button}>아이디/비밀번호 찾기</button>
        </div>
      </div>
    </div>
  );
}
