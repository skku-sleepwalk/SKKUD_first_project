import { IconCheck, IconLock, IconUser } from "@tabler/icons-react";
import style from "./Login.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginErrorModal } from "./LoginErrorModal/LoginErrorModal";
import { useRouter } from "next/router";
import { UnstylesButton } from "../Common/UnstyledButton/UnstyledButton";

export function Login() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>("");

  // 아이디/비번 받아오는 것 관련
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    setFocus,
    clearErrors,
  } = useForm();

  const onSubmit = (data: any) => {
    // 여기서 api 연결시
    if (data.id === "") {
      setError("id", {});
      setErrorMessage("아이디를 입력해주세요.");
      setFocus("id");
    } else if (data.password === "") {
      setError("password", {});
      setErrorMessage("비밀번호를 입력해주세요.");
      setFocus("password");
    }
  };

  // 로그인 상태 유지 관련
  const [isChecked, setIsChecked] = useState(false);
  const toggleIsChecked = () => {
    setIsChecked((prev) => !prev);
  };

  // 엔터 키 누를 시 submit 발생
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 기본 엔터 키 동작 막기
      handleSubmit(onSubmit)();
    }
  };

  // 에러 모달 관련
  const inputField = ["id", "password"];
  const errorModal = inputField.map((item) => {
    if (errors[item]) {
      return (
        <LoginErrorModal
          CloseModal={() => {
            clearErrors();
            setFocus(item);
          }}
          content={errorMessage}
        />
      );
    }
    return <></>;
  });

  return (
    // container로 wrapper 가운데 정렬
    <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
      {/* 에러 모달 */}
      {errorModal}
      {/* input과 버튼을 세로로 정렬해주는 flex div입니다. */}
      <div className={style.loginWrapper}>
        <div className={style.loginText}>로그인</div>
        <div className={style.loginInputBox} style={{ marginTop: "0.8rem" }}>
          <IconUser className={style.loginIcon} stroke={1.5} />
          <input
            className={style.loginInput}
            type="text"
            placeholder="아이디"
            onKeyDown={handleKeyDown}
            {...register("id")}
          ></input>
        </div>
        <div className={style.loginInputBox}>
          <IconLock className={style.loginIcon} stroke={1.5} />
          <input
            className={style.loginInput}
            type="password"
            placeholder="비밀번호"
            onKeyDown={handleKeyDown}
            {...register("password")}
          ></input>
        </div>
        <div className={style.loginNoticeBox}>
          <UnstylesButton
            className={`${style.checkButton} ${
              isChecked && style.checkedButton
            }`}
            onClick={() => toggleIsChecked()}
          >
            <IconCheck
              size={"0.6rem"}
              stroke={3}
              color={isChecked ? "#246633" : "gray"}
            />
          </UnstylesButton>
          <div className={style.loginNoticeText}>로그인 상태 유지</div>
        </div>
        <button className={style.loginLoginBtn} type="submit">
          로그인
        </button>
        <div className={style.buttonBox}>
          <UnstylesButton
            className={style.button}
            onClick={() => {
              router.replace("/join");
            }}
          >
            회원가입
          </UnstylesButton>
          {/* <button type="button" className={style.button}>
            아이디/비밀번호 찾기
          </button> */}
        </div>
      </div>
    </form>
  );
}
