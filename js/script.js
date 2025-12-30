function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
  playerMove = 'papier';
} else if(playerInput == '3'){
  playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

let computerInput = Math.floor(Math.random() * 3 + 1);


if(computerInput == '1'){
  computerInput = 'kamień';
} else if(computerInput == '2'){
  computerInput = 'papier';
} else if(computerInput == '3'){
  computerInput = 'nożyce';
}

if(computerInput == playerMove){
    printMessage("Mamy remis! Obydwoje daliśmy " + computerInput)
} else if(computerInput == 'kamień' & playerMove == 'papier' || computerInput == 'papier' & playerMove == 'nożyce' || computerInput == 'nożyce' & playerMove == 'kamień'){
    printMessage("Wygrałeś Dałem " + computerInput)
} else {
    printMessage("Przegrałeś! Dałem " + computerInput)
}

