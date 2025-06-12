<!DOCTYPE html>
<html lang="en" class="bg-gray-800">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Monkey Clone</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
    <div x-data class="relative min-h-screen w-screen flex items-center justify-center">
        <div class="relative w-[900px] px-4">
            <div class="text-5xl text-gray-200 uppercase font-mono font-bold text-center mb-8">
                Monkey Clone
            </div>

            <!-- Rendered Typing Area -->
            <div class="text-3xl font-bold text-white flex flex-wrap gap-2">
                <template x-for="(word, wordIndex) in $store.typer.updateTextBeingRendered()" :key="wordIndex">
                    <div class="flex gap-1">
                        <template x-for="(letter, letterIndex) in word.split('')" :key="letterIndex">
                            <div x-text="letter"
                                :class="letter === $store.typer.mainTextWordsArray[wordIndex]?.[letterIndex] ?
                                    'text-white' :
                                    'text-red-500'">
                            </div>
                        </template>
                    </div>
                </template>
            </div>

            <!-- Typing Input -->
            <div class="mt-8">
                <input autofocus type="text" class="w-full text-white max-w-md px-4 py-2 rounded-md"
                    :value="$store.typer.textsInput" @input="$store.typer.inputChangeHandler($event)"
                    placeholder="Type here..." />
                <div class="flex">

                    <div class="text-white font-bold mt-3">Type anything to start challenge</div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
