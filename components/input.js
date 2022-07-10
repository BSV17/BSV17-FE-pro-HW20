class Input {
    #element;

    constructor() {
        this.#element = document.createElement("input");
        this.#element.type = "text";
        this.#element.placeholder = "Введите сообщение";
    }

    onChange(callback) {
        this.#element.addEventListener("input", () => {
            callback(this.#element.value);
        })
    }

    returnInputValue() {
        return this.#element.value;
    }

    clearInputValue() {
        this.#element.value = "";
    }

    render() {
        return this.#element;
    }
}