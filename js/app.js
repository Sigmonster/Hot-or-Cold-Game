'use strict';

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);
	});
	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});
	/*--- Creat new game on click ---*/
	$(".new").click(function(event){
		event.preventDefault();
		newGame();
	});

	/*delcared varibles*/
	var randomNumber;
	var userGuess;
	var guessCounter=0;
	var gameOver=false;
	var numberFormat;

	newGame(); //starts on page load

	$("form").submit(function(event){
		event.preventDefault();
		getUserGuess();	//sets control flow for the game
		$("#userGuess").val("");
		$("#userGuess").focus();
	});

	/*My Functions*/
	function getUserGuess(){
		if (gameOver==true){
			setFeedback("Woah! You already won this game. Click New Game to play again!");
		}
		userGuess = $("#userGuess").val();
		if (gameOver==false){
			numberFormat=checkInputNumberFormat();
			if (numberFormat==true){
				saveAndCountNumber();
				checkGuessedNumber();
			}
		}
	}
	function saveAndCountNumber(){
		guessCounter++;
		$("#count").html(guessCounter);
		$("#guessList").append("<li>"+userGuess+"</li>");
	}
	function newGame() {
		setFeedback("Make your Guess!");
		resetVariables();
	}
	function setFeedback(feedback) {
		$('#feedback').text(feedback);
	}
	function generateRandomNumber(){
		var randNumber = Math.floor((Math.random()*100)+1);
		return randNumber;
	}
	function checkGuessedNumber(){
			var guessDistance=Math.abs(userGuess-randomNumber);
		if (userGuess == randomNumber){
			setFeedback("You guessed it! Great job! Click New Game to play again!");
			return gameOver=true;
		}
		else if (guessDistance>49)
			setFeedback("Ice Cold!!")
		else if (guessDistance>29)
			setFeedback("Cold!!");
		else if (guessDistance>14)
			setFeedback("Warm!!");
		else if (guessDistance>9)
			setFeedback("Hot!!");
		else if (guessDistance>4)
			setFeedback("Very Hot!!");
		else
			setFeedback("On FIRE!!");
	}
	function checkInputNumberFormat(){
		if (userGuess > -1 && userGuess <= 100 && userGuess % 1 == 0){
			return numberFormat=true;
		}
		alert("Cm'on DUDE!!! Enter an Integer between 1-100!")
		return numberFormat=false;
	}
	function resetVariables(){
		randomNumber = generateRandomNumber();
		guessCounter=0;
		gameOver=false;
		$("#count").html(guessCounter);
		$("#guessList li").remove();
	}
});