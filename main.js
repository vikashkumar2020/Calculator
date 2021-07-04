var scr = document.querySelector('.scr');
var key = document.getElementsByClassName("key");

function isOperator(value) {
    if (value == "+" || value == "-" || value == "*" || value == "/")
        return true;
    else {
        return false;
    }
}

var num1 = 0;
var num2 = null;
var operator = null;

for (var i = 0; i < 19; i++) {
    key[i].addEventListener('click', function () {

        var value = this.getAttribute('value');
        var text = scr.innerText.trim();

        if (isOperator(value)) {
            operator = value;
            num1 = parseFloat(text);
            scr.innerText = "";
        } else if (value == "ac") {
            scr.innerText = "";
        } else if (value == "sym") {
            num1 = parseFloat(text);
            num1 = -1 * num1;
            scr.innerText = num1;
        } else if (value == ".") {
            if (text.length && !text.includes('.')) {
                scr.innerText = text + '.';
            }
        } else if (value == "%") {
            num1 = parseFloat(text);
            num1 = num1 / 100;
            scr.innerText = num1
        } else if (value == "=") {
            num2 = parseFloat(text);
            var result = eval(num1 + ' ' + operator + ' ' + num2);
            if (result) {
                scr.innerText = result;
                num1 = result;
                num2 = null;
                operator = null;
            }
        } else {
            scr.innerText += value;
        }
    });
}