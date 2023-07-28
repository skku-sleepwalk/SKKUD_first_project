import CommonInput from "../CommonInput/CommonInput";
import EmailStyle from "./EmailStyle.module.css"
import style from "./SignIn.module.css"

export function SignInForm() {
    return(
            <form className={style.wrapper}>
                <div className={style.id}>
                    <CommonInput label="아이디" placeholder="4~10자리 / 영문, 숫자" />
                </div>
                <div className={style.pw}>
                    <CommonInput label="비밀번호" placeholder="8~16자리 / 영문, 숫자, 특수문자" />
                </div>
                <div className={style.name}>
                   <CommonInput label="닉네임" placeholder="닉네임 입력" />
                </div>
                <div className={style.email}>
                    <div className={EmailStyle.EmailWrapper}>
                        <input type="text" placeholder="skku@g.skku.edu"></input>
                        <button type="button" className={EmailStyle.button}> 인증 요청 </button>
                    </div>
                    <input type="text" placeholder="인증번호 입력" className={EmailStyle.input}></input>
                </div>
                <button type="submit" className={`${EmailStyle.button} ${style.sumbitBtn}`}>
                    회원가입 완료
                </button>
            </form>
    );
}