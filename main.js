"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const target = e.target;
        if (target.innerHTML == '=') {
            try {
                string = eval(string);
                input.value = string;
            }
            catch {
                input.value = "Error";
            }
        }
        else if (target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += target.innerHTML;
            input.value = string;
        }
    });
});