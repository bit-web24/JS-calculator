function calculate(cal) {
    var a = document.querySelector('.show').innerText;
    var b = cal.innerText;
    var c = a.concat(b);
    document.querySelector('.show').innerText = c;
}
function evalize() {
    document.querySelector('.show').innerText = eval(document.querySelector('.show').innerText);
}
function cancleall() {
    document.querySelector('.show').innerText = ""
}

function multiply() {
    var x = document.querySelector('.show').innerText;
    var y = "*";
    var z = x.concat(y);
    document.querySelector('.show').innerText = z;
}
function power() {
    var p = document.querySelector('.show').innerText;
    var q = "**";
    var r = p.concat(q);
    document.querySelector('.show').innerText = r;
}
