class Button {
    #element;

    constructor(props) {
        this.#element = document.createElement("button");
        this.#element.innerText = "Отправить";
        this.#element.disabled = true;
    }

    makeDisabled(value) {
        this.#element.disabled = value;
    }

    onClick(callback) {
        this.#element.addEventListener("click", () => {
            callback();
        })
    }

    render() {
        return this.#element;
    }


}