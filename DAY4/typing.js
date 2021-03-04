const GAME_TIME = 10;
let wordList = [];

let wordCount= 0;
let score = 0;
let time = GAME_TIME; //function  에 넣을 떄 고정된 값 10으로 넣어야 되서  const로10 지정/ GAMETIME은 아래에서 1씩 줄어드는 역할
let isplaying = true; //게임이 현재 진행중인지 아닌지 확인하는 값, true/false

const wordDisplay = document.querySelector('.word-display');
const wordInput = document.querySelector('.word-input');
const scoreTag = document.querySelector('.score');
const timeTag = document.querySelector('.time');


//단어가져오기
fetch ('http://random-word-api.herokuapp.com/word?number=30')
    .then(function(response){
        return response.json();
    })
    .then(function(word30){
        console.log(word30);
        wordList = word30;
    
    //기본값 Setting
        wordDisplay.innerText= wordList[wordCount]; //워드 디스플레이에 단어 출력
        timeTag.innerText = GAME_TIME; //  10초내에 1단어
        wordInput.addEventListener('input',checkMatch) //입력!! input
    })

//시간을 줄이는 함수
let timeInterval = setInterval(countDown, 1000); // 1초에 한번 countDown  함수를 실행시켜줘 , 1000 이 1초 (ms) 

function countDown(){
    //  3 항 연산자/ 조건 ? 조건에 부합되는 경우, 실행될 소스 : 아닌 경우 소스
    time > 0 ?  time -- : isplaying = false;    
    console.log('countdown');
    if (isplaying === false){
        clearInterval(timeInterval); //serInterval을 끝내는 법.claerInterval
    }
    timeTag.innerText = time;    
}

function checkMatch(){
    //사용자의 입력값이 디스플레이 되는 단어와 일치하는지 확인
    if (wordInput.value === wordDisplay.innerText){ 
        score ++; // 스코어 1 증가
        wordCount ++; // 다음 단어를 보여주기 위해 인덱스 1 증가
        wordDisplay.innerText= wordList[wordCount]; //wordCount 가 증가했으니, 재실행 = 다음 단어 보여주기
        scoreTag.innerText = score; //스코어 출력
        wordInput.value =''; //   입력하는 값 빈칸으로 초기화
        timeTag.innerText = GAME_TIME; //10 고정변수 사용하기 위해서!  , 시간초가 10초로 다시 보이게
        time = GAME_TIME; //시간초도 10초로 초기화

    }
}