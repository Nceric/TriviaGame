
window.onload = function() {
    formEl.style.display = 'none';
    };
    const formEl = document.querySelector("#formEl");
    const start = document.querySelector("#start");
    start.addEventListener("click", function(){
    start.style.display = "none";
    formEl.style.display = "block";
    onTimer();
    });
    
    i = 30;
    function onTimer(){
    document.querySelector("#time").innerHTML = "<h3>You have " + i + " seconds to complete.</h3>";
    i--;
    
    if(i < 0) {
    document.querySelector("#time").innerHTML = "<h3>You have run out of time!</h3";
    formEl.style.display = 'none';
    }else {
    setTimeout(onTimer, 1000);
    }
    }
    
    function questions() {
    let total = 4;
    let score = 0;
    
    let q1 = document.forms["wwetrivia"]["therock"].value;
    let q2 = document.forms["wwetrivia"]["austin"].value;
    let q3 = document.forms["wwetrivia"]["jericho"].value;
    let q4 = document.forms["wwetrivia"]["wwf"].value;
    
    let result = document.querySelector("#result");
    
    let answers = ["c", "a", "a", "a"];
    for(let i = 1; i <= total; i++) {
    if(eval('q'+i) == answers[i-1]) {
        score++;
    } 
    }
    
    result.textContent = "You scored " + score +  " out of " + total + ".";
    document.querySelector("#time").style.display = "none";
    formEl.style.display = 'none';
    return false;
    }
    