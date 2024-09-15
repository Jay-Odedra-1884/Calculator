let display = document.querySelector(".inp");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".thr");
let four = document.querySelector(".fou");
let five = document.querySelector(".fiv");
let six = document.querySelector(".six");
let seven = document.querySelector(".sev");
let eight = document.querySelector(".eig");
let nine = document.querySelector(".nin");
let zero = document.querySelector(".zer");
let plus = document.querySelector(".plu");
let minus = document.querySelector(".min");
let multi = document.querySelector(".mul");
let divide = document.querySelector(".div");
let equal = document.querySelector(".equ");
let ac = document.querySelector(".ac");
let del = document.querySelector(".del");
let dot = document.querySelector(".dot");
let percentage = document.querySelector(".per");

one.onclick = () => {
    type_to(1);
}
two.onclick = () => {
    type_to(2);
}
three.onclick = () => {
    type_to(3);
}
four.onclick = () => {
    type_to(4);
}
five.onclick = () => {
    type_to(5);
}
six.onclick = () => {
    type_to(6);
}
seven.onclick = () => {
    type_to(7);
}
eight.onclick = () => {
    type_to(8);
}
nine.onclick = () => {
    type_to(9);
}
zero.onclick = () => {
    type_to(0);
}
plus.onclick = () => {
    type_to("+");
}
minus.onclick = () => {
    type_to("-");
}
multi.onclick = () => {
    type_to("*");
}
divide.onclick = () => {
    type_to("/");
}
percentage.onclick = () => {
    type_to("%");
}
dot.onclick = () => {
    type_to(".");
}

ac.onclick = () => {
    display.value = "";
}
del.onclick = () => {
    display.value = display.value.toString().slice(0,-1);
}

equal.onclick = () => {
    display.value = eval(display.value);
}

let type_to = text => {
    if(display.value == ""){
        display.value = text;
    }else{
        display.value += text;
    }
}

document.onkeyup = e => {
    if(e.key == "1" || e.key == "Num1"){
        type_to(1);
    }else if(e.key == "2" || e.key == "Num2"){
        type_to(2)
    }else if(e.key == "3" || e.key == "Num3"){
        type_to(3)
    }else if(e.key == "4" || e.key == "Num4"){
        type_to(4)
    }else if(e.key == "5" || e.key == "Num5"){
        type_to(5)
    }else if(e.key == "6" || e.key == "Num6"){
        type_to(6)
    }else if(e.key == "7" || e.key == "Num7"){
        type_to(7)
    }else if(e.key == "8" || e.key == "Num8"){
        type_to(8)
    }else if(e.key == "9" || e.key == "Num9"){
        type_to(9)
    }else if(e.key == "0" || e.key == "Num0"){
        type_to(0)
    }else if(e.key == "+" || e.key == "Num+"){
        type_to("+")
    }else if(e.key == "-" || e.key == "Num-"){
        type_to("-")
    }else if(e.key == "*" || e.key == "Num*"){
        type_to("*")
    }else if(e.key == "/" || e.key == "Num/"){
        type_to("/")
    }else if(e.key == "%" || e.key == "Num%"){
        type_to("%")
    }else if(e.key == "." || e.key == "Num."){
        type_to(".")
    }else if(e.key == "Enter" || e.key == "NumEnter"){
        display.value = eval(display.value);
    }else if(e.key == "Backspace"){
        display.value = display.value.toString().slice(0,-1);
    }else if(e.key == "Backspace" && e.key == "Shift"){
        display.value = "";
    }
}