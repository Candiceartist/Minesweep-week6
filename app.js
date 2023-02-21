// create mine field start active tiles active bombs alive or dead text inside
const mineFields = {
   rows:3,
   collumns:6,
   bombs: 5,
   bomb: "&#x1F4A3",
   alive: "true",
   colors: {1: 'blue', 2: 'green', 3: 'red', 4: 'purple', 5: 'maroon', 6: 'turquoise', 7: 'black', 8: 'grey'}
}

// display with advent AudioListener to start game 
window.addEventListener('load', function() {
    document.getElementsByClassName('lost').style.display="none";
    startGame();
});
// when game is lost display message
function startGame() {
    components.bombs = placeBombs();
    document.getElementsByClassName('mineField').appendChild(createTable());
}
// start game and place bombs randomly append to display
// fucntion to create table 
// place single bomb 
// hit bomb "you loose"
// // if number is next to bomb flag function 
// all flags placed correctly "you win"
// reset to first funtion
// repeat for player two 