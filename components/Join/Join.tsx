import { useState } from "react";
import style from "./Join.module.css";
import { IconCheck } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { UnstylesButton } from "../Common/UnstyledButton/UnstyledButton";
import { LoginErrorModal } from "../Login/LoginErrorModal/LoginErrorModal";

interface CheckedState {
  use: boolean;
  info: boolean;
}

export function Join() {
  const [errorMessage, setErrorMessage] = useState<string>("");

  // 회원가입 정보 받아오는 것 관련
  const {
    register,
    formState: { errors },
    handleSubmit,
    setFocus,
    setError,
    clearErrors,
  } = useForm();

  const [email, setEmail] = useState("@g.skku.edu");
  const [isCertifi, setIsCertifi] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  // 이메일이 유효한지 확인
  let error: boolean | string = false;
  const onCertifi = (data: any) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; // 이메일 정규식

    const email: string = data.email;
    if (!email.match(emailRegex)) {
      error = "email";
      setErrorMessage("유효한 이메일 주소를 입력하세요.");
    } else if (!email.endsWith("@g.skku.edu")) {
      error = "email";
      setErrorMessage("성균관대 이메일만 사용 가능합니다.");
    }

    if (typeof error === "string") {
      setError(error, {});
      setFocus(error);
    } else {
      setIsCertifi(true);
    }
  };

  // 서비스 이용 약관 관련
  // use는 이용 약관/ info는 개인 정보의 체크 박스
  const [isChecked, setIsChecked] = useState<CheckedState>({
    use: false,
    info: false,
  });
  // 모두 동의는 use와 info가 모두 true인지 아닌지
  const isAllChecked = Object.values(isChecked).every(
    (value) => value === true
  );

  // key에 use나 info를 넣으면 toggle함
  const toggleIsChecked = (key: keyof CheckedState) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  // 모두 동의 클릭 시 모든 값을 변경
  const toggleIsAllChecked = () => {
    if (isAllChecked === true) {
      setIsChecked({ use: false, info: false });
    } else {
      setIsChecked({ use: true, info: true });
    }
  };

  const onSubmit = (data: any) => {
    // 입력 필드에 작성된 값이 유효한지 확인
    let error: boolean | string = false;
    if (data.id.length < 4 || !data.id.match(/^[A-Za-z0-9]+$/)) {
      error = "id";
      setErrorMessage("아이디 형식이 올바르지 않습니다.");
    } else if (data.emailVerify === undefined || data.emailVerify === "") {
      error = "emailVerify";
      setErrorMessage("이메일이 인증되지 않았습니다.");
    } else if (
      data.password.length < 8 ||
      !data.password.match(/^[A-Za-z0-9!@#$%^&*?~-]+$/)
    ) {
      error = "password";
      setErrorMessage("비밀번호 형식이 올바르지 않습니다.");
    } else if (password !== passwordVerify) {
      error = "passwordVerify";
      setErrorMessage("비밀번호가 일차하지 않습니다.");
    } else if (data.nickname.length < 2) {
      error = "nickname";
      setErrorMessage("닉네임이 너무 짧습니다.");
    } else if (!isAllChecked) {
      error = "allcheck";
      setErrorMessage(
        "서비스 이용 약관의 필수 약관에 모두 동의하지 않으셨습니다."
      );
    }

    if (typeof error === "string") {
      setError(error, {});
      setFocus(error);
    } else {
      // 여기서 api 연결시
      alert("회원가입!");
    }
  };

  // 에러 모달 관련
  const inputField = [
    "id",
    "email",
    "emailVerify",
    "password",
    "passwordVerify",
    "nickname",
    "allcheck",
  ];
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
    // container는 모바일 환경에서 wrapper 가운데 정렬을 위해
    <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
      {/* 에러 모달 */}
      {errorModal}
      <div className={style.wrapper}>
        <h2>회원 가입</h2>
        {/* 기본 정보 파트 */}
        {/* 모바일 일 경우 기본 정보 글씨 나타나지 X */}
        <h4 className={`${style.subTitle} ${style.displayNone}`}>기본 정보</h4>
        {/* 아이디 */}
        <div className={style.infoWrapper}>
          <div className={style.infoLabel}>아이디</div>
          <div className={style.infoFlexBox}>
            <input
              className={style.infoInput}
              type="text"
              maxLength={10}
              {...register("id")}
            />
            <div className={style.infoPlaceholder}>(영문/숫자, 4~10자)</div>
          </div>
        </div>
        {/* 이메일 */}
        <div className={style.infoWrapper}>
          <div className={style.infoLabel}>이메일</div>
          <div className={style.infoFlexBox}>
            <div className={style.infoRowBox}>
              <input
                className={style.infoInput}
                type="text"
                value={email}
                disabled={isCertifi ? true : false}
                {...register("email", {
                  onChange: (e) => {
                    setEmail(e.currentTarget.value);
                  },
                })}
              />
              <UnstylesButton
                className={style.certifiButton}
                onClick={handleSubmit(onCertifi)}
              >
                인증 요청
              </UnstylesButton>
            </div>
            {/* 인증 요청시 */}
            {isCertifi && (
              <div className={style.infoFlexBox}>
                <div className={style.infoRowBox}>
                  <input
                    className={style.infoInput}
                    type="text"
                    placeholder="인증번호 입력"
                    maxLength={6}
                    {...register("emailVerify")}
                  />
                  <UnstylesButton className={style.certifiButton}>
                    인증
                  </UnstylesButton>
                </div>
                {/* <div className={style.infoNotice}>인증에 성공하였습니다.</div> */}
                {/* <div className={style.infoNotice} style={{ color: "#246633" }}>
                  * 인증에 실패하였습니다.
                </div> */}
              </div>
            )}
          </div>
        </div>
        {/* 비밀번호 */}
        <div className={`${style.infoWrapper} ${style.infoMarginTop}`}>
          <div className={style.infoLabel}>비밀번호</div>
          <input
            className={style.infoInput}
            type="password"
            value={password}
            maxLength={16}
            {...register("password", {
              onChange: (e) => {
                setPassword(e.currentTarget.value);
              },
            })}
          />
          <div className={style.infoPlaceholder}>
            (영문/숫자/특수문자, 8~16자)
          </div>
        </div>
        {/* 비밀번호 확인 */}
        <div className={style.infoWrapper}>
          <div className={style.infoLabel}>비밀번호 확인</div>
          <div className={style.infoFlexBox}>
            <input
              className={style.infoInput}
              type="password"
              value={passwordVerify}
              maxLength={16}
              onChange={(e) => {
                setPasswordVerify(e.currentTarget.value);
              }}
            />
            {password !== passwordVerify && (
              <div className={style.infoNotice} style={{ color: "#246633" }}>
                * 비밀번호가 일치하지 않습니다.
              </div>
            )}
          </div>
        </div>
        {/* 닉네임 */}
        <div
          className={`${style.infoWrapper} ${style.infoWrapperBdrBtm} ${style.infoMarginTop}`}
        >
          <div className={style.infoLabel}>닉네임</div>
          <input
            className={style.infoInput}
            type="text"
            maxLength={6}
            {...register("nickname")}
          />
          <div className={style.infoPlaceholder}>(2~16자)</div>
        </div>
        {/* 서비스 이용 약관 파트 */}
        <h4 className={`${style.subTitle} ${style.titleMarginTop}`}>
          서비스 이용 약관
        </h4>
        <div className={style.serviceContainer}>
          {/* 전체 동의 */}
          <div className={style.serviceTopWrapper}>
            {/* 클릭 시 스타일이 변경됨 */}
            <button
              className={`${style.checkButton} ${
                isAllChecked && style.checkedButton
              }`}
              type="button"
              style={{ minWidth: "1.8rem", minHeight: "1.8rem" }}
              onClick={toggleIsAllChecked}
            >
              <IconCheck
                size={"1rem"}
                stroke={3}
                color={isAllChecked ? "#246633" : "gray"}
              />
            </button>
            <div>이용약관 및 개인 정보 수집 및 이용에 모두 동의합니다.</div>
          </div>
          {/* 이용약관 동의 */}
          <div className={style.serviceWrapper}>
            <div className={style.serviceTitle}>[필수] 이용약관 동의</div>
            <div className={style.scrollBox}>
              <p>
                성균관대학교 스터디 매칭 사이트인 "4.5"의 이용에 동의하십니까?
              </p>
              <p>
                성균관대학교 스터디 매칭 사이트인 "4.5"의 이용에 동의하십니까?
              </p>
              <p>
                성균관대학교 스터디 매칭 사이트인 "4.5"의 이용에 동의하십니까?
              </p>
              <p>
                성균관대학교 스터디 매칭 사이트인 "4.5"의 이용에 동의하십니까?
              </p>
              <p>
                성균관대학교 스터디 매칭 사이트인 "4.5"의 이용에 동의하십니까?
              </p>
              <p>
                성균관대학교 스터디 매칭 사이트인 "4.5"의 이용에 동의하십니까?
              </p>
            </div>
            <div className={style.serviceCheckBox}>
              <div>이용약관에 동의하십니까?</div>
              {/* 클릭 시 스타일이 변경됨 */}
              <button
                className={`${style.checkButton} ${
                  isChecked.use && style.checkedButton
                }`}
                type="button"
                style={{ width: "1.2rem", height: "1.2rem" }}
                onClick={() => toggleIsChecked("use")}
              >
                <IconCheck
                  size={"0.6rem"}
                  stroke={3}
                  color={isChecked.use ? "#246633" : "gray"}
                />
              </button>
              <div>동의함</div>
            </div>
          </div>
          {/* 개인 정보 수집 및 이용 동의 */}
          <div className={style.serviceWrapper}>
            <div className={style.serviceTitle}>
              [필수] 개인 정보 수집 및 이용 동의
            </div>
            <div className={style.scrollBox}>
              <p>아이디를 수집하는 것에 동의하십니까?</p>
              <p>이메일 주소를 수집하는 것에 동의하십니까?</p>
              <p>비밀번호를 수집하는 것에 동의하십니까?</p>
              <p>닉네임을 수집하는 것에 동의하십니까?</p>
              <p>닉네임이 타인에게 공개 될 수 있습니다.</p>
            </div>
            <div className={style.serviceCheckBox}>
              <div>개인 정보 수집 및 이용에 동의하십니까?</div>
              {/* 클릭 시 스타일이 변경됨 */}
              <button
                className={`${style.checkButton} ${
                  isChecked.info && style.checkedButton
                }`}
                type="button"
                style={{ width: "1.2rem", height: "1.2rem" }}
                onClick={() => toggleIsChecked("info")}
              >
                <IconCheck
                  size={"0.6rem"}
                  stroke={3}
                  color={isChecked.info ? "#246633" : "gray"}
                />
              </button>
              <div>동의함</div>
            </div>
          </div>
        </div>
        {/* 회원 가입 버튼 가운데 정렬 위해 */}
        <div className={style.joinButtonBox}>
          <UnstylesButton className={style.joinButton} type="submit">
            회원 가입
          </UnstylesButton>
        </div>
      </div>
    </form>
  );
}
