

var error = false;

function logError() {
    if(error) {
        console.error("error is true");
        console.warn('This error is not real');
    } else {
        console.log("%cno errors", "color:green;background:orange");
    }
}

logError();

function toggleError() {
    if(!error) {
        error = true;
    } else if(error) {
        error = false;
    }
    logError(); 
}

function checkVar(x) {
    console.log(typeof x);
}

var getInput = document.getElementById("inputText");
var outputP = document.getElementById("inputTyped");

//always returns a string because what's typed is a string :(
function useInput() {
    checkVar(getInput.value);
    // console.log(getInput.value);
    outputP.innerText = getInput.value;
    getInput.value = "";
    

}