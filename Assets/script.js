var AnswerStatus = true; 
var QuestionNumber = 0;
var AnswerNumber = 0;
var score = 0; 
var highScore = 50;
var finalAnswerCheck = 0
var checkTimes = 1 
var viewHighScoresBtnEl = document.getElementById("HighScores");
var BeginQuizBtnEl = document.getElementById("Begin-Quiz");
var Answer1Button = document.getElementById("Answer1");
var Answer2Button = document.getElementById("Answer2"); 
var Answer3Button = document.getElementById("Answer3"); 
var Answer4Button = document.getElementById("Answer4"); 
var SubmitScoreEl = document.getElementById("SubmitScore"); 
var questionsEl = document.getElementById("questions");
var TestEl = document.getElementById("Test");
var htmlTimeLeft = document.getElementById("timeLeft");
var AnswerCWEl = document.getElementById("AnswerCW");
var QuestionHeaderEl = document.createElement("QuestionHeader");
var ScoreDisplayEl = document.createElement("ScoreDisplay");
var EnterInitialsEl = document.createElement("EnterInitials"); 
var EnterInitialsTAEl = document.createElement("EnterInitialsTA");
var button1234 = document.createElement("button"); 
var htmlTimeLeft = 60;

Answer1Button.style.display = "none";
Answer2Button.style.display = "none";
Answer3Button.style.display = "none";
Answer4Button.style.display = "none";
SubmitScoreEl.style.display = "none";
AnswerCWEl.style.display="none";
EnterInitialsTA.style.display="none";

var TheQuestions = { 
    correct: { 
        0 : "Commonly used datatypes DO NOT include?",
        1 : "The condition statement if/else is enclosed with the following:",
        2 : "Arrays can be used to store the following", 
        3 : "A very useful tool to debug arrays is:", 
        4 : "Strings must be enclosed with:"
    }
};
var TheAnswers = { 
    answers: { 
        0 : {
            0: "Strings",
            1: "Boolean",
            2: "Alerts",
            3: "Numbers"},
        1 : {
            0: "Parentheses",
            1: "Curly Brackets",
            2: "Quotes",
            3: "Square Brackets"},
        2 : { 
            0: "Javascript",
            1: "Terminal/bash",
            2: "For loops", 
            3: "Console.log"},      
        3 : { 
            0: "Commas",
            1: "Curly brackets",
            2: "Quotes", 
            3: "Parentheses"},      
        4:  { 
            0: "Number of strings",
            1: "Other arrays",
            2: "Booleans",
            3: "All of the above"},  
    }
};

htmlTimeLeft.textContent = timeLeft;

viewHighScoresBtnEl.addEventListener("click", function() { 
    
    var QuizTakers = "";
    var substringTest ="";
    var HighScores = "";
HighScores
    for (var i=0; i < localStorage.length; i++) {
        var checkUserValue = [];
        
        QuizTakers = localStorage.getItem(localStorage.key(i));
        substringTest = QuizTakers.substring(0,4) 
        if (substringTest == "quiz") {
            checkUserValue = QuizTakers.split(",");
            var userName = checkUserValue[0]
            HighScores += "User " + userName.substring(4) + " high score is: " + checkUserValue[1] + "\n";
       }
    }
    window.alert(HighScores);

});

SubmitScoreEl.addEventListener("click", function() { 
    

    var quizLocalStorage = "quiz";
    var QuizTakerInitials = "";
    var value = [];
    
    QuizTakerInitials = quizLocalStorage + EnterInitialsTA.value 
    value = [QuizTakerInitials,highScore] 


    if (!localStorage.length) {
        localStorage.setItem("test","test");
    }
       
        
    for (var i=0; i < localStorage.length; i++){
        
        var checkUser = "";
        var checkUserValue = [];

        QuizTakerInitials = quizLocalStorage + EnterInitialsTA.value;

        checkUser = localStorage.getItem(QuizTakerInitials);
   
        if (checkUser == null) { 
            localStorage.setItem(QuizTakerInitials, value); 
            window.alert("Your score of " + highScore + " has been submitted!")
            break;
        } else if (checkUser != null){
            checkUserValue = checkUser.split(","); 
           
        
        }  



              
        if ( QuizTakerInitials == checkUserValue[0] && highScore == checkUserValue[1] ) {

       
        localStorage.setItem(QuizTakerInitials, value); 
        window.alert(highScore + " " + "is the latest entry for user initial " + EnterInitialsTA.value + ". Entry will not be added.")
        break; 
        } else if (EnterInitialsTA.value == "") {
            window.alert("Please enter an initial");
            break;
        } else if ( QuizTakerInitials == checkUserValue[0] && highScore > checkUserValue[1] ) { 
            localStorage.setItem(QuizTakerInitials, value); 
            window.alert("New high score of " + highScore + " has been submitted!.\nYour previous score was " + checkUserValue[1])
            break; 
        } else if ( QuizTakerInitials == checkUserValue[0] && highScore < checkUserValue[1] ) { 
            localStorage.setItem(QuizTakerInitials, value); 
            window.alert("Your previous code of " + checkUserValue[1] + " was higher. Entry will not be added.");
            break; 

        } else { // New entry all together
            localStorage.setItem(QuizTakerInitials, value); 
            window.alert("Your score of " + highScore + " has been submitted!")
            break;
        }
                
    }
    
} );


Answer1Button.addEventListener("mouseover", function() {

    AnswerCWEl.style.display="none";

});

Answer2Button.addEventListener("mouseover", function() {

    AnswerCWEl.style.display="none";

});

Answer3Button.addEventListener("mouseover", function() {

    AnswerCWEl.style.display="none";

});

Answer4Button.addEventListener("mouseover", function() {

    AnswerCWEl.style.display="none";

});

SubmitScoreEl.addEventListener("mouseover", function() {

    AnswerCWEl.style.display="none";

});

BeginQuizBtnEl.addEventListener("click", function() {

    BeginQuizBtnEl.style.display = "none";
    QuestionHeaderEl.style.display="none";
    ScoreDisplayEl.style.display = "none";
    EnterInitialsEl.style.display="none";
    score = 0;
    htmlTimeLeft=60;
    htmlTimeLeft.textContent = timeLeft;
    finalAnswerCheck = 0; 
    checkTimes = 1;
    
    var timeInterval = setInterval(function() {

        if (score === 1){ 
            highScore -= 10;
        }

        score = 0; 

        
        if(htmlTimeLeft >= 1 && finalAnswerCheck !== 1) {
            QuestionHeaderEl.textContent = TheQuestions.correct[QuestionNumber];
            
            QuestionHeaderEl.style.display= ""; 
            Answer1Button.style.display = ""; 
            Answer2Button.style.display = "";
            Answer3Button.style.display = "";
            Answer4Button.style.display = "";

            Answer1Button.textContent = TheAnswers.answers[AnswerNumber][0];
            Answer2Button.textContent = TheAnswers.answers[AnswerNumber][1];
            Answer3Button.textContent = TheAnswers.answers[AnswerNumber][2];
            Answer4Button.textContent = TheAnswers.answers[AnswerNumber][3];
           
            PossibleAnswers.appendChild(QuestionHeaderEl);
            PossibleAnswers.appendChild(Answer1Button);
            PossibleAnswers.appendChild(ScoreDisplayEl);
            htmlTimeLeft -= 1;
            htmlTimeLeft.textContent = htmlTimeLeft;
            console.log("time left:" + htmlTimeLeft)
            

            Answer1Button.addEventListener("click", function() {

                if (QuestionHeaderEl.textContent === "The condition statement if/else is enclosed with the following:" && Answer1Button.textContent === "Parentheses") {
                    console.log("Correct");
                    QuestionNumber = 2; 
                    AnswerNumber = 4;
                    AnswerCWEl.style.display="";
                    AnswerCWEl.textContent = "Correct!";
                    AnswerCWEl.style.borderTop = "solid #800080";
                    AnswerCWElGrid.appendChild(AnswerCWEl);
                } else {


                    switch(Answer1Button.textContent) {
                        case "Strings":
                            console.log("Inside the case now");
                            AnswerCWEl.style.display="";
                            AnswerCWEl.textContent = "Wrong!";
                            AnswerCWEl.style.borderTop = "solid #800080";
                            
                            score = 1; 
                            QuestionNumber = 1; 
                            AnswerNumber = 1;
                            break;
                        case "Number of strings":
                            console.log("Inside the case now");
                            AnswerCWEl.style.display="";
                            AnswerCWEl.textContent = "Wrong!";
                            AnswerCWEl.style.borderTop = "solid #800080";
                            
                            score = 1;
                            QuestionNumber = 3; 
                            AnswerNumber = 2;
                            break;
                        case "Javascript":
                            console.log("Inside the case now");
                            AnswerCWEl.style.display="";
                            AnswerCWEl.textContent = "Wrong!";
                            AnswerCWEl.style.borderTop = "solid #800080";
                            
                            score = 1; 
                            QuestionNumber = 4;
                            AnswerNumber = 3;
                        break;
                        case "Commas":
                            console.log("Correct");
                            AnswerCWEl.style.display=""; 
                            AnswerCWEl.textContent = "Correct!";
                            AnswerCWEl.style.borderTop = "solid #800080";
                            AnswerCWElGrid.appendChild(AnswerCWEl);
                            QuestionNumber = 0;
                            AnswerNumber = 0;
                            console.log("Im here" + timeInterval);
                            Answer1Button.style.display = "none";
                            Answer2Button.style.display = "none";
                            Answer3Button.style.display = "none";
                            Answer4Button.style.display = "none";
                            AnswerCWEl.style.display="none"; 
                            BeginQuizBtnEl.style.display = "none"; 
                            QuestionHeaderEl.textContent = "You have finished the quiz!";
                            ScoreDisplayEl.style.display = "";
                            EnterInitialsEl.style.display = ""; 
                            EnterInitialsTA.style.display=""; 
                            finalAnswerCheck = 1;
                            lastQuestionWrong();
                            ScoreDisplayEl.textContent = "Your final score is: " + highScore; 
                            EnterInitialsEl.textContent = "Enter initials: "
                            SubmitScoreEl.style.display = "";
                            SubmitScoreEl.textContent = "Submit";                   
                            clearInterval(timeInterval);
                            break;
                        
                    }
                }
      

            });

            Answer2Button.addEventListener("click", function() {

                if (QuestionHeaderEl.textContent === "Strings must be enclosed with:" && Answer2Button.textContent === "Curly brackets") {
                    console.log("Correct");
                    AnswerCWEl.style.display=""; 
                    AnswerCWEl.textContent = "Correct!";
                    AnswerCWEl.style.borderTop = "solid #800080";
                    AnswerCWElGrid.appendChild(AnswerCWEl);
                    QuestionNumber = 0; 
                    AnswerNumber = 0; 
                    console.log("Im here" + timeInterval);
                    Answer1Button.style.display = "none";
                    Answer2Button.style.display = "none";
                    Answer3Button.style.display = "none";
                    Answer4Button.style.display = "none";
                    AnswerCWEl.style.display="none"; 
                    BeginQuizBtnEl.style.display = "none"; 
                    QuestionHeaderEl.textContent = "You have finished the quiz!";
                    ScoreDisplayEl.style.display = ""; 
                    EnterInitialsEl.style.display = ""; 
                    EnterInitialsTAEl.style.display="";  
                    ScoreDisplayEl.textContent = "Your final score is: " + highScore; 
                    EnterInitials.textContent = "Enter initials: "
                    SubmitScoreEl.style.display = "";
                    SubmitScoreEl.textContent = "Submit";                   
                    
                    clearInterval(timeInterval);
                } else {

                    switch(Answer2Button.textContent) {
                        case "Boolean":
                            console.log("Inside the case now");
                            AnswerCWEl.style.display="";
                            AnswerCWEl.textContent = "Wrong!";
                            AnswerCWEl.style.borderTop = "solid #800080";
                          
                            score = 1; 
                            QuestionNumber = 1; 
                            AnswerNumber = 1;
                            break;
                        case "Curly Brackets":
                            console.log("Inside the case now");
                            AnswerCWEl.style.display="";
                            AnswerCWEl.textContent = "Wrong!";
                            AnswerCWEl.style.borderTop = "solid #800080";
                         
                            score = 1;
                            QuestionNumber = 2; 
                            AnswerNumber = 4;
                            console.log(score);
                            break;
                        case "Other arrays":
                            console.log("Inside the case now");
                            AnswerCWEl.style.display="";
                            AnswerCWEl.textContent = "Wrong!";
                            AnswerCWEl.style.borderTop = "solid #800080";
                            score = 1;
                            QuestionNumber = 3; 
                            AnswerNumber = 2;
                            break;
                        case "Terminal/bash":
                            console.log("Inside the case now");
                            AnswerCWEl.style.display="";
                            AnswerCWEl.textContent = "Wrong!";
                            AnswerCWEl.style.borderTop = "solid #800080";
                            score = 1; 
                            QuestionNumber = 4;
                            AnswerNumber = 3;
                            break;

                            
                    }
                 }



                
            });

            Answer3Button.addEventListener("click", function() {

                if (QuestionHeaderEl.textContent === "Commonly used datatypes DO NOT include?" && Answer3Button.textContent === "Alerts") {
                    console.log("Correct");
                    QuestionNumber = 1; 
                    AnswerNumber = 1;
                    AnswerCWEl.style.display=""; 
                    AnswerCWEl.textContent = "Correct!";
                    AnswerCWEl.style.borderTop = "solid #800080";
                    AnswerCWElGrid.appendChild(AnswerCWEl);
                } else if (QuestionHeaderEl.textContent === "A very useful tool to debug arrays is:" && Answer3Button.textContent === "For loops") {
                    console.log("Correct");
                    QuestionNumber = 4;
                    AnswerNumber =3;
                    AnswerCWEl.style.display="";
                    AnswerCWEl.textContent = "Correct!";
                    AnswerCWEl.style.borderTop = "solid #800080";
                    AnswerCWElGrid.appendChild(AnswerCWEl);
                } else if (QuestionHeaderEl.textContent === "The condition statement if/else is enclosed with the following:" && Answer3Button.textContent === "Quotes") {
                            console.log("Inside the case now");
                            AnswerCWEl.style.display="";
                            AnswerCWEl.textContent = "Wrong!";
                            AnswerCWEl.style.borderTop = "solid #800080";
                            score = 1; 
                            QuestionNumber = 2; 
                            AnswerNumber = 4;
                }
                
                else {

                    switch(Answer3Button.textContent) {
                        case "Booleans":
                            console.log("Inside the case now");
                            AnswerCWEl.style.display="";
                            AnswerCWEl.textContent = "Wrong!";
                            AnswerCWEl.style.borderTop = "solid #800080";
                            score = 1; 
                            QuestionNumber = 3;
                            AnswerNumber = 2;
                            break;
                        case "Quotes":
                            console.log("Inside the case now");
                            score = 1; 
                            QuestionNumber = 0; 
                            AnswerNumber = 0; 
                            console.log("Im here" + timeInterval);
                            Answer1Button.style.display = "none";
                            Answer2Button.style.display = "none";
                            Answer3Button.style.display = "none";
                            Answer4Button.style.display = "none";
                            AnswerCWEl.style.display="none"; 
                            BeginQuizBtnEl.style.display = "none"; 
                            QuestionHeaderEl.textContent = "You have finished the quiz!";
                            ScoreDisplayEl.style.display = "";
                            EnterInitials.style.display = ""; 
                            EnterInitialsTA.style.display=""; 
                            finalAnswerCheck = 1
                            lastQuestionWrong();
                            ScoreDisplayEl.textContent = "Your final score is: " + highScore; 
                            EnterInitialsEl.textContent = "Enter initials: "
                            SubmitScoreEl.style.display = "";
                            SubmitScoreEl.textContent = "Submit";                   
                            clearInterval(timeInterval);
                            
                        break;
                    }

                }

            });

            Answer4Button.addEventListener("click", function() {

                if (QuestionHeaderEl.textContent === "Arrays can be used to store the following" && Answer4Button.textContent === "All of the above") {
                    console.log("Correct");
                    QuestionNumber = 3; 
                    AnswerNumber = 2;
                    AnswerCWEl.style.display=""; 
                    AnswerCWEl.textContent = "Correct!"
                    AnswerCWEl.style.borderTop = "solid #800080";
                    AnswerCWElGrid.appendChild(AnswerCWEl);

                } else {

                    switch(Answer4Button.textContent) {
                        case "Numbers":
                            console.log("Inside the case now");
                            AnswerCWEl.style.display="";
                            AnswerCWEl.textContent = "Wrong!";
                            AnswerCWEl.style.borderTop = "solid #800080";
                            score = 1;
                            QuestionNumber = 1; 
                            AnswerNumber = 1;
                            break;
                        case "Square Brackets":
                            console.log("Inside the case now");
                            AnswerCWEl.style.display="";
                            AnswerCWEl.textContent = "Wrong!";
                            AnswerCWEl.style.borderTop = "solid #800080";
                            score = 1;
                            QuestionNumber = 2; 
                            AnswerNumber = 4;
                            break;
                        case "Console.log":
                            console.log("Inside the case now");
                            AnswerCWEl.style.display="";
                            AnswerCWEl.textContent = "Wrong!";
                            AnswerCWEl.style.borderTop = "solid #800080";
                            score = 1;
                            QuestionNumber = 4;
                            AnswerNumber = 3;
                        break;
                        case "Parentheses":
                            console.log("Inside the case now");
                            AnswerCWEl.style.display="";
                            AnswerCWEl.textContent = "Wrong!";
                            AnswerCWEl.style.borderTop = "solid #800080";
                            score = 1;
                            QuestionNumber = 0; 
                            AnswerNumber = 0; 
                            console.log("Im here" + timeInterval);
                            Answer1Button.style.display = "none";
                            Answer2Button.style.display = "none";
                            Answer3Button.style.display = "none";
                            Answer4Button.style.display = "none";
                            AnswerCWEl.style.display="none"; 
                            BeginQuizBtnEl.style.display = "none"; 
                            QuestionHeaderEl.textContent = "You have finished the quiz!";
                            ScoreDisplayElEl.style.display = ""; 
                            EnterInitialsEl.style.display = ""; 
                            EnterInitialsTAEl.style.display=""; 
                            finalAnswerCheck = 1; 
                            lastQuestionWrong();
                            ScoreDisplayElEl.textContent = "Your final score is: " + highScore; 
                            EnterInitials.textContent = "Enter initials: "
                            SubmitScoreEl.style.display = "";
                            SubmitScoreEl.textContent = "Submit";                   
                            clearInterval(timeInterval);
                        break;
                        
                    }
                 
                }
                
            });

        }
        else if(htmlTimeLeft === 0){

          console.log("Im here" + timeInterval);
          QuestionNumber = 0; 
          AnswerNumber = 0; 
          Answer1Button.style.display = "none";
          Answer2Button.style.display = "none";
          Answer3Button.style.display = "none";
          Answer4Button.style.display = "none";
          AnswerCWEl.style.display="none"; 
          QuestionHeaderEl.textContent = "Game Over!. Try again by clicking on \"Click Start Quiz\"";
          BeginQuizBtnEl.style.display = "";
          clearInterval(timeInterval);
         
        }
      }, 1000)

});

function lastQuestionWrong () {
        if (finalAnswerCheck === 1 && checkTimes === 1) {
        highScore -= 10;
        checkTimes = 2;
        return highScore
    }

  }

