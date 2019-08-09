



const startGame = ("startGame").on('click', function() {
    

});




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

const onetwothreefour = ["first", "second", "third", "fourth"];

const timer = setInterval(function(){
    document.getElementById("thetime").value = 30 - timeleft;
    timeleft -= 1;
    if(timeleft <= 0)
      clearInterval(downloadTimer);
  }, 1000);