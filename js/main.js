window.onload = function() {
  localStorage.removeItem("current_button");
  TicTacToe.findButton()
};

const TicTacToe = { // START
  // this is the board
  board: [, , , 
          , , , 
          , , ],
  
  //tracks turn, X goes first
  turnCount: 0,

  buttons: document.getElementsByClassName("load-button"),

  buttonClicked: 0,

  choice: "X",
  //process turn actions: updates button, updates board, updates player?
  reply_click: function (clicked_id){
    document.querySelector(`#${clicked_id}`).innerText = this.turnCount % 2 == 0 ? "X" : "O";
    document.querySelector('h3').innerText = this.turnCount % 2 == 0 ? "O Turn" : "X Turn";
    //See ID of button clicked
    console.log(clicked_id);
    
    //Take into acount which turn it is
    this.turnCount++;

    //Save current choice
    this.choice = this.turnCount % 2 == 0 ? "O" : "X";

    //Find button that was clicked 
    this.findButton()
    setTimeout(() => {
      this.updateBoard()
   }, 10);

  }
  //Find button that was clicked 
  ,findButton(){
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].addEventListener("click", function() {
        localStorage.setItem('current_button', i);
      }, false)
    }
  }

//updated board and check win conditions
,updateBoard(){
  console.log(localStorage.getItem("current_button"))
  console.log(this.choice)
  this.board[localStorage.getItem("current_button")] = this.choice
  console.log(this.board)
  $(`#X_${localStorage.getItem("current_button")}`).prop('disabled', true);
  
  //Check if X won
  if( (this.board[0] == "X" & this.board[4] == "X" & this.board[8] == "X") ||       (this.board[0] == "X" & this.board[1] == "X" & this.board[2] == "X") ||      (this.board[0] == "X" & this.board[3] == "X" & this.board[6] == "X") ||
  (this.board[8] == "X" & this.board[7] == "X" & this.board[6] == "X") ||
  (this.board[8] == "X" & this.board[5] == "X" & this.board[2] == "X") ||
  (this.board[5] == "X" & this.board[4] == "X" & this.board[3] == "X") ||
  (this.board[1] == "X" & this.board[4] == "X" & this.board[7] == "X") ||
  (this.board[2] == "X" & this.board[5] == "X" & this.board[8] == "X") || 
  (this.board[2] == "X" & this.board[4] == "X" & this.board[6] == "X")) {
    document.querySelector('h3').innerText = "X wins!";
    $('.load-button').prop('disabled', true);
    document.getElementById('togglee').style.visibility = 'visible';
  }else if( 
  (this.board[0] == "O" & this.board[4] == "O" & this.board[8] == "O") ||       (this.board[0] == "O" & this.board[1] == "O" & this.board[2] == "O") ||      (this.board[0] == "O" & this.board[3] == "O" & this.board[6] == "O") ||
  (this.board[8] == "O" & this.board[7] == "O" & this.board[6] == "O") ||
  (this.board[8] == "O" & this.board[5] == "O" & this.board[2] == "O") ||
  (this.board[5] == "O" & this.board[4] == "O" & this.board[3] == "O") ||
  (this.board[1] == "O" & this.board[4] == "O" & this.board[7] == "O") ||
  (this.board[2] == "O" & this.board[5] == "O" & this.board[8] == "O") ||
  (this.board[2] == "O" & this.board[4] == "O" & this.board[6] == "O") ) {
    document.querySelector('h3').innerText = "O wins!";
    $('.load-button').prop('disabled', true);
    document.getElementById('togglee').style.visibility = 'visible';
  }else{
    this.checkDraw()
  }
  
}

,checkDraw(){
  if(
    ((this.board[0] == "O")||(this.board[0] == "X"))&
    ((this.board[1] == "O")||(this.board[1] == "X"))&
    ((this.board[2] == "O")||(this.board[2] == "X"))&
    ((this.board[3] == "O")||(this.board[3] == "X"))&
    ((this.board[4] == "O")||(this.board[4] == "X"))&
    ((this.board[5] == "O")||(this.board[5] == "X"))&
    ((this.board[6] == "O")||(this.board[6] == "X"))&
    ((this.board[7] == "O")||(this.board[7] == "X"))&
    ((this.board[8] == "O")||(this.board[8] == "X"))
    ){
      document.querySelector('h3').innerText = "Draw!";
      $('.load-button').prop('disabled', true);
      document.getElementById('togglee').style.visibility = 'visible';
    }
}
// Clear board after game is done
 ,clearboard(){
  document.getElementById('togglee').style.visibility = 'hidden';
  $('.load-button').prop('disabled', false);
  this.board = [, , , 
                , , , 
                , , ];
  this.turnCount = 0;
  this.buttonClicked = 0;
  localStorage.removeItem("current_button");
  for(let i = 0; i<9;i++){
  document.querySelector(`#X_${i}`).innerText = " ";
  }
  setTimeout(() => {
    document.querySelector('h3').innerText = " ";
 }, 10);
 }
} // END



