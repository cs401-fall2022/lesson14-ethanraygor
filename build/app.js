/**
 * returns hello world string
 * @returns the String "Hello World!"
 */
function hello() {
    return "Hello World!";
}
/**
 * turns clicck me to hello world and vice versa
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
export { hello, helloWorld };
//# sourceMappingURL=app.js.map