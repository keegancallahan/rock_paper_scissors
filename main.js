var botScore=0;
var	playerScore=0;

document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;

function playerThrowsRock(){
	var botsWeapon = getRandomWeapon();//getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}
function playerThrowsScissors(){
	botsWeapon = getRandomWeapon();//getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
}
function playerThrowsPaper(){
	botsWeapon = getRandomWeapon();//getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}
function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
		document.getElementById('status').innerHTML += "<p>You played <strong>" + playersWeapon + "</strong>. The bot played <strong>" + botsWeapon + "</strong>.</p>";
	}
	else if
		((botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors"))
		{
		increaseBotScore();
		displayCompleteMessage("You lose :(");
		document.getElementById('status').innerHTML += "<p>You played <strong>" + playersWeapon + "</strong>. The bot played <strong>" + botsWeapon + "</strong>.</p>";
	}
	else{
		increasePlayerScore();
		displayCompleteMessage("You win! :)");
		document.getElementById('status').innerHTML += "<p>You played <strong>" + playersWeapon + "</strong>. The bot played <strong>" + botsWeapon + "</strong>.</p>";
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("You lose :(");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("You win! :)");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
