import Alpine from "alpinejs";

Alpine.store("typer", {
    mainTexts: "Here we go again!",
    textsInput: "",

    textBeingRendered: "",
    arrayOfTextBeingRendered: [],

    challengeStarted: false,

    get mainTextWordsArray() {
        return this.mainTexts.trim().split(/\s+/);
    },

    init() {
        this.textBeingRendered = this.mainTexts;
        this.arrayOfTextBeingRendered = this.mainTextWordsArray;
    },

    startChallenge() {
        this.challengeStarted = true;
        console.log("the challenge");

        // const oneSecInterval = setInterval(() => {
        //     console.log("interval");
        // }, 1000);

        setTimeout(() => {
            // clearInterval(oneSecInterval);
            this.challengeStarted = false;
            console.log("challenge ended");
        }, 3000);
    },

    inputChangeHandler(e) {
        if (!this.challengeStarted) {
            this.startChallenge;
        }

        let value = e.target.value;

        value = value.replace(/\s+/g, " ").trimStart();
        e.target.value = value;

        this.textsInput = value;
        this.updateTextBeingRendered();
    },

    updateTextBeingRendered() {
        const inputWords = this.textsInput.trim().split(/\s+/);
        const mainWords = this.mainTextWordsArray;

        if (inputWords != "") {
            // Build the rendered text
            const renderedWords = [];

            // Push typed words first
            for (let i = 0; i < inputWords.length; i++) {
                renderedWords.push(inputWords[i]);
            }

            // Push remaining mainTexts words that are not yet typed
            for (let i = inputWords.length; i < mainWords.length; i++) {
                renderedWords.push(mainWords[i]);
            }

            this.textBeingRendered = renderedWords.join(" ");
            this.arrayOfTextBeingRendered = renderedWords;
        } else {
            this.arrayOfTextBeingRendered = this.mainTexts.trim().split(/\s+/);
        }
        return this.arrayOfTextBeingRendered;
    },
});

Alpine.start();
