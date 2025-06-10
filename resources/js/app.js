import Alpine from "alpinejs";

const log = console.log;

Alpine.store("typer", {
    texts: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus dolores quae tempore molestias. Rerum, quae beatae nihil asperiores incidunt animi provident dolore et magni, temporibus mollitia rem culpa nulla.",

    currentTextsArray: [],
    tempTextsArray: [],
    tempInputValue: "",

    init() {
        this.currentTextsArray = textsDivider(this.texts);
    },

    checkLetter() {
        log("here goes checker");
    },

    inputChangeHandler(e) {
        e.target.value = e.target.value.replace(/  +/g, " ");
        this.tempTextsArray = textsDivider(e.target.value);
    },
});

function textsDivider(texts) {
    return texts.trim().split(/\s+/);
}

Alpine.start();
