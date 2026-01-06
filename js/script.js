function clearMessages(){
  document.getElementById('messages').innerHTML = '';
}
function printMessage(msg) {
  let div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

function playGame(playerInput) {
  clearMessages();

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  let playerMove = getMoveName(playerInput);
  let computerMove = getMoveName(randomNumber);

  function getMoveName(MoveId) {
    if (MoveId == '1') {
      return 'kamień';
    } else if (MoveId == '2') {
      return 'papier';
    } else if (MoveId == '3') {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + MoveId + '.');
      return 'nieznany ruch';
    }
  }
  function displayResult(ComputerMove, PlayerMove) {
    printMessage('Zagrałem ' + ComputerMove + ', a Ty ' + PlayerMove);

    if ((computerMove === 'kamień' && playerMove === 'papier') ||
      (computerMove === 'papier' && playerMove === 'nożyce') ||
      (computerMove === 'nożyce' && playerMove === 'kamień')) {
      printMessage("Wygrałeś! Dałem " + computerMove);
    } else
      if (ComputerMove == playerMove || playerMove == ComputerMove) {
        printMessage("Mamy remis! Obydwoje daliśmy " + ComputerMove)
      } else {
        printMessage("Przegrałeś! Dałem " + ComputerMove)
      }
  }
  displayResult(computerMove, playerMove);
}
document.getElementById('rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('scissors').addEventListener('click', function(){
  playGame(3);
});
