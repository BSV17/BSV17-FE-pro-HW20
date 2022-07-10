class Form {
    #element;

    constructor(props) {
        this.#element = document.createElement("form");
        this.#element.classList.add(props.class);

        this.input = new Input();
        this.button = new Button();
    }

    inputHandler() {
        this.input.onChange(value => {
            if (value) {
                this.button.makeDisabled(false);
            } else {
                this.button.makeDisabled(true);
            }
        })
    }

    buttonHandler() {
        this.button.onClick((e) => {
            this.button.makeDisabled(true);
            const inputValue = this.input.returnInputValue();
            let newMessage = new Message(this.button, this.input);

            newMessage.sendMessage('user', inputValue);
            newMessage.sendMessage('bot', inputValue);

        })

    }

    render() {
        this.inputHandler();
        this.buttonHandler();
        [this.input, this.button].map(item => this.#element.appendChild(item.render()));
        return this.#element;
    }

}