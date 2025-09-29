let btn = document.querySelector("#btn");

btn.onclick = () => {
    console.log("btn1 is clicked");
}

let btn2 = document.querySelector("#btn2");
btn2.onclick = () => {
    console.log(document.body.style.background = "green");
}