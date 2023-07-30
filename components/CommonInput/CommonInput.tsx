import style from './CommonInput.module.css'

export interface commoninputprops {
    placeholder: string;
    label: string;
}
export default function CommonInput(
    {
        placeholder,
        label
    }: commoninputprops
) {
    return(
        <div className={style.wrapper}>
            {/* 라벨에 x가 들어오면 라벨을 출력하지 않습니다. 인풋만 리턴하고 싶을 때 사용합니다. */}
            {label !== 'x' ? <div className={style.labelWrapper}>
                <label className={style.label}> {label} </label>
            </div> : null}
            <input className={style.input} type="text" placeholder={placeholder}></input>
        </div>
    );
}