function Question(text, choices, answer){		//fuction constructor
	this.text = text;				//3 attributes
	this.choices = choices;
	this.answer = answer;
}

//function which belongs to function constructor

Question.prototype.correctAnswer = function(choice){
	return choice == this.answer;
}