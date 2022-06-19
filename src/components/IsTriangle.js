import React from "react";

export default function IsTriangle(){
    const [isTriangle, setIsTriangle] = React.useState(null)
    var output;

    function sumOfAngles(angle1, angle2, angle3){
        const sum = angle1 + angle2 + angle2
        return sum;
    }

    function isATriangle(e){
        e.preventDefault();
        const sum = sumOfAngles(
            Number(e.target[0].value),
            Number(e.target[1].value),
            Number(e.target[2].value));
            if(sum === 0){
                setIsTriangle(undefined)
            }
            else{
                sum === 180 ? setIsTriangle(true) : setIsTriangle(false)
            }
    }

    if(isTriangle === null){
        output=""
    }
    else if(isTriangle === undefined){
       output = "Please enter valid values"
    }
    else if(isTriangle){
        output = `Yes, the Angles form a Triangle`
    }
    else{
        output = `The angles does not form ❌ a Triangle`
    }

    return(
        <div className="container">
            <header>
            <h1 className="megrim-ff">IsTriangle</h1>
            </header>
            <main>
                <form onSubmit={isATriangle}>
                    <label className="input-label" htmlFor="angle-one">
                        <p className="clr-yellow">Angle1</p>
                    </label>
                    <input type="number" className="input-text angle-input" id="angle-one" />
                    <label className="input-label" htmlFor="angle-two">
                        <p className="clr-yellow">Angle2</p>
                    </label>
                    <input type="number" className="input-text angle-input" id="angle-two" />
                    <label className="input-label" htmlFor="angle-three">
                        <p className="clr-yellow">Angle3</p>
                    </label>
                    <input type="number" className="input-text angle-input" id="angle-three" />
                    <button className="submit-btn" id="is-triangle-btn">Is Triangle?</button>
                </form>
               
            <p id="output" className="output">
                {output}
            </p>
            </main>
        </div>
    )
}