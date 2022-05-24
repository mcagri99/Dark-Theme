let ball = document.querySelector("#ball")
let mode = document.querySelector(".mode")
let body = document.querySelector("body")
let leftside = true;

ball.addEventListener('click', changeTheme) 

function changeTheme() {
if(leftside == true) {
    ball.style.left = "40px";
    ball.style.backgroundColor = "#111";
    mode.style.backgroundColor = "#fff";
    body.style.backgroundColor = "#111";
    leftside = false;
}

else {
    ball.style.left ="5px";
    ball.style.backgroundColor ="#fff"
    mode.style.backgroundColor = "#111"
    body.style.backgroundColor = "#fff";
    leftside = true;
}

}