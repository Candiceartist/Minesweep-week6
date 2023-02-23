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
// start game and create cells
function cellID(i,j) {
    return 'cell-' + i + '-' + j;
}
// fucntion to create table 
function createTable() {
    let(table, row, td, i, j) ;
    table = document.createElement('table');
    
    for (i=0; i<components.num_of_rows; i++) {
        row = document.createElement('tr');
        for (j=0; j<components.num_of_cols; j++) {
            td = document.createElement('td');
            td.id = cellID(i, j);
            row.appendChild(td);
            addCellListeners(td, i, j);
        }
        table.appendChild(row);
    }
    return table;
}
// place bombs in table
function placeBombs() {
    let (i, rows = []);
    
    for (i=0; i<components.num_of_bombs; i++) {
        placeSingleBomb(rows);
    }
    return rows;
} 
// not bomb cells
function placeSingleBomb(bombs) {

    let (nrow, ncol, row, col);
    nrow = Math.floor(Math.random() * components.num_of_rows);
    ncol = Math.floor(Math.random() * components.num_of_cols);
    row = bombs[nrow];
    
    if (!row) {
        row = [];
        bombs[nrow] = row;
    }
    
    col = row[ncol];
    
    if (!col) {
        row[ncol] = true;
        return
    } 
    else {
        placeSingleBomb(bombs);
    }
}
// hit bomb "you loose"
// // if number is next to bomb flag function 
// all flags placed correctly "you win"
// reset to first funtion
// repeat for player two 