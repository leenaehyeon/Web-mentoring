// 단계별로 진행할 순서 정리
// 검색 생활화! 외우지않기..
let score = 0;
let time = 10;
let isPlaying = false;

const wordInput = document.querySelector(".word-input");
const wordDisplay = document.querySelector(".word-display");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const button = document.querySelector(".button");
wordInput.addEventListener('input',()=>{
    if (wordInput.value === wordDisplay.innerText){
        score ++;
        scoreDisplay.innerText = score;
        wordInput.value ="";

        
    }
})

setInterval(countDown,1000);

buttonChange("게임 종료");
function countDown(){
    time > 0 ? time -- : isPlaying = false; //삼항연산자 (조건)? 참일경우 : 거짓일 경우
    timeDisplay.innerText = time;
}

function buttonChange(text){
    button.innerText = text; 
    text === "게임 시작" ? button.classList.remove('loading') : button.classList.add('loading'); 
}