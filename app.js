let gameSeq =[];
let userSeq =[];
let started = false;
let level =0;
let h2 = document.querySelector("h2");
let btns = ["yellow","red" , "purple","green"];

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")

    },250);

}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    // console.log(randIdx);
    let randcolor = btns[randIdx];
    gameSeq.push(randcolor);
    console.log(gameSeq);
    // console.log(randcolor);
    let randbtn = document.querySelector(`.${randcolor}`)
    // console.log(randbtn);
    btnFlash(randbtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp ,1000);
        }

    }
    
        
        else{
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br>press any key to restart`;
        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="#0f172a";

        },150);
        reset();
    }


}
function btnPresss() {
    console.log(this);
    let btn= this;
     userFlash(btn);
     let usercolor = btn.getAttribute("id");
     userSeq.push(usercolor);
     console.log(userSeq);
     checkAns(userSeq.length-1);
}


let allbtn = document.querySelectorAll(".btn")
for(let btn of allbtn){
    btn.addEventListener("click",btnPresss);
}

function reset()
{
    userSeq =[];
    gameSeq=[];
    level =0;
    started=false;
}



