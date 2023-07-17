import header_box from './header_box.module.css'

export default function Sign_in_box() {
    return <div className={header_box.sign_in}>
        <button type="button" className={header_box.button}>Sign in</button>
    </div>;
  }