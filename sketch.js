//https://wireframe.cc/JOS9qR


let xPos = 250;
let yPos = 250;
let ballsize = 50;
let score = 0;
let xDirection = 1; 
let yDirection = 1;
let clickAtempt = 6
let c = 255
let togepiImage;
let funny = "click to play again"

let gameover = false;
let hahaSuckaFish = false;
let rndNameBtnText = "CLICK GENARATOR BUTTON TO GET NAME";
// let changeingImg1 = "https://th.bing.com/th/id/OIP.H_AoCAl5HW1VNXwtxw5vdQHaHa?w=182&h=183&c=7&r=0&o=5&pid=1.7"
// let changeingImg2 = "https://th.bing.com/th/id/OIP.H_AoCAl5HW1VNXwtxw5vdQHaHa?w=182&h=183&c=7&r=0&o=5&pid=1.7"


function preload() {
    togepiImage = loadImage("images/togepi.png");
}

function setup () { 
    let canvas =createCanvas(1000, 1000);
    canvas.parent("myContainer");
    background(0);

    xSpeed = 1
    ySpeed = 1

    let rndNameBtn = document.getElementById('rndNameBtn');
    
    rndNameBtn.onclick = function () {
        let ndLen = nameData.names.length;
        rndNameBtnText = nameData.names[Math.floor(Math.random() * ndLen)];
    };
}

function gameoverDraw() {
    fill(255);
    image(togepiImage,250,250 ,1000, 1000);
    fill(255,255);
    textSize(20);
    text("How does it feel playing an unwinable game, loser!!" , 20, 40 );
    text("Final Score:" , 20 , 80);
    text(score, 130, 82);
    fill(0,0,255);
    rect (40,200,225,100);
    fill(255);
    textSize(25);
    text(funny, 49,250);
}

function hahaSuckaFishDraW() {
    textSize(60);
    fill(255)
    text("YOU FOOL, IN LIFE THERE" , 100, 400);
    text( "ARE NO SECOND CHANCES", 90, 500);
}

function draw() {
    noStroke();
    background(0);
 
    fill(0,0,255,c);
    rect(xPos, yPos, ballsize, ballsize);

    xPos += xSpeed * xDirection;
    yPos += ySpeed * yDirection

    if (xPos > 1000 || xPos < 0) {
        xDirection *= -1;
    }

    if (yPos> 1000 || yPos < 0) {
        yDirection *= -1;
    }

    fill(255,c);
    textSize(30);

    // text("Your_Score: ",score, 110, 42);
    text("Clicks left:", 675, 84 );
    text(clickAtempt, 830,84);

    let gameBoardDiv = document.querySelectorAll("#data div");
    fill(255,c);    
    text(`${ gameBoardDiv[0].innerHTML =  rndNameBtnText} ` + score,  20, 40);
   
    if (gameover) {
        c = 0;

        if (hahaSuckaFish) hahaSuckaFishDraW();
        else gameoverDraw();
    }
    
    if (score > 0) {
        let imgElem = document.getElementById("statusImg");
        let imgUrl = imgElem.getAttribute("src");

        if (score == 1) {
            imgUrl = imgData["imgStart"];
        }

        else if (score == 5) {
            imgUrl = imgData["imgAfter5"];
        }

        else if (score == 10) {
            imgUrl = imgData["imgAfter10"];
        }

        else if( score == 15){
            imgUrl = imgData["imgAfter15"];
        }

        imgElem.setAttribute("src", imgUrl);
    }

    

    
}

function mouseClicked() {
    if (gameover) {
        hahaSuckaFish = ( 
            mouseX > 40 &&
            mouseX < 265 && 
            mouseY > 200 && 
            mouseY < 300
        )
    }
    
    else {
        if  (mouseX > xPos && mouseX < xPos + 100 && mouseY > yPos && mouseY < yPos + 100){
            xPos = random(25,476);
            yPos = random(25,476);
            xSpeed += 1;
            ySpeed += 1;
            score++
            clickAtempt = 7;
        }

        if (
            mouseX > 0 && 
            mouseX < 1000 && 
            mouseY > 0 && 
            mouseY < 1000
        ){
            clickAtempt--;
            gameover = (clickAtempt == 0);
        }
    }
}


