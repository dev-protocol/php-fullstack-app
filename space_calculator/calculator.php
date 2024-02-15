<?php 
    session_start();
    
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/style.css" />
    <link
      href="https://fonts.cdnfonts.com/css/seven-segment"
      rel="stylesheet"
    />
    <title>Simple Calculator</title>
    <script src="script.js" defer></script>
  </head>

  <body class="flex items-center justify-center spaceImg">
    <br /><br />
    <div
      id="container"
      class="rounded-2xl p-2 text-center bg-gradient-to-tr from-green-500 via-pink-400 to-yellow-200 w-3/5"
    >
      <div
        id="clock"
        class="rounded-xl relative inline-block border-none text-xl p-1 font-bold bg-gray-400 seven-segment w-24 hover:shadow-sm"
      >
        00:00:00
      </div>

      <div
        id="displayScreen"
        class="rounded-xl border-none bg-gray-400 p-1 relative"
      ></div>
      <br />

      <div
        id="buttons"
        class="grid grid-cols-4 grid-rows-5 place-items-center h-96 gap-2 p-4"
      >
        <button
          class="digitButton h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-sky-400 cursor-pointer hover:border-sky-100 hover:bg-cyan-400 hover:text-indigo-600 active:border-4 active:border-blue-300 active:bg-slate-200 active:text-indigo-600"
          onclick="appendToDisplay('7')"
        >
          7
        </button>
        <button
          class="digitButton h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-sky-400 cursor-pointer hover:border-sky-100 hover:bg-cyan-400 hover:text-indigo-600 active:border-4 active:border-blue-300 active:bg-slate-200 active:text-indigo-600"
          onclick="appendToDisplay('8')"
        >
          8
        </button>
        <button
          class="digitButton h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-sky-400 cursor-pointer hover:border-sky-100 hover:bg-cyan-400 hover:text-indigo-600 active:border-4 active:border-blue-300 active:bg-slate-200 active:text-indigo-600"
          onclick="appendToDisplay('9')"
        >
          9
        </button>

        <button
          class="operationButton h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-sky-400 cursor-pointer hover:border-sky-100 hover:bg-cyan-400 hover:text-indigo-600 active:border-4 active:border-blue-300 active:bg-slate-200 active:text-indigo-600"
          onclick="appendToDisplay('/')"
        >
          &div;
        </button>

        <button
          class="digitButton h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-sky-400 cursor-pointer hover:border-sky-100 hover:bg-cyan-400 hover:text-indigo-600 active:border-4 active:border-blue-300 active:bg-slate-200 active:text-indigo-600"
          onclick="appendToDisplay('4')"
        >
          4
        </button>
        <button
          class="digitButton h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-sky-400 cursor-pointer hover:border-sky-100 hover:bg-cyan-400 hover:text-indigo-600 active:border-4 active:border-blue-300 active:bg-slate-200 active:text-indigo-600"
          onclick="appendToDisplay('5')"
        >
          5
        </button>
        <button
          class="digitButton h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-sky-400 cursor-pointer hover:border-sky-100 hover:bg-cyan-400 hover:text-indigo-600 active:border-4 active:border-blue-300 active:bg-slate-200 active:text-indigo-600"
          onclick="appendToDisplay('6')"
        >
          6
        </button>

        <button
          class="operationButton h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-sky-400 cursor-pointer hover:border-sky-100 hover:bg-cyan-400 hover:text-indigo-600 active:border-4 active:border-blue-300 active:bg-slate-200 active:text-indigo-600"
          onclick="appendToDisplay('*')"
        >
          &times;
        </button>

        <button
          class="digitButton h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-sky-400 cursor-pointer hover:border-sky-100 hover:bg-cyan-400 hover:text-indigo-600 active:border-4 active:border-blue-300 active:bg-slate-200 active:text-indigo-600"
          onclick="appendToDisplay('1')"
        >
          1
        </button>
        <button
          class="digitButton h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-sky-400 cursor-pointer hover:border-sky-100 hover:bg-cyan-400 hover:text-indigo-600 active:border-4 active:border-blue-300 active:bg-slate-200 active:text-indigo-600"
          onclick="appendToDisplay('2')"
        >
          2
        </button>
        <button
          class="digitButton h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-sky-400 cursor-pointer hover:border-sky-100 hover:bg-cyan-400 hover:text-indigo-600 active:border-4 active:border-blue-300 active:bg-slate-200 active:text-indigo-600"
          onclick="appendToDisplay('3')"
        >
          3
        </button>

        <button
          class="operationButton h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-sky-400 cursor-pointer hover:border-sky-100 hover:bg-cyan-400 hover:text-indigo-600 active:border-4 active:border-blue-300 active:bg-slate-200 active:text-indigo-600"
          onclick="appendToDisplay('-')"
        >
          &minus;
        </button>

        <button
          class="digitButton h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-sky-400 cursor-pointer hover:border-sky-100 hover:bg-cyan-400 hover:text-indigo-600 active:border-4 active:border-blue-300 active:bg-slate-200 active:text-indigo-600"
          onclick="appendToDisplay('0')"
        >
          0
        </button>
        <button
          class="commaButton h-16 aspect-square text-4xl rounded-2xl consolas border-4 border-double border-sky-400 cursor-pointer hover:border-sky-100 hover:bg-cyan-400 hover:text-indigo-600 active:border-4 active:border-blue-300 active:bg-slate-200 active:text-indigo-600"
          onclick="appendToDisplay('.')"
        >
          &dot;
        </button>
        <button
          class="h-16 text-4xl aspect-square rounded-2xl consolas border-4 border-double border-sky-400 cursor-pointer hover:border-sky-100 hover:bg-cyan-400 hover:text-indigo-600 active:border-4 active:border-blue-300 active:bg-slate-200 active:text-indigo-600"
          onclick="clearDisplay()"
          id="clearButton"
        >
          C
        </button>
        <button
          class="operationButton h-16 text-4xl aspect-square rounded-2xl consolas border-4 border-double border-sky-400 cursor-pointer hover:border-sky-100 hover:bg-cyan-400 hover:text-indigo-600 active:border-4 active:border-blue-300 active:bg-slate-200 active:text-indigo-600"
          onclick="appendToDisplay('+')"
        >
          &plus;
        </button>

        <button
          class="parButton h-16 text-4xl aspect-square rounded-2xl consolas border-4 border-double border-sky-400 cursor-pointer hover:border-sky-100 hover:bg-cyan-400 hover:text-indigo-600 active:border-4 active:border-blue-300 active:bg-slate-200 active:text-indigo-600"
        >
          &lpar;
        </button>
        <button
          class="parButton h-16 text-4xl aspect-square rounded-2xl consolas border-4 border-double border-sky-400 cursor-pointer hover:border-sky-100 hover:bg-cyan-400 hover:text-indigo-600 active:border-4 active:border-blue-300 active:bg-slate-200 active:text-indigo-600"
        >
          &rpar;
        </button>

        <button
          class="eraseButton h-16 text-4xl aspect-square rounded-2xl consolas border-4 border-double border-sky-400 cursor-pointer hover:border-sky-100 hover:bg-cyan-400 hover:text-indigo-600 active:border-4 active:border-blue-300 active:bg-slate-200 active:text-indigo-600"
          onclick="eraser()"
        >
          &LeftArrow;
        </button>
        <button
          class="equalityButton h-16 text-4xl aspect-square rounded-2xl consolas border-4 border-double border-sky-400 cursor-pointer hover:border-sky-100 hover:bg-cyan-400 hover:text-indigo-600 active:border-4 active:border-blue-300 active:bg-slate-200 active:text-indigo-600"
          onclick="calculate()"
        >
          &equals;
        </button>
      </div>
    </div>
  </body>
</html>
