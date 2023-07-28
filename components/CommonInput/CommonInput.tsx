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
            {label !== 'x' ? <div className={style.labelWrapper}>
                <label className={style.label}> {label} </label>
            </div> : null}
            <input className={style.input} type="text" placeholder={placeholder}></input>
        </div>
    );
}