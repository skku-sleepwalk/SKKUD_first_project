import CommonInput from "../CommonInput/CommonInput";
import EmailStyle from "./EmailStyle.module.css";
import style from "./SignIn.module.css";


export function SignInForm() {
    return(
            // grid로 가운데 정렬 하였습니다. email을 제외하고 모든 클래스는 grid area를 지정하기 위한 클래스입니다.
            <form className={style.wrapper}>
                <div className={style.id}>
                    {/* CommonInput 컴포넌트는 라벨과 input을 반환합니다. */}
                    <CommonInput label="아이디" placeholder="4~10자리 / 영문, 숫자" />
                </div>
                <div className={style.pw}>
                    <CommonInput label="비밀번호" placeholder="8~16자리 / 영문, 숫자, 특수문자" />
                </div>
                <div className={style.name}>
                   <CommonInput label="닉네임" placeholder="닉네임 입력" />
                </div>
                {/* 이메일 아래 쪽에 회원가입 완료 버튼과 틈을 주기 위해 margin을 주었습니다. */}
                <div className={style.email}>
                    {/* EmailStyle css module에서 grid로 이메일과 버튼의 위치를 배치하고 button의 스타일링을 했습니다. */}
                    {/* 이메일 확인 블럭만 배치가 달라 컴포넌트로 만들지 않고 여기에 바로 구현했습니다. */}
                    <div className={EmailStyle.EmailWrapper}>
                        <div className={EmailStyle.email}>
                            <CommonInput label="email" placeholder="skku@g.skku.edu" />
                        </div>
                        <button type="button" className={`${EmailStyle.button} ${EmailStyle.buttonArea}`}> 인증 요청 </button>
                    </div>
                        {/* CommonInput의 label에 x를 보내면 label 없이 input만 반환됩니다. */}
                        <CommonInput label="x" placeholder="인증번호 입력" />
                </div>
                <button type="submit" className={`${EmailStyle.button} ${style.sumbitBtn}`}>
                    회원가입 완료
                </button>
            </form>
    );
}