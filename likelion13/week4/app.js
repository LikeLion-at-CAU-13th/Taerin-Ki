// 1. DOM 요소 선언

/* 사용자의 선택을 화면에 표시 */
const myHandtext = document.getElementById("my-hand-text");
const myHandicon = document.getElementById("my-hand-icon");

/* 컴퓨터의 선택을 화면에 표시 */
const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

/* 사용자가 어떤 버튼을 눌렀는지 처리하는 데 필요함 */
const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");

/* 점수 변수 */
let myScoreCount = 0;
let computerScoreCount = 0;
// 0으로 초기화 해서 게임이 시작할 때 0으로 시작하도록 함!!

/* 점수 표시 */
const myScore = document.querySelector(".my-score");
const computerScore = document.querySelector(".computer-score");

/* 게임 결과 표시 */
const displayResult = document.getElementById("display-result");

/* 리셋 버튼 */
const resetBtn = document.getElementById("reset-button");



// 2. 이벤트 설정

/* 버튼 클릭 시 이벤트 리스너를 추가하여 각 버튼을 클릭할 때마다 특정 함수가 실행되도록 설정 */
/* rockBtn, scissorBtn, paperBtn은  사용자가 어떤 선택을 했는지 displayMyChoice 함수로 전달함!! */
rockBtn.addEventListener("click", displayMyChoice);
scissorsBtn.addEventListener("click", displayMyChoice);
paperBtn.addEventListener("click", displayMyChoice);

/* 리셋 버튼 클릭 시 resetGame 함수를 실행할래 */
resetBtn.addEventListener("click", resetGame);



// 3. 사용자의 선택을 표시하는 함수

function displayMyChoice(e) {
    let clickedBtn = e.currentTarget.id;    // 어떤 버튼이 클릭되었는지 id를 가져옴
    let clickedIcon = e.target.className;   // 버튼에 적용된 아이콘의 클래스를 가져옴옴

    myHandtext.innerText = clickedBtn;
    myHandicon.className = clickedIcon;

    start(clickedBtn);  // 게임 시작
}



// 4. 컴퓨터의 랜덤 선택 함수

function getComChoice() {
    const randomValue = {
        0 : ["rock", "fa-regular fa-hand-back-fist"],
        1 : ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2 : ["paper", "fa-regular fa-hand"],
    };

    const randomIndex = Math.floor(Math.random() *3);

    return randomValue[randomIndex];
}



// 5. 컴퓨터의 선택을 화면에 뿌려주는 함수
function displayComChoice(result) {
    computerText.innerText = result[0];
    computerIcon.className = result[1];
}



// 6. 게임 실행 함수

function start(myChoice) {
    let resultArray = getComChoice();
    let comChoice = resultArray[0];
    displayComChoice(resultArray);

    let result = whoIsWinner(myChoice, comChoice);
    displayResult.innerText = result;

    // myScore와 computerScore를 갱신하여 실시간으로 점수 업데이트
    myScore.innerText = myScoreCount;
    computerScore.innerText = computerScoreCount;
}



// 7. 그래서 누가 이겼는데? 함수

function whoIsWinner(myChoice, comChoice) {

    /* 무승부 */
    if (myChoice === comChoice) {
        return "Win-Win~";
    }

    /* 사용자 승리 */
    if (
        (myChoice === "rock" && comChoice === "scissors") ||
        (myChoice === "scissors" && comChoice === "paper") ||
        (myChoice === "paper" && comChoice === "rock")
    ) {
        myScoreCount++;
        return "You Win!";
    }

    /* 그 외에는 모두 컴퓨터가 이긴 거니까 */
    else {
        computerScoreCount++;
        return "You Lose...";
    }
}



// 8. 게임 리셋 함수

function resetGame() {

    /* 이렇게 했더니 리셋을 눌러도 점수만 0으로 초기화 되고
    버튼이 사라지지 않아서 초기 화면으로 되돌리는 코드를 사용함 */
    
    // myScoreCount = 0;
    // computerScoreCount = 0;
    
    // myScore.innerText = "0";
    // computerScore.innerText = "0";
    // myHandText.innerText = "0";

    // myHandIcon.innerText = "";
    // myHandIcon.className = "icon";  // 기본 아이콘으로 되돌림
    // computerText.innerText = "";
    // computerIcon.className = "icon";  // 기본 아이콘으로 되돌림

    // displayResult.innerText = "";

    location.reload();
}


// 다크 모드

const darkModeTgl = document.getElementById("dark-mode-toggle");

darkModeTgl.addEventListener("click", darkMode);

function darkMode() {
    document.body.classList.toggle("dark-mode");

    // 버튼 텍스트 변경 (다크 모드일 때 / 아닐 때)
    if (document.body.classList.contains("dark-mode")) {
        darkModeTgl.innerText = "Light";
    } else {
        darkModeTgl.innerText = "Dark";
    }
}