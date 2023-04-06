console.log("Welcome to TicTacToe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameov = new Audio("gameover.mp3")
let turn = "X"

let ifover = false;

//Fun to change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// music.play();

//win logic
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    win.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            gameov.play();
            music.pause();
            document.querySelector('.info').innerText = (boxtext[e[0]].innerText + " won");
            ifover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "160px";
            document.querySelector(".line").style.width = "20vw"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}


//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            music.play();
            checkWin();
            if (!ifover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})


reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    ifover = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "00px";
})
