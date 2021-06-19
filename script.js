var correctAnswer;
var timer = "10";
var deleteArray=[];
var questionsAnswered=0;
var score = 0;

var questionSelect = [
    {
       question: "2+2=?",
       answers:[
           "A: 300",
           "B: 4",
           "C: 916",
           "D: 25"
       ],
       correctAnsInd: "B: 4"
    },
    {        
       question: "4*6=?",
       answers:[
           "A: 32",
           "B: 14",
           "C: 24",
           "D: 2,567,899"
       ],
       correctAnsInd: "C: 24"
    },
    {        
        question: "24/12=?",
        answers:[
            "A: 600",
            "B: 12",
            "C: 678,333,258",
            "D: 2"
        ],
        correctAnsInd: "D: 2"
     },
     {        
        question: "16/4=?",
        answers:[
            "A: 60",
            "B: 4",
            "C: 67",
            "D: 11"
        ],
        correctAnsInd: "B: 4"
     },
     {        
        question: "9*3=?",
        answers:[
            "A: 8",
            "B: 116",
            "C: 27",
            "D: 12"
        ],
        correctAnsInd: "C: 27"
     },
     {        
        question: "27/9=?",
        answers:[
            "A: 3",
            "B: 12",
            "C: 111",
            "D: 2,236,899"
        ],
        correctAnsInd: "A: 3"
     },
     {        
        question: "12*3=?",
        answers:[
            "A: 18",
            "B: 36",
            "C: 6",
            "D: 4"
        ],
        correctAnsInd: "B: 36"
     },
     {        
        question: "18+9=?",
        answers:[
            "A: 27",
            "B: 45",
            "C: 38",
            "D: 999"
        ],
        correctAnsInd: "A: 27"
     },
     {        
        question: "26/2=?",
        answers:[
            "A: 60",
            "B: 23",
            "C: 13",
            "D: 29"
        ],
        correctAnsInd: "C: 13"
     },
     {        
        question: "16/8=?",
        answers:[
            "A: 16",
            "B: 25",
            "C: 333,258",
            "D: 2"
        ],
        correctAnsInd: "D: 2"
     }
]

function landingScreen(){
    var landingPage = document.getElementById("contentarea");
    var landingh1Tag = document.createElement("h1");
    var landingh1text = document.createTextNode("Challenge:");
    landingh1Tag.appendChild(landingh1text);  
    landingPage.appendChild(landingh1Tag);

    var landingh2Tag = document.createElement("h2");
    var landingh2text = document.createTextNode("Math Quiz");
    landingh2Tag.appendChild(landingh2text);  
    landingPage.appendChild(landingh2Tag);

    var landingInstructions = document.createElement("p");
    var landingInstrText = document.createTextNode("How many of the following questions can you answer? Correctly, I mean? Did you even pay attention in school anyway? Maybe you're a big ol' dummy, too, and not just a jibroni; let's find out.");
    landingInstructions.appendChild(landingInstrText);
    landingPage.appendChild(landingInstructions);

    var button = document.createElement('input');
    button.setAttribute("type", "button");
    button.setAttribute("value","Start Quiz");
    landingPage.appendChild(button);
    button.addEventListener("click",startQuiz);
}

landingScreen();

function startQuiz(){
    if (questionsAnswered===9){
        lastQuest();
    }
    var scoresDisplay = document.getElementById("highscores").style.display = "none";
    var questionPage = document.getElementById("contentarea");
    questionPage.innerHTML = "";
    var questHeadTag = document.createElement("h3");
    var questHeadText = document.createTextNode("Question:");
    questHeadTag.appendChild(questHeadText);
    questionPage.appendChild(questHeadTag);
    
    var questDiv = document.createElement("div");
    questDiv.setAttribute("id","questionText");
    questionPage.appendChild(questDiv);
    var questTag = document.createElement("h3");
    questionPage.appendChild(questTag);
    var questionText = document.createTextNode("");
    questionPage.appendChild(questionText);
    
    var ansDiv = document.createElement("div");
    ansDiv.setAttribute("id","answersList")
    questionPage.appendChild(ansDiv);

    var choiceA = document.createElement('input');
    var choiceB = document.createElement('input');
    var choiceC = document.createElement('input');
    var choiceD = document.createElement('input');
    choiceA.setAttribute("type","button");
    choiceA.setAttribute("id","choiceA");
    choiceB.setAttribute("type","button");
    choiceB.setAttribute("id","choiceB");
    choiceC.setAttribute("type","button");
    choiceC.setAttribute("id","choiceC");
    choiceD.setAttribute("type","button");
    choiceD.setAttribute("id","choiceD");
    answersList.appendChild(choiceA);
    answersList.appendChild(choiceB);
    answersList.appendChild(choiceC);
    answersList.appendChild(choiceD);
    pageQuizContent();
}

function pageQuizContent(){
    var question = document.getElementById("questionText");
    var ansA = document.getElementById("choiceA");
    var ansB = document.getElementById("choiceB");
    var ansC = document.getElementById("choiceC");
    var ansD = document.getElementById("choiceD");
    
    //generates a random number to select a question     
    
    for(i=0; i<questionSelect.length-1; i++){
        var index=Math.floor(Math.random() * questionSelect.length);
    }
    
    correctAnswer=questionSelect[index].correctAnsInd;
    console.log("The correct answer is: "+correctAnswer);

    //sets question and answer-button values
    question.textContent = questionSelect[index].question;
    ansA.setAttribute("value",questionSelect[index].answers[0]);
    ansB.setAttribute("value",questionSelect[index].answers[1]);
    ansC.setAttribute("value",questionSelect[index].answers[2]);
    ansD.setAttribute("value",questionSelect[index].answers[3]);
    

    ansA.addEventListener('click',function(){
        if (this.value === correctAnswer){
            console.log("You clicked: "+this.value);
            deleteArray = questionSelect.splice([index],1);
            rightAnswer();
        }else{
            wrongAnswer();
        }
        
    })
    ansB.addEventListener('click',function(){
        if (this.value === correctAnswer){
            console.log("You clicked: "+this.value);
            var deleteArray = questionSelect.splice([index],1);
            rightAnswer();
        }else{
            wrongAnswer();
        }
        
    })
    ansC.addEventListener('click',function(){
        if (this.value === correctAnswer){
            console.log("You clicked: "+this.value);
            var deleteArray = questionSelect.splice([index],1);
            rightAnswer();
        }else{
            wrongAnswer();
        }
       
    })
    ansD.addEventListener('click',function(){
        if (this.value === correctAnswer){
            console.log("You clicked: "+this.value);
            var deleteArray = questionSelect.splice([index],1);
            rightAnswer();
        }else{
            wrongAnswer();
        }
    })
}

function wrongAnswer(){
    console.log("Wrong. Your face is dumb.");
    score--;
    console.log("The score is: "+score);
    correctAnswer = ""
    if (questionsAnswered===9){
        lastQuest();
    }
    startQuiz();
}

function rightAnswer(){
    correctAnswer = ""
    questionsAnswered++;
    console.log("You've answered "+questionsAnswered+" questions.");
    score++;
    console.log("The score is: "+score);
    console.log("questionSelect has "+questionSelect.length+" items left in it.");
    if (questionsAnswered===9){
        lastQuest();
        }else{
        startQuiz();
        }
    }


function lastQuest(){
    console.log("Last Question screen!");
    console.log(questionSelect);
    var scoresDisplay = document.getElementById("highscores").style.display = "none";
    var questionPage = document.getElementById("contentarea");
    questionPage.innerHTML = "";
    var questHeadTag = document.createElement("h3");
    var questHeadText = document.createTextNode("Question:");
    questHeadTag.appendChild(questHeadText);
    questionPage.appendChild(questHeadTag);
    
    var questDiv = document.createElement("div");
    questDiv.setAttribute("id","questionText");
    questionPage.appendChild(questDiv);
    var questTag = document.createElement("h3");
    questionPage.appendChild(questTag);
    var questionText = document.createTextNode("");
    questionPage.appendChild(questionText);
    
    var ansDiv = document.createElement("div");
    ansDiv.setAttribute("id","answersList")
    questionPage.appendChild(ansDiv);

    var choiceA = document.createElement('input');
    var choiceB = document.createElement('input');
    var choiceC = document.createElement('input');
    var choiceD = document.createElement('input');
    choiceA.setAttribute("type","button");
    choiceA.setAttribute("id","choiceA");
    choiceB.setAttribute("type","button");
    choiceB.setAttribute("id","choiceB");
    choiceC.setAttribute("type","button");
    choiceC.setAttribute("id","choiceC");
    choiceD.setAttribute("type","button");
    choiceD.setAttribute("id","choiceD");
    answersList.appendChild(choiceA);
    answersList.appendChild(choiceB);
    answersList.appendChild(choiceC);
    answersList.appendChild(choiceD);

    var question = document.getElementById("questionText");
    var ansA = document.getElementById("choiceA");
    var ansB = document.getElementById("choiceB");
    var ansC = document.getElementById("choiceC");
    var ansD = document.getElementById("choiceD");
    
    var index = 0;
    
    console.log("the index value is: "+index);
    correctAnswer=questionSelect[index].correctAnsInd;
    console.log("The correct answer is: "+correctAnswer);

    //sets question and answer-button values
    question.textContent = questionSelect[index].question;
    ansA.setAttribute("value",questionSelect[index].answers[0]);
    ansB.setAttribute("value",questionSelect[index].answers[1]);
    ansC.setAttribute("value",questionSelect[index].answers[2]);
    ansD.setAttribute("value",questionSelect[index].answers[3]);
    

    ansA.addEventListener('click',function(){
        if (this.value === correctAnswer){
            console.log("You clicked: "+this.value);
            score ++;
            winScreen();
        }else{
            wrongAnswer();
        }
        
    })
    ansB.addEventListener('click',function(){
        if (this.value === correctAnswer){
            console.log("You clicked: "+this.value);
            score ++;
            winScreen();
        }else{
            wrongAnswer();
        }
        
    })
    ansC.addEventListener('click',function(){
        if (this.value === correctAnswer){
            console.log("You clicked: "+this.value);
            score ++;
            winScreen();
        }else{
            wrongAnswer();
        }
       
    })
    ansD.addEventListener('click',function(){
        if (this.value === correctAnswer){
            console.log("You clicked: "+this.value);
            score ++;
            winScreen();
        }else{
            wrongAnswer();
        }
    })

}

function winScreen(){
    var scoresDisplay = document.getElementById("highscores").style.removeProperty("display");
    var landingPage = document.getElementById("contentarea");
    landingPage.innerHTML = "";
    var landingh1Tag = document.createElement("h1");
    var landingh1text = document.createTextNode("All done!");
    landingh1Tag.appendChild(landingh1text);  
    landingPage.appendChild(landingh1Tag);
    console.log("The score is: "+score);

    var landingh2Tag = document.createElement("h2");
    var landingh2text = document.createTextNode("Your score is: "+score);
    landingh2Tag.appendChild(landingh2text);  
    landingPage.appendChild(landingh2Tag);
    console.log("The score is: "+score);

    var landingh3Tag = document.createElement("h3");
    if (score<5){
        var landingh3text = document.createTextNode("Not too great. Try again.");
    }else if (score<8){
        var landingh3text = document.createTextNode("Not bad.");
    }else{
        var landingh3text = document.createTextNode("Nice!");
    }
    landingh3Tag.appendChild(landingh3text);  
    landingPage.appendChild(landingh3Tag);

    var submitScore = document.createElement('input');
    
    submitScore.setAttribute("type","button");
    submitScore.setAttribute("id","submitChoice");
    submitScore.setAttribute("value","Submit Score");
    
    landingPage.appendChild(submitScore);
    

}