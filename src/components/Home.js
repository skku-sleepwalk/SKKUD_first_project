import React from 'react';
import { useNavigate } from "react-router-dom";
import header from './HomeHeader.module.css';
import section from './HomeQuiz.module.css';
import footer from './HomeFooter.module.css';

function Home(){
    let button = new Array();
    for(let i = 0; i < 6; i++) button[i] = `button${i}`;
    const buttonPairs = [
        [button[0], button[1]], 
        [button[2], button[3]], 
        [button[4], button[5]],
        ["Go to Result"]
    ];
    const quizArrs = ['quiz1', 'quiz2', 'quiz3', 'quizFinish'];
    const [step, setStep] = React.useState(0);
    const [buttonPair, setButtonPair] = React.useState(buttonPairs[step]);
    const [quizArr, setQuizArr] = React.useState(quizArrs[step]);
    const [answers, setAnswers] = React.useState([]);
    
    React.useEffect(() => {
        setButtonPair(buttonPairs[step]);
        setQuizArr(quizArrs[step]);
        console.log(answers);
    }, [step]);

    const navigate = useNavigate();
    function navigateToResult(){
        navigate("/result");
    }
    
    const onClick = (event) => {
        if(event.target.value === "Go to Result"){
            navigateToResult();
            return;
        };
        setAnswers((prev) => ([...prev, event.target.value]));
        setStep(prev => prev + 1);
    }

    return(
        <div>
            <header>
                <div className={header.container}>
                    <div>go home</div>
                    <div>user</div>
                </div>
            </header>
            <section>
                <div className={section.quiz_box}>
                    <div className={section.quiz}>{quizArr}</div>
                    <div className={section.ans}>
                        {
                            buttonPair.map((btn, key) => 
                                <button onClick={onClick} key={key} value={btn} className={section.button}>{btn}</button> 
                            )
                        }
                    </div>
                </div>
            </section>
            <footer className={footer.info}>something</footer>
        </div>
    )
}

export default Home;