class Bot {
    #botMessages = [
        "Как дела?",
        "Хорошо выглядишь!",
        "Отличный день, не правда ли?",
        "Ты программист?",
        "Я устал",
        "Проверь свой код еще раз"
    ];

    #stopMessages = [
        "Пока",
        "До свидания",
        "Бывай",
        "Ой, все"
    ];


    constructor() {
        this.isChatting = true;
    }

    answer(message) {
        if (this.#stopMessages.includes(message)) {
            this.isChatting = !this.isChatting;
            return "До свидания";
        }
        if (this.isChatting) {
            return this.#botMessages[Math.floor(Math.random() * this.#botMessages.length)];
        }
    }

    answerWithDelay(ms, value = "") {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    resolve(this.answer(value))
                } catch (error) {
                    reject(error)
                }
            }, ms)
        });
    }
}
