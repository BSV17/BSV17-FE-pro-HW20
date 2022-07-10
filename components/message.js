class Message {
    #element;

    constructor(button, input) {
        this.#element = document.createElement("div");
        this.input = input;
        this.button = button;
        this.bot = new Bot();
    }

    async sendMessage(type, value) {
        const chatBoxElement = document.querySelector(".chat-box");
        if(type === 'user') {
            chatBoxElement.appendChild(this.createMessage(value, type));
            this.button.makeDisabled(true);
            this.input.clearInputValue();
        } else if (type === 'bot') {
            const messageRequest = () => {
                return this.bot.answerWithDelay(Math.floor(Math.random() * 3 + 1) * 1000, value)
            };

            const response = await messageRequest();

            if (response) {
                chatBoxElement.appendChild(this.createMessage(response, type));
                this.button.makeDisabled(false);
                this.input.clearInputValue();
            } else {
                window.location.reload();
            }
        }
    }

    createMessage(value, type) {
        const messageElement = document.createElement("div");
        messageElement.classList.add(`${type}-message`);
        messageElement.textContent = value;
        return messageElement;
    }
}
