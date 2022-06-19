import React from "react";

export default function Quiz(){
    const [score, setScore] = React.useState(0)
    const data = [
        {
            question: "What do all the angles of a triangle add up to?",
            options: ["360deg","420deg","180deg","500deg"],
            answer: "180deg"
        },
        {
            question: "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
            options: ["25deg","90deg","45deg","60deg"],
            answer: "90deg"
        },
        {
            question: "There is a right triangle PQR where: angle Q = 90°; angle P = angle R. What is the measure of angles P and R?",
            options: ["85deg","65deg","45deg"],
            answer:"45deg"
        },
        {
            question: "The perimeter of scalene triangle with sides a, b, c is",
            options: ["a + b + c","2a","None of these"],
            answer:"a + b + c"
        },
        {
            question: "A scalene triangle has ___ lines of symmetry",
            options: ["two","no","15"],
            answer:"no"
        },
        {
            question: "If the largest angle in a triangle is 70°, what is the least possible value of the smallest angle of the triangle?",
            options: ["30deg","10deg"],
            answer: "30deg"
        }
    ]
    
   
    function quizResult(e){
        e.preventDefault();
        for(let i = 0; i < e.target.length; i++){
            if(e.target[i].type === "radio" && e.target[i].checked){
                console.log(e.target[i], e.target[i].value)
                const index = Number(e.target[i].name)
                if(data[index].answer === e.target[i].value){
                    setScore(score+1)
                }
            }
        }
    }


    function resetHandler(){
        setScore(0)
    }

    return(
            <div className="container">
                <header>
                    <h1 className="megrim-ff">Quiz</h1>
                </header>
                <h2>For each correct answer you score 1 point</h2>
                <form className="quiz-form" onSubmit={quizResult}>
                {data.map((item,quesIndex) =>{
                    return(
                        <div className="question-container">
                        <p className="question" key={quesIndex}>{item.question}</p>
                        {item.options.map((option, index) => {
                            return(
                                <label className="options" key={index}> 
                                <input name={quesIndex} type="radio" value={option}/><em>{option}</em>
                                </label>
                            )
                        })}
                        </div>
                    )
                })}
                <button className="submit-btn" type="submit">Submit Answers</button>
                <button className="reset-btn" type="reset" onClick={resetHandler}>Reset All Answers</button>
                </form>
                <p className="output">{ score && `Your total score is ${score} / 6` }</p>
            </div>
    )
}