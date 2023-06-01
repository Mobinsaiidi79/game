// Variables
let score = document.querySelector(".score");
let start = document.querySelector(".start");
let elman = document.querySelector(".elman");
let myMotorImg = document.getElementById("myMotorimg");
let myAudio = document.getElementById("myAudio");
// Game start function
start.addEventListener("click", startGame);

function startGame() {
  start.classList.add("hide");
  elman.classList.remove("hide");
 

  n = 0;
  setInterval(() => {
    document.getElementById("score").innerText = `Score : ${n}`;
    n = n + 1;
    // Car position one
    let ecar1_left =Math.abs(document.getElementById('carimg1').getBoundingClientRect().left);
    let ecar1_right =Math.abs(document.getElementById('carimg1').getBoundingClientRect().right);
    let ecar1_top =Math.abs(document.getElementById('carimg1').getBoundingClientRect().top);
    let ecar1_bottom =Math.abs(document.getElementById('carimg1').getBoundingClientRect().bottom);
    // Car position two
    let ecar2_left =Math.abs(document.getElementById('carimg2').getBoundingClientRect().left);
    let ecar2_right =Math.abs(document.getElementById('carimg2').getBoundingClientRect().right);
    let ecar2_top =Math.abs(document.getElementById('carimg2').getBoundingClientRect().top);
    let ecar2_bottom =Math.abs(document.getElementById('carimg2').getBoundingClientRect().bottom);
    // Car position Three
    let ecar3_left =Math.abs(document.getElementById('carimg3').getBoundingClientRect().left);
    let ecar3_right =Math.abs(document.getElementById('carimg3').getBoundingClientRect().right);
    let ecar3_top =Math.abs(document.getElementById('carimg3').getBoundingClientRect().top);
    let ecar3_bottom =Math.abs(document.getElementById('carimg3').getBoundingClientRect().bottom);
    // Car position four
    let ecar4_left =Math.abs(document.getElementById('carimg4').getBoundingClientRect().left);
    let ecar4_right =Math.abs(document.getElementById('carimg4').getBoundingClientRect().right);
    let ecar4_top =Math.abs(document.getElementById('carimg4').getBoundingClientRect().top);
    let ecar4_bottom =Math.abs(document.getElementById('carimg4').getBoundingClientRect().bottom);
    
    // my motor position

    let myMotor_left =Math.abs(document.getElementById('myMotorimg').getBoundingClientRect().left);
    let myMotor_right =Math.abs(document.getElementById('myMotorimg').getBoundingClientRect().right);
    let myMotor_top =Math.abs(document.getElementById('myMotorimg').getBoundingClientRect().top);
    let myMotor_bottom =Math.abs(document.getElementById('myMotorimg').getBoundingClientRect().bottom);
 
    if(((ecar1_left <myMotor_left  && myMotor_left < ecar1_right ) || (ecar1_left <myMotor_right  && myMotor_right< ecar1_right )) &&
    ((ecar1_top <myMotor_top  && myMotor_top < ecar1_bottom ) || (ecar1_top <myMotor_bottom  && myMotor_bottom< ecar1_bottom))){
      GameOver()
    }

  
    if(((ecar2_left <myMotor_left  && myMotor_left < ecar2_right ) || (ecar2_left <myMotor_right  && myMotor_right< ecar2_right )) &&
    ((ecar2_top <myMotor_top  && myMotor_top < ecar2_bottom ) || (ecar2_top <myMotor_bottom  && myMotor_bottom< ecar2_bottom))){
      GameOver()
    }

    
    if(((ecar3_left <myMotor_left  && myMotor_left < ecar3_right ) || (ecar3_left <myMotor_right  && myMotor_right< ecar3_right )) &&
    ((ecar3_top <myMotor_top  && myMotor_top < ecar3_bottom ) || (ecar3_top <myMotor_bottom  && myMotor_bottom< eca31_bottom))){
      GameOver()
    }

    
    if(((ecar4_left <myMotor_left  && myMotor_left < ecar4_right ) || (ecar4_left <myMotor_right  && myMotor_right< ecar4_right )) &&
    ((ecar4_top <myMotor_top  && myMotor_top < ecar4_bottom ) || (ecar4_top <myMotor_bottom  && myMotor_bottom< ecar4_bottom))){
      GameOver()
    }
  }, 600);
  
}

// Motor movement function on the page

document.addEventListener("keydown", moveMotor);

function moveMotor(event) {
  let key = event.key;
  let step = 30;
  if (key === "w") {
    if (myMotorImg.offsetTop - step >= 10) {
      myMotorImg.style.top = myMotorImg.offsetTop - step + "px";
    }
  } else if (key === "s") {
    if (myMotorImg.offsetTop + myMotorImg.offsetHeight + step <= 675) {
      myMotorImg.style.top = myMotorImg.offsetTop + step + "px";
    }
  } else if (key === "a") {
    if (myMotorImg.offsetLeft - step >= 555) {
      myMotorImg.style.left = myMotorImg.offsetLeft - step + "px";
    }
  } else if (key === "d") {
    if (myMotorImg.offsetLeft + myMotorImg.offsetWidth + step <= 810) {
      myMotorImg.style.left = myMotorImg.offsetLeft + step + "px";
    }
  }
}

// Game or function

function GameOver(){
  myMotorImg.style.top= '90vh';
  myMotorImg.style.left='49%'
  start.classList.remove("hide");
  elman.classList.add("hide");
  myAudio.play();
  n=0
  document.getElementById("score").innerText = `Score : ${n}`;
}