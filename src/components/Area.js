import React from "react"

export default function Area(){
  const [output, setOutput] = React.useState()

    function calculateArea(e){
      e.preventDefault();
      const firstSideValue = Number(e.target[0].value);
      const secondSideValue = Number(e.target[1].value);
      const thirdSideValue = Number(e.target[2].value);

      if (
        firstSideValue + secondSideValue > thirdSideValue &&
        secondSideValue + thirdSideValue > firstSideValue &&
        firstSideValue + thirdSideValue > secondSideValue
      ) {
        const semiPerimeter =
          (firstSideValue + secondSideValue + thirdSideValue) / 2;
    
        const result = Math.sqrt(
          semiPerimeter *
            (semiPerimeter - firstSideValue) *
            (semiPerimeter - secondSideValue) *
            (semiPerimeter - thirdSideValue)
        ).toFixed(4);
        setOutput(`Area of a triangle using heron's formula is ${result} units`);
      } else {
        setOutput("Enter valid side lengths such that each side lengths");
      }
    }

    return(
        <div className="container">
          <h1 className="megrim-ff">Calculate Area of a triangle</h1>
        <form id="calculate-area" onSubmit={calculateArea}>
        <label className="input-label" htmlFor="first-side">
          <p className="clr-yellow">Enter first side of a triangle</p>
          <input className="input-text" required type="number" id="first-side" />
        </label>
        <label className="input-label" htmlFor="second-side">
          <p className="clr-yellow">Enter second side of a triangle</p>
          <input className="input-text" required type="number" id="second-side" />
        </label>
        <label className="input-label" htmlFor="third-side">
          <p className="clr-yellow">Enter third side of a triangle</p>
          <input className="input-text" required type="number" id="third-side" />
        </label>
        <button className="submit-btn" type="submit">Calculate</button>
      </form>
      <p className="output">{output}</p>
    </div>
    )
}