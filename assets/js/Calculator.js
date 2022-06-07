export default class Calculator {
	constructor(previousOperationText, currentOperationText) {
		this.previousOperationText = previousOperationText;
		this.currentOperationText = currentOperationText;
		this.currentOperation = "";
	}
	// add number to calculator.
	addNum(digit) {
		if (digit === "." && this.currentOperationText.innerText.includes(".")) {
			return;
		}
		this.currentOperation = digit;
		this.updateScreen();
	}

	// update screen calculator.

	updateScreen(
		operationValue = null,
		operation = null,
		current = null,
		previous = null) {

		if (operationValue === null) {
			this.currentOperationText.innerText += this.currentOperation;
		} else {
			if (previous === 0) {
				operationValue = current;
			}
			this.previousOperationText.innerText = `${operationValue} ${operation}`;
			this.currentOperationText.innerText = "";
		}

	}

	processOperation(operation) {
		if (this.currentOperationText.innerText === "" && operation !== 'C') {
			if (this.previousOperationText.innerText !== "") {
				this.changeOperation(operation);
			}
			return;
		}
		let operationValue;
		const previous = +this.previousOperationText.innerText.split(" ")[0];
		const current = +this.currentOperationText.innerText;

		switch (operation) {
			case '+':
				operationValue = previous + current;
				this.updateScreen(operationValue, operation, current, previous);
				break
			case '-':
				operationValue = previous - current;
				this.updateScreen(operationValue, operation, current, previous);
				break
			case '/':
				operationValue = previous / current;
				this.updateScreen(operationValue, operation, current, previous);
				break
			case '*':
				operationValue = previous * current;
				this.updateScreen(operationValue, operation, current, previous);
				break
			case 'DEL':
				this.delOperator();
				break
			case 'CE':
				this.processClearOperatorCurrent();
				break
			case 'C':
				this.processClearOperator();
				break
			case '=':
				this.processEqualOperator();
				break
			default:
				return;
		}
	}

	delOperator() {
		this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);
	}
	changeOperation(operation) {
		const mathOperations = ['*', '/', '+', '-'];
		if (!mathOperations.includes(operation)) {
			return;
		}

		this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation;
	}

	// Clear all operations
	processClearOperator() {
		this.currentOperationText.innerText = "";
		this.previousOperationText.innerText = "";
	}

	processClearOperatorCurrent() {
		this.currentOperationText.innerText = "";
	}

	processEqualOperator(){
		const operation = this.previousOperationText.innerText.split(" ")[1];
		this.processOperation(operation);

	}
}