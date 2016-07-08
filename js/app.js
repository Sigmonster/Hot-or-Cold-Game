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

	/*varibles*/
	var randomNumber;
	var userGuess;
	var guessCounter=0;
	var gameOver=false;
	var numberFormat;

	newGame();

	$("form").submit(function(event){
		event.preventDefault();
		getUserGuess();

	});
	/*My Functions*/
	function getUserGuess(){
		if (gameOver==true){
			setFeedback("Woah! You already won this game. Click New Game to play again!");
		}
		userGuess = $("#userGuess").val();
		/*remove later*/console.log(userGuess);
		$("#userGuess").val("");
		$("#userGuess").focus();
		if (gameOver==false){
			numberFormat=checkInputNumberFormat();
			if (numberFormat==true){
				saveAndCountNumber();
				checkGuessedNumber();
			/*remove later*/console.log("if (numberFormat=true) = working!");
			}
		}
	}
	function saveAndCountNumber(){
		guessCounter++;
		$("#count").html(guessCounter);
		/*remove later*/console.log("addCounterNumber() Guess Count:" + guessCounter);
		$("#guessList").append("<li>"+userGuess+"</li>");
		/*remove later*/console.log("addListItem() did it add the LI?");
		/*remove later*/console.log("saveAndCountNumber() Done!!");
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
		/*remove later*/console.log(randNumber);
		return randNumber
	}
	function checkGuessedNumber(){
		if (userGuess == randomNumber){
			setFeedback("You guessed it! Great job! Click New Game to play again!");
			/*remove later*/console.log("checkGuessedNumber() if #1 Winner!");
			return gameOver=true;
		}
		else if (Math.abs(userGuess-randomNumber) > 49){
			setFeedback("Ice Cold!!");
			return gameOver=false;
		}
		else if (Math.abs(userGuess-randomNumber) > 29){
			setFeedback("Cold!!");
			return gameOver=false;
		}
		else if (Math.abs(userGuess-randomNumber) > 14){
			setFeedback("Warm!!");
			return gameOver=false;
		}
		else if (Math.abs(userGuess-randomNumber) > 9){
			setFeedback("Hot!!");
			return gameOver=false;
		}
		else if (Math.abs(userGuess-randomNumber) > 4){
			setFeedback("Very Hot!!");
			return gameOver=false;
		}
		else if (Math.abs(userGuess-randomNumber) >= 1){
			setFeedback("On FIRE!!");
			return gameOver=false;
		}
	}
	function checkInputNumberFormat(){
		if (userGuess > -1 && userGuess <= 100){
		/*remove later*/console.log("checkInputNumberFormat() passed! #1");
			if (userGuess % 1 == 0){
		/*remove later*/console.log("checkInputNumberFormat() passed! nested if #2");
			return numberFormat=true;
			}
		}
		/*remove later*/console.log("checkInputNumberFormat() failed!");
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



