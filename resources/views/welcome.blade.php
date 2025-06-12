<!DOCTYPE html>
<html lang="en" class="bg-gray-800">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Monkey Clone</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
    <div x-data="{ timerCount: 0 }" class="relative min-h-screen w-screen flex items-center justify-center">
        <div class="fixed top-0 right-0 z-10 h-20 w-20 flex items-center justify-center font-bold text-3xl text-white"
            x-init="$watch(() => $store.typer.timeShower, value => timerCount = value)" x-text="timerCount">
        </div>
        <div class="relative w-[900px] px-4">
            <div class="text-5xl text-gray-200 uppercase font-mono font-bold text-center mb-8">
                Monkey Clone
            </div>
            <template x-if="$store.typer.challengeNotComplete">
                <div class="relative">
                    <div class="relative flex gap-3 justify-center flex-wrap">
                        <template x-for="(oneWord, wordIndex) in $store.typer.arrayOfTextBeingRendered">
                            <div class="relative flex gap-[2px]">
                                <template x-for="(oneLetter, letterIndex) in oneWord">
                                    <div x-text="oneLetter" :class="$store.typer.letterChecker(wordIndex, letterIndex)"
                                        class="font-bold text-2xl"></div>
                                </template>
                            </div>
                        </template>
                    </div>

                    <div class="mt-8">
                        <div class="relative flex justify-center">
                            <input autofocus type="text"
                                class="w-full outline-none border text-white max-w-md px-4 py-2 rounded-md"
                                :value="$store.typer.textsInput" @input="$store.typer.inputChangeHandler($event)"
                                placeholder="Type here..." />
                        </div>
                        <div class="flex justify-center">
                            <div class="text-white font-bold mt-3">Type to start challenge</div>
                        </div>
                    </div>
                </div>
            </template>
            <template x-if="!$store.typer.challengeNotComplete">
                <div class="relative flex justify-center">
                    <div class="relative">
                        <div class="relative flex items-center justify-center gap-8">
                            <div class="relative">
                                <div class="relative text-xl text-gray-300">Accuracy</div>
                                <div class="relative text-white font-bold text-3xl mt-4">
                                    <span x-text="$store.typer.accuracy"></span>%
                                </div>
                            </div>
                            <div class="relative">
                                <div class="relative text-xl text-gray-300">WPM</div>
                                <div class="relative text-white font-bold text-3xl mt-4">
                                    <span x-text="$store.typer.wordsPerMinute"></span>
                                </div>
                            </div>
                        </div>
                        <div class="relative flex justify-center mt-8">
                            <div onclick="window.location.reload()"
                                class="h-10 px-8 rounded-md bg-white cursor-pointer text-gray-800 font-bold text-sm flex items-center justify-center">
                                Re Start?</div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</body>

</html>
