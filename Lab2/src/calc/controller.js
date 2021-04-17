// import ProgrammingCalculator from './model';
// import CalculatorView from './view';

class Controller {
    numbers = document.querySelectorAll('#numbers .btn');
    hex = document.querySelectorAll('#hex .btn');
    operators = document.querySelectorAll('#operators .btn');
    simpleOperators = document.querySelectorAll('#simple-operators .btn');
    inputProgramming = document.querySelector('#span-expression');
    numSystem = document.querySelectorAll('#num-system span');

    model;

    constructor() {
        this.view = new CalculatorView(this.numSystem, this.inputProgramming);
        this.model = new ProgrammingCalculator(this.onSystemChange, this.onTextChange);
        this.numbers.forEach((btn) => {
            btn.addEventListener('click', () => {
                this.model.onButtonClick(btn.innerText);
            });
        });
        this.simpleOperators.forEach((btn) => {
            btn.addEventListener('click', () => {
                this.model.onButtonClick(btn.innerText);
            });
        });
        this.operators.forEach((btn) => {
            btn.addEventListener('click', () => {
                this.model.onButtonClick(btn.innerText);
            });
        });
        this.hex.forEach((btn) => {
            btn.addEventListener('click', () => {
                this.model.onButtonClick(btn.innerText);
            });
        });
        this.numSystem.forEach((btn) => {
            btn.addEventListener('click', () => {
                this.model.changeNumSystem(btn.innerText);
            });
        });
    }

    onSystemChange = () => {
        this.view.chooseNumSystem(this.model.mode);
    };
    onTextChange = () => {
        this.view.onTextChange(this.model.lexems.join(''));
    };
}

class SimpleController {
    numbers = document.querySelectorAll('.bg-transparent.m-2 button span');
    input = document.querySelector('#input-simple');

    constructor() {
        this.view = new CalculatorView(null, this.input);
        this.model = new ProgrammingCalculator(this.onSystemChange, this.onTextChange);
        this.numbers.forEach((btn) => {
            btn.addEventListener('click', () => {
                this.model.onButtonClick(btn.innerText);
            });
        });
    }

    onTextChange = () => {
        this.view.onTextChange(this.model.lexems.join(''));
    };
}
