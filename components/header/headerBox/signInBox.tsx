import headerBox from "./headerBox.module.css";

export default function SignInBox() {
  return (
    <div className={headerBox.signInBox}>
      <button type="button" className={headerBox.signInButton}>
        LOGIN
      </button>
    </div>
  );
}
