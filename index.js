const chatWrapper = document.createElement("div");
chatWrapper.classList.add("wrapper");

const chatBox = new ChatBox();

const form = new Form({
    class: "message-form",
});

chatWrapper.appendChild(chatBox.render());
chatWrapper.appendChild(form.render());

document.body.appendChild(chatWrapper);
