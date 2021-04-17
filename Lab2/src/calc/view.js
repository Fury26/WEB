class CalculatorView {
    constructor(systems, text) {
        this.numSystems = systems;
        this.text = text;
    }

    chooseNumSystem = (active) => {
        this.numSystems.forEach((n) => {
            if (n.innerText === active) {
                n.classList.add('active-system');
            } else {
                n.classList.remove('active-system');
            }
        });
        this.text.innerText = 0;
    };

    onTextChange = (text) => {
        this.text.innerText = text.length ? text : '0.0';
    };
}
