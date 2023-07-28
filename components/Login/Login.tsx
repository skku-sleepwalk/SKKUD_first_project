
import style from './Login.module.css'

export function LoginHeader() {
    return(
    <div className={style.OuterWrapper}>
        <h1 className={style.HeaderContent}>
            로그인
        </h1>
    </div>
    );
}

export function LoginForm() {
    return(
        <div className={style.OuterWrapper}>
            <form className={style.LoginFormInnerWrapper}>
                <div className={style.LoginFormcontentWrapper}>
                    <input className={style.LoginFormInput} type="text" placeholder="아이디"></input>
                    <input className={style.LoginFormInput} type="password" placeholder="비밀번호"></input>
                    <button className={style.LoginFormLoginBtn} type="submit">로그인</button>
                    <button className={style.LoginFormSigninBtn} type="button">회원가입</button>
                </div>
            </form>
        </div>
        );
}
  