<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @vite(['resources/js/app.js', 'resources/css/app.css'])
</head>

<body>
    <div @click="$refs.mainInputField.focus()" x-data
        class="relative h-screen w-screen bg-gray-800 flex items-center justify-center">
        <div class="relative">
            <div class="relative text-center flex justify-center font-bold text-3xl text-white uppercase">Chimp Typer
            </div>
            <div
                class="relative h-auto w-[80vw] py-8 rounded-xl mt-8 flex flex-wrap font-bold text-4xl gap-4 text-gray-100 tracking-wider">
                {{-- <div class="relative flex flex-wrap" x-html="$store.typer.checkLetter()"></div> --}}
            </div>
            <div class="opacity-0">
                <input type="text" x-ref="mainInputField" @keyup="$store.typer.checkLetter" autofocus>
            </div>
        </div>
    </div>
</body>

</html>
