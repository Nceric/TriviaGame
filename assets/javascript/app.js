



const startGame = ("startGame").on('click', function() {
    






const questions = [{
    question: "Who dropped The Peoples Elbow on their opponent?",
    answer: ["Stone Cold Steve Austin", "The Rock", "Kurt Angle"],
    name: "Elbow",
    correct: "The Rock",
    divClass: "rock",
},
{
    question: "Stone Cold Steve Austin's special move was?",
    answer: ["Rock Bottom", "Pedigree", "Stone Cold Stunner",],
    name: "stunner",
    correct: "Stone Cold Stunner",
    divClass: "stunner",
},
{
    question: "What does WWE stand for?",
    answer: ["World War Everyone", "World Wrestling Entertainment", "War Will Eradicate",],
    name: "wwe",
    correct: "World Wrestling Entertainment",
    divClass: "wwe",
},
]

const timeLeft = 30;
const time = document.getElementById('timer');
const timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        time.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

function TimeUp() {
    alert("Time is up!");
}