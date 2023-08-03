import { useState } from "react";
import style from "./Join.module.css";
import { IconCheck } from "@tabler/icons-react";

interface CheckedState {
  use: boolean;
  info: boolean;
}

export function Join() {
  const [isCertifi, setIsCertifi] = useState(false);

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

  return (
    // container는 모바일 환경에서 wrapper 가운데 정렬을 위해
    <div className={style.container}>
      <div className={style.wrapper}>
        <h2>회원 가입</h2>
        {/* 기본 정보 파트 */}
        {/* 모바일 일 경우 기본 정보 글씨 나타나지 X */}
        <h4 className={`${style.subTitle} ${style.displayNone}`}>기본 정보</h4>
        {/* 아이디 */}
        <div className={style.infoWrapper}>
          <div className={style.infoLabel}>아이디</div>
          <input className={style.infoInput} type="text" maxLength={10} />
          <div className={style.infoPlaceholder}>(영문/숫자, 4~10자)</div>
        </div>
        {/* 이메일 */}
        <div className={style.infoWrapper}>
          <div className={style.infoLabel}>이메일</div>
          <div className={style.infoBox}>
            <input
              className={style.infoInput}
              type="email"
              defaultValue="@g.skku.edu"
            />
            <button
              className={style.certifiButton}
              onClick={() => {
                setIsCertifi(true);
              }}
            >
              인증 요청
            </button>
            {/* 인증 요청시 */}
            {isCertifi && (
              <>
                <input
                  className={style.infoInput}
                  type="text"
                  placeholder="인증번호 입력"
                  maxLength={6}
                />
                <button className={style.certifiButton}>인증</button>
              </>
            )}
          </div>
        </div>
        {/* 비밀번호 */}
        <div className={`${style.infoWrapper} ${style.infoMarginTop}`}>
          <div className={style.infoLabel}>비밀번호</div>
          <input className={style.infoInput} type="password" maxLength={16} />
          <div className={style.infoPlaceholder}>
            (영문/숫자/특수문자, 8~16자)
          </div>
        </div>
        {/* 비밀번호 확인 */}
        <div className={style.infoWrapper}>
          <div className={style.infoLabel}>비밀번호 확인</div>
          <input className={style.infoInput} type="password" />
        </div>
        {/* 닉네임 */}
        <div
          className={`${style.infoWrapper} ${style.infoWrapperBdrBtm} ${style.infoMarginTop}`}
        >
          <div className={style.infoLabel}>닉네임</div>
          <div className={style.infoBox}>
            <input className={style.infoInput} type="text" maxLength={6} />
            <button className={style.certifiButton}>중복 확인</button>
            {/* <div className={style.infoNotice}>사용 가능한 닉네임입니다.</div> */}
            <div className={style.infoNotice} style={{ color: "#246633" }}>
              * 중복된 닉네임입니다.
            </div>
          </div>
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
              <p>dkfdifjdkf</p>
              <p>dkfdifjdkf</p>
              <p>dkfdifjdkf</p>
              <p>dkfdifjdkf</p>
              <p>dkfdifjdkf</p>
            </div>
            <div className={style.serviceCheckBox}>
              <div>이용약관에 동의하십니까?</div>
              {/* 클릭 시 스타일이 변경됨 */}
              <button
                className={`${style.checkButton} ${
                  isChecked.use && style.checkedButton
                }`}
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
              <p>dkfdifjdkf</p>
              <p>dkfdifjdkf</p>
              <p>dkfdifjdkf</p>
              <p>dkfdifjdkf</p>
              <p>dkfdifjdkf</p>
            </div>
            <div className={style.serviceCheckBox}>
              <div>개인 정보 수집 및 이용에 동의하십니까?</div>
              {/* 클릭 시 스타일이 변경됨 */}
              <button
                className={`${style.checkButton} ${
                  isChecked.info && style.checkedButton
                }`}
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
          <button className={style.joinButton} type="submit">
            회원 가입
          </button>
        </div>
      </div>
    </div>
  );
}
