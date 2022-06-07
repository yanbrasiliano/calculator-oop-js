import
Calculator
from "./Calculator.js";

// Events

const previousOperationText = document.querySelector('#previous-operation');
const currentOperationText = document.querySelector('#current-operation');
const buttons = document.querySelectorAll('#buttons-container button')

buttons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const value = e.target.innerText;
		if (+value >= 0 || value === ".") {
			calc.addNum(value);
		} else {
			calc.processOperation(value);
		}
	});

});
// Functions/Class



const calc = new Calculator(previousOperationText, currentOperationText);