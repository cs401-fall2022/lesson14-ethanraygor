/**
 * returns hello world string
 * @returns the String "Hello World!"
 */
 function hello (): string{
    return "Hello World!";
}

/**
 * turns clicck me to hello world and vice versa
 */
 function helloWorld(){
    if(document != null){
        let w = document.getElementById("hello").innerText;
        if(w === 'Hello World!'){
            document.getElementById("hello").innerText = "Click Me!"; 
        }else{
            document.getElementById("hello").innerText = hello();
        }
    }
}

let helloClick = document.getElementById("hello");

helloClick.addEventListener("click", function(){
    helloWorld();
});