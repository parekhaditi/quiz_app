function populate(){
	if(quiz.isEnded()){
		showScores();
	}
	else{
		//show questions
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i=0; i < choices.length; i++){
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}

		showProgress();
	}

};

function guess(id,guess){
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		
		//button.style.background = "green";
		populate();
	}

};

function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question" + " " +currentQuestionNumber + " " + "of" + " " +quiz.questions.length;
};

function showScores(){
	var gameOverHtml = "<h1>Result</h1>";
	
	if(quiz.score<'4'){
		
		gameOverHtml += "<h2 id='score'>Your Scores: " + quiz.score + "</h2>";
		gameOverHtml += "<h3 id='score1'>You need more practice." + "<br>"+ "</h3>";
	}
	else{
		
		gameOverHtml += "<h2 id='score'>Your Scores: " + quiz.score + "</h2>";
		gameOverHtml += "<h3 id='score1'>Goob Job!" + "<br>"+ "</h3>";
	}
	
	var element =document.getElementById("quiz");
	element.innerHTML = gameOverHtml;
};


var questions = [
	new Question("Which one is not an OOP language?",["Java","C++","C#","C"],"C"),
	new Question("Which language is used for styling web pages?",["HTML","JQuery","CSS","XML"],"CSS"),
	new Question("There are ____ main componenets of OOP?",["1","6","2","4"],"4"),
	new Question("Which language is used for web apps?",["PHP","Python","Javascript","All"],"All"),
	new Question("MVC is a ____",["Language","Library","Framework","All"],"Framework"),

];

var quiz = new Quiz(questions);


populate();