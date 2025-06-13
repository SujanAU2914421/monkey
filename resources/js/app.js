import Alpine from "alpinejs";

Alpine.store("typer", {
    mainTexts:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    textsInput: "",

    mainTextsArrayFormat: [],
    arrayOfTextsInput: [],
    arrayOfTextBeingRendered: [],

    challengeNotComplete: true,
    challengeStarted: false,

    givenTime: 3,
    timeShower: 0,
    accuracy: 0,
    wordsPerMinute: 0,

    init() {
        this.mainTextsArrayFormat = this.mainTexts.trim().split(/\s+/);
        this.arrayOfTextBeingRendered = [...this.mainTextsArrayFormat];

        window.addEventListener("keydown", (e) => {
            const blockedKeys = [
                "ArrowLeft",
                "ArrowRight",
                "ArrowUp",
                "ArrowDown",
                "Tab",
                "Enter",
            ];

            if (blockedKeys.includes(e.key)) {
                e.preventDefault();
            }
        });
    },

    inputChangeHandler(e) {
        if (!this.challengeStarted && this.challengeNotComplete) {
            this.timer(
                this.challengeNotComplete,
                this.givenTime,
                this.timeShower
            );
        }
        this.challengeStarted = true;

        let value = e.target.value;

        value = value.replace(/\s+/g, " ").trimStart();
        e.target.value = value;

        this.textsInput = value;
        this.arrayOfTextsInput = this.textsInput.trim().split(/\s+/);

        let temp = this.arrayOfTextsInput.map((val, i) => {
            const original = this.mainTextsArrayFormat[i] || "";
            return this.smartMerge(val, original);
        });

        this.arrayOfTextBeingRendered = this.mergeMain(
            temp,
            this.mainTextsArrayFormat
        );
    },

    smartMerge(userInput, original) {
        if (!userInput) return original;

        userInput = userInput;
        original = original;

        for (let i = userInput.length; i >= 0; i--) {
            return userInput + original.slice(i);
        }

        return original;
    },

    mergeMain(mergedUserInput, mainTextsArrayFormat) {
        let temp = [];
        for (let i = 0; i < mainTextsArrayFormat.length; i++) {
            if (mergedUserInput[i] != undefined) {
                temp[i] = mergedUserInput[i];
            } else {
                temp[i] = mainTextsArrayFormat[i];
            }
        }
        return temp;
    },

    letterChecker(wordIndex, letterIndex) {
        const userWord = this.arrayOfTextsInput[wordIndex];
        const mainWord = this.mainTextsArrayFormat[wordIndex];

        if (!mainWord) return "text-gray-600";
        if (!userWord) return "text-gray-600";

        console.log(
            userWord,
            mainWord,
            userWord[letterIndex],
            mainWord[letterIndex]
        );
        if (userWord[letterIndex] === undefined) return "text-gray-600";

        return userWord[letterIndex] === mainWord[letterIndex]
            ? "text-white"
            : "text-red-500";
    },
    timer() {
        this.timeShower = this.givenTime;

        let counterInterval = setInterval(() => {
            this.timeShower--;

            if (this.timeShower <= 0) {
                clearInterval(counterInterval);

                this.scoreChecker();

                this.challengeNotComplete = false;
            }
        }, 1000);
    },

    scoreChecker() {
        this.wordsPerMinute =
            this.arrayOfTextsInput.length / (this.givenTime / 60);

        let count = 0;
        for (let i = 0; i < this.arrayOfTextsInput.length; i++) {
            if (this.arrayOfTextsInput[i] === this.mainTextsArrayFormat[i]) {
                count++;
            }
        }
        this.accuracy = (count / this.arrayOfTextsInput.length) * 100;
    },
});

Alpine.start();
