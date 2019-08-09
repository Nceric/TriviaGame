const triviaContainer = document.getElementById('trivia');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('button');

function myTrivia(){}



function showAnswers(){}

submitButton.addEventListener('click', showAnswers);

const questions = [

    {
        question: "What is the most electrifying move in sports entertainment history?",

        answers: {
            a: "The Stunner",
            b: "German Suplex",
            c: "The Peoples Elbow",
        },
        correctAnswer: "c"
    },

    {

        question: "Who utilized Stone Cold Stunner move?",

        answers: {
            a: "Stone Cold Steve Austin",
            b: "The Rock",
            c: "Kurt Angle",
        },
        correctAnswer: "a"
    },
    {
        question: "Who has the longest Wrestlemania win streak?",

        answers: {
            a: "Sean Michaels",
            b: "Chris Jericho",
            c: "The Undertaker",

        },
        correctAnswer: "c"
    },
    {
        question: "What does WWE stand for?",
        answers: {
            a: "World War Everyone",
            b: "World Wrestling Entertainment",
            c: "War Will Eradicate",
        },
        correctAnswer: "b"
        }
    


];


function myTrivia(){
    
    const output = [];

    questions.forEach(
        (currentQ, Qnumber) => {

            const answers = [];

            for(letter in currentQ.answers){
                answers.push(
                    <label>
                        <input type="radio" name="currentQ" value="letter"></input>
                        {letter}
                        {currentQ.answers[letter]}
                    </label>
                );
            }
        }
    )
}


