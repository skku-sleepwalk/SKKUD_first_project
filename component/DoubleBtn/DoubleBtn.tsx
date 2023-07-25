import {useState} from 'react';
import greenStyles from "./Commongreenbtn.module.css";
import grayStyles from "./Commongraybtn.module.css";


export interface doublebtnprops {
  value1: string;
  value2: string;
}
export function DoubleBtn({ value1, value2 }: doublebtnprops){

  const [activateSelector, activateSelectorHandler] = useState(true);
    const toggleColor = () => {
      activateSelectorHandler((prev) => !prev);
    }

  return <div>
    <button onClick={toggleColor} disabled={activateSelector} className={activateSelector ? greenStyles.backgroundColor : grayStyles.backgroundColor}>{value1}</button>
    <button onClick={toggleColor} disabled={!activateSelector} className={!activateSelector ? greenStyles.backgroundColor : grayStyles.backgroundColor}>{value2}</button>
  </div>;
}