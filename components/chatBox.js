class ChatBox {
    #element;

    constructor() {
        this.#element = document.createElement("div");
        this.#element.classList.add("chat-box");
    }

    render() {
        return this.#element;
    }
}