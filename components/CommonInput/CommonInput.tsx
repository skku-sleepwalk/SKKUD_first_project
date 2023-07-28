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
            <div className={style.labelWrapper}>
                <label className={style.label}> {label} </label>
            </div>
            <input className={style.input} type="text" placeholder={placeholder}></input>
        </div>
    );
}