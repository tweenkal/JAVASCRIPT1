let btn = document.querySelector("#btn");

btn.onclick = () => {
    document.body.style.background = "pink";
};

let btn2 = document.querySelector("#btn2");

btn2.onmouseover = () => {
    document.body.style.background = "yellow";
};

let btn3 = document.querySelector("#btn3");

btn3.ondblclick = () => {
    document.body.style.background = "red";
};