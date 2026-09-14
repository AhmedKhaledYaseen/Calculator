let isError = false;

function clearDisplay() {
    document.getElementById('display').innerText = '';
    isError = false;
}

function deleteValue() {
    if(isError) return;
    let display = document.getElementById('display').innerText;
    document.getElementById('display').innerText = display.slice(0, -1);
}

function append(value) {
    if(isError) return;
    let display = document.getElementById('display').innerText;
    document.getElementById('display').innerText = display + value;
}

function calc() {
    if(isError) return;
    let display = document.getElementById('display').innerText;
    try{
        document.getElementById('display').innerText = eval(display);
    }
    catch(error){
        document.getElementById('display').innerText = "ERROR!";
        isError = true;
    }
}