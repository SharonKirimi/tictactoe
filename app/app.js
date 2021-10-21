// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// use require without a reference to ensure a file is bundled
// require('./example')
const boxes = Array.from(document.getElementsByClassName('box'));
const playText = document.getElementById('playText');
console.log(playText, 'play!!')
const spaces = [];
const O_TEXT = "O";
const X_TEXT = "X";
console.log(boxes)
const drawBoard = () => {
  boxes.forEach((box, index) => {
    let styleString = '';
    if (index < 3) {
      styleString += 'border-bottom: 3px solid var(--bg)';
    }
    if (index % 3 === 0) {
      styleString += 'border-right:3px solid var(--bg)';
    }
    if (index % 3 === 2) {
      styleString += 'border-left :3px solid var(--bg)';
  }
  if (index > 5) {
      styleString += 'border-top: 3px solid var(--bg)';
    }
    box.style = styleString;
    box.addEventListener('click', boxClicked)
  })
};
const boxClicked = (e) => {
  const id = e.target.id;
  console.log("box was clicked");
  if(!spaces[id]){
    spaces[id] + currentPlayer;
    e.target.innerText = currentPlayer;
    currentPlayer = O_TEXT
    if(playerHasWon()){
      playText.inner = `${currentPlayer} has won!`;
      return;
    }
    currentPlayer = O_TEXT ? X_TEXT : O_TEXT
  }
};
const playerHasWon = () => {
 if (spaces[0] = currentPlayer) {
   if (spaces[1] === currentPlayer && spaces [2] === currentPlayer) {
     console.log(`${currentPlayer} wins on the top.`);
     return true;
   }
   if (spaces[3] === currentPlayer && spaces [6] === currentPlayer) {
     console.log(`${currentPlayer} wins on the left.`);
     return true;
   }
   if( spaces[4] === currentPlayer && spaces [8] === currentPlayer) {
     console.log(`${currentPlayer} wins on the diagonally`);
     return true;
    }
  }
 else if( spaces[8] === currentPlayer) {
   if(spaces[2] === currentPlayer && spaces [5] === currentPlayer) {
     console.log(`${currentPlayer} wins on the right.`);
     return true;
   }
   if(spaces[6] === currentPlayer && spaces [7] === currentPlayer) {
     console.log(`${currentPlayer} wins on the bottom.`);
     return true;
   }
   if(spaces[4] === currentPlayer && spaces [8] === currentPlayer) {
     console.log(`${currentPlayer} wins on the diagonally`);
     return true;
    }
   }
   if(spaces[4] === currentPlayer) {
    if(spaces[1] === currentPlayer && spaces [7] === currentPlayer) {
      console.log(`${currentPlayer} wins in the middle.`);
      return true;
    }
    if(spaces[3] === currentPlayer && spaces [5] === currentPlayer) {
      console.log(`${currentPlayer} wins on the horizontally.`);
      return true;
    }
    if(spaces[4] === currentPlayer && spaces [8] === currentPlayer) {
      console.log(`${currentPlayer} wins on the diagonally`);
      return true;
    }
  }
}
   const restart = () => {
     spaces.forEach((space, index) =>{
        spaces[index] = null;
      })
      boxes.forEach(box => {
        box.innerText = '';
      })
      //playText.innerText = `Let's Play!`;
      currentPlayer = O_TEXT;
   };
//restartBtn.addEventListener('onclick', restart);
restart ();
drawBoard();
