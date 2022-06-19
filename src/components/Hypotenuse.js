import React from "react";

export default function Hypotenuse(){
    const [output, setOutput] = React.useState();

    function calculateSumOfSquares(a,b){
        const sumOfSquares = (a * a) + (b * b);
        return sumOfSquares;
    }

    function calculateHypotenuse(e){
        e.preventDefault();
        const sumOfSquares = calculateSumOfSquares(
            Number(e.target[0].value),
       Number(e.target[1].value)
        )
        const lengthOfHypotenuse = Math.sqrt(sumOfSquares).toFixed(4);
        setOutput(`The length of hypotenuse is ${lengthOfHypotenuse}`)
    }

    return(
        <div className="container">
             <h1 className="megrim-ff">Calculate Hypotenuse of a triangle</h1>
            <form onSubmit={calculateHypotenuse}>
            <label className="input-label" htmlFor="a">
                <p className="clr-yellow">Enter base value (a) =</p>
            <input type="number" className="input-text side-input" />
            </label>
                    <label className="input-label" htmlFor="b">
                        <p className="clr-yellow">Enter height value (b) =</p>
                        <input type="number" className="input-text side-input" />
                    </label>
                <button className="submit-btn" id="calculate-hypotenuse-btn">
                    Calculate hypotenuse
                </button>
            </form>
              <h2>Hypotenuse</h2>
            <h3>Formula:</h3>
            <h4>√(base<sup><small>2</small></sup> + height<sup><small>2</small></sup>)</h4>
            <p className="output">{output}</p>
        </div>
    )
}