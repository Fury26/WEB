class ProgrammingCalculator {
    mode = 'DEC';
    lexems = [];
    #onSystemChange = null;
    #onTextChange = null;

    constructor(onSystemChange, onTextChange) {
        this.#onSystemChange = onSystemChange;
        this.#onTextChange = onTextChange;
    }

    calculate() {
        const arr = this.lexems.map((l) => {
            switch (l) {
                case '^': {
                    return '**';
                }
                default:
                    return l;
            }
        });

        try {
            const res = eval(arr.join(''));
            return res;
        } catch (e) {
            return false;
        }
    }

    onNumberClick = (num) => {
        if (this.mode === 'OCT' && num > 8) return;
        if (this.mode === 'BIN' && num > 1) return;
        this.lexems.push(num);
    };

    onHexClick = (num) => {
        if (this.mode === 'HEX') this.lexems.push(num);
    };

    clear = () => {
        this.lexems.length = 0;
    };

    onButtonClick(text) {
        switch (text) {
            case 'DEL': {
                this.lexems.pop();
                break;
            }
            case 'CE': {
                this.clear();
                break;
            }
            case '=': {
                const result = this.calculate();
                if (result) {
                    this.clear();
                    this.lexems.push(result);
                    break;
                } else {
                    this.clear();
                    this.lexems.push('Error');
                    break;
                }
            }
            default: {
                if (!isNaN(text)) {
                    this.onNumberClick(+text);
                    break;
                }
                if (['A', 'B', 'C', 'D', 'E', 'F'].includes(text)) {
                    this.onHexClick(text);
                    break;
                }
                this.lexems.push(text);
                break;
            }
        }
        this.#onTextChange();
    }

    changeNumSystem = (system) => {
        this.mode = system;
        this.#onSystemChange();
    };

    // push = (lexem) => {
    //     this.lexems.push(lexem);
    // };
}
