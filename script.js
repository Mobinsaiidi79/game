let start=document.querySelector('.start')
let elman=document.querySelector('.elman')
let myMotorImg = document.getElementById("mymotorimg");

start.addEventListener('click' , startGame)

function startGame(){
    start.classList.add('hide')
    elman.classList.remove('hide')
}
document.addEventListener("keydown", moveMotor);
function moveMotor(event) {
    let key = event.key;
    let step = 25; 

   
    if (key === "w") {
        myMotorImg.style.top = (myMotorImg.offsetTop - step) + "px";
    } else if (key === "s") {
        myMotorImg.style.top = (myMotorImg.offsetTop + step) + "px";
    } else if (key === "a") {
        myMotorImg.style.left = (myMotorImg.offsetLeft - step) + "px";
    } else if (key === "d") {
        myMotorImg.style.left = (myMotorImg.offsetLeft + step) + "px";
    }
}



