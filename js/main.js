"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
// event listener for the DOMContentLoaded event
window.addEventListener("DOMContentLoaded", domLoaded);
/**
 * returns hello world string
 * @returns the String "Hello World!"
 */
function hello() {
    return "Hello World!";
}
exports.hello = hello;
/**
 * turns click me to hello world and vice versa
 */
function helloWorld() {
    if (document != null) {
        var w = document.getElementById("hello").innerText;
        if (w === 'Hello World!') {
            document.getElementById("hello").innerText = "Click Me!";
        }
        else {
            document.getElementById("hello").innerText = hello();
        }
    }
}
function domLoaded() {
    var helloClick = document.getElementById("hello");
    helloClick.addEventListener("click", function () {
        helloWorld();
    });
}
//# sourceMappingURL=main.js.map