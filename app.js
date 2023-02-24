// create mine field start active tiles active bombs alive or dead text inside
const mineFields = {
   rows:3,
   collumns:6,
   bombs: 5,
   bomb: "&#x1F4A3",
   alive: "true",
   colors: {1: 'blue', 2: 'green', 3: 'red', 4: 'purple', 5: 'maroon', 6: 'turquoise', 7: 'black', 8: 'grey'}
}

var components = {
    num_of_rows : 6,
    num_of_cols : 12,
    num_of_bombs : 10,
    bomb : '💣',
    alive : true,
    colors : {1: 'blue', 2: 'green', 3: 'red', 4: 'purple', 5: 'maroon', 6: 'turquoise', 7: 'black', 8: 'grey'}
}

// // display with advent AudioListener to start game 
// window.addEventListener('load', function() {
//     document.getElementsByClassName('lost').style.display="none";
//     startGame();
// });
// // when game is lost display message
// function startGame() {
//     components.bombs = placeBombs();
//     document.getElementsByClassName('mineField').appendChild(createTable());
// }
// // start game and create cells
// function cellID(i,j) {
//     return 'cell-' + i + '-' + j;
// }
// // fucntion to create table 
// function createTable() {
//     let(table, row, td, i, j) ;
//     table = document.createElement('table');
    
//     for (i=0; i<components.num_of_rows; i++) {
//         row = document.createElement('tr');
//         for (j=0; j<components.num_of_cols; j++) {
//             td = document.createElement('td');
//             td.id = cellID(i, j);
//             row.appendChild(td);
//             addCellListeners(td, i, j);
//         }
//         table.appendChild(row);
//     }
//     return table;
// }


// // place bombs in table
// function placeBombs() {
//     let (i, rows = []);
    
//     for (i=0; i<components.num_of_bombs; i++) {
//         placeSingleBomb(rows);
//     }
//     return rows;
// } 
// // not bomb cells
// function placeSingleBomb(bombs) {

//     let (nrow, ncol, row, col);
//     nrow = Math.floor(Math.random() * components.num_of_rows);
//     ncol = Math.floor(Math.random() * components.num_of_cols);
//     row = bombs[nrow];
    
//     if (!row) {
//         row = [];
//         bombs[nrow] = row;
//     }
    
//     col = row[ncol];
    
//     if (!col) {
//         row[ncol] = true;
//         return
//     } 
//     else {
//         placeSingleBomb(bombs);
//     }
// }

// // eventlisteners for clicks
// function addCellListeners(td, i, j) {
//     td.addEventListener('mousedown', function(event) {
//         if (!components.alive) {
//             return;
//         }
//         components.mousewhiches += event.which;
//         if (event.which === 3) {
//             return;
//         }
//         if (this.flagged) {
//             return;
//         }
//         this.style.backgroundColor = 'lightpink';
//     });

//     td.addEventListener('mouseup', function(event) {
      
//         if (!components.alive) {
//             return;
//         }

//         if (this.clicked && components.mousewhiches == 4) {
//             performMassClick(this, i, j);
//         }

//         components.mousewhiches = 0;
        
//         if (event.which === 3) {
           
//             if (this.clicked) {
//                 return;
//             }
//             if (this.flagged) {
//                 this.flagged = false;
//                 this.textContent = '';
//             } else {
//                 this.flagged = true;
//                 this.textContent = components.flag;
//             }

//             event.preventDefault();
//             event.stopPropagation();
          
//             return false;
//         } 
//         else {
//             handleCellClick(this, i, j);
//         }
//     });

//     td.oncontextmenu = function() { 
//         return false; 
//     };
// }

// function handleCellClick(cell, i, j) {
//     if (!components.alive) {
//         return;
//     }

//     if (cell.flagged) {
//         return;
//     }

//     cell.clicked = true;

//     if (components.bombs[i][j]) {
//         cell.style.color = 'red';
//         cell.textContent = components.bomb;
//         gameOver();
        
//     }
//     else {
//         cell.style.backgroundColor = 'lightsalmon';
//         num_of_bombs = adjacentBombs(i, j);
//         if (num_of_bombs) {
//             cell.style.color = components.colors[num_of_bombs];
//             cell.textContent = num_of_bombs;
//         } 
//         else {
//             clickAdjacentBombs(i, j);
//         }
//     }
// }



// find bombs and flag them 
// function adjacentBombs(row, col) {
//     var i, j, num_of_bombs;
//     num_of_bombs = 0;

//     for (i=-1; i<2; i++) {
//         for (j=-1; j<2; j++) {
//             if (components.bombs[row + i] && components.bombs[row + i][col + j]) {
//                 num_of_bombs++;
//             }
//         }
//     }
//     return num_of_bombs;
// }

// function adjacentFlags(row, col) {
//     let (i, j, num_flags);
//     num_flags = 0;

//     for (i=-1; i<2; i++) {
//         for (j=-1; j<2; j++) {
//             cell = document.getElementById(cellID(row + i, col + j));
//             if (!!cell && cell.flagged) {
//                 num_flags++;
//             }
//         }
//     }
// }        
// // click through field
// function clickAdjacentBombs(row, col) {
//     var i, j, cell;
    
//     for (i=-1; i<2; i++) {
//         for (j=-1; j<2; j++) {
//             if (i === 0 && j === 0) {
//                 continue;
//             }
//             cell = document.getElementById(cellID(row + i, col + j));
//             if (!!cell && !cell.clicked && !cell.flagged) {
//                 handleCellClick(cell, row + i, col + j);
//             }
//         }
//     }
// }

// function performMassClick(cell, row, col) {
//     if (adjacentFlags(row, col) === adjacentBombs(row, col)) {
//         clickAdjacentBombs(row, col);
//     }
// }

// function gameOver() {
//     components.alive = false;
//     document.getElementById('lost').style.display="block";
    
// }

// function reload(){
//     window.location.reload();
// }

// window.addEventListener('load', function() {
//     document.getElementById('lost').style.display="none";
//     startGame();
// });


// // all flags placed correctly "you win"
// // reset to first funtion
// // repeat for player two 
function startGame() {
    components.bombs = placeBombs();
    document.getElementById('field').appendChild(createTable());
}

function placeBombs() {
    var i, rows = [];
    
    for (i=0; i<components.num_of_bombs; i++) {
        placeSingleBomb(rows);
    }
    return rows;
} 

function placeSingleBomb(bombs) {

    var nrow, ncol, row, col;
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

function cellID(i, j) {
    return 'cell-' + i + '-' + j;
}

function createTable() {
    var table, row, td, i, j;
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

function addCellListeners(td, i, j) {
    td.addEventListener('mousedown', function(event) {
        if (!components.alive) {
            return;
        }
        components.mousewhiches += event.which;
        if (event.which === 3) {
            return;
        }
        if (this.flagged) {
            return;
        }
        this.style.backgroundColor = 'lightpink';
    });

    td.addEventListener('mouseup', function(event) {
      
        if (!components.alive) {
            return;
        }

        if (this.clicked && components.mousewhiches == 4) {
            performMassClick(this, i, j);
        }

        components.mousewhiches = 0;
        
        if (event.which === 3) {
           
            if (this.clicked) {
                return;
            }
            if (this.flagged) {
                this.flagged = false;
                this.textContent = '';
            } else {
                this.flagged = true;
                this.textContent = components.flag;
            }

            event.preventDefault();
            event.stopPropagation();
          
            return false;
        } 
        else {
            handleCellClick(this, i, j);
        }
    });

    td.oncontextmenu = function() { 
        return false; 
    };
}

function handleCellClick(cell, i, j) {
    if (!components.alive) {
        return;
    }

    if (cell.flagged) {
        return;
    }

    cell.clicked = true;

    if (components.bombs[i][j]) {
        cell.style.color = 'red';
        cell.textContent = components.bomb;
        gameOver();
        
    }
    else {
        cell.style.backgroundColor = 'lightcoral';
        num_of_bombs = adjacentBombs(i, j);
        if (num_of_bombs) {
            cell.style.color = components.colors[num_of_bombs];
            cell.textContent = num_of_bombs;
        } 
        else {
            clickAdjacentBombs(i, j);
        }
    }
}

function adjacentBombs(row, col) {
    var i, j, num_of_bombs;
    num_of_bombs = 0;

    for (i=-1; i<2; i++) {
        for (j=-1; j<2; j++) {
            if (components.bombs[row + i] && components.bombs[row + i][col + j]) {
                num_of_bombs++;
            }
        }
    }
    return num_of_bombs;
}

function adjacentFlags(row, col) {
    var i, j, num_flags;
    num_flags = 0;

    for (i=-1; i<2; i++) {
        for (j=-1; j<2; j++) {
            cell = document.getElementById(cellID(row + i, col + j));
            if (!!cell && cell.flagged) {
                num_flags++;
            }
        }
    }
    return num_flags;
}

function clickAdjacentBombs(row, col) {
    var i, j, cell;
    
    for (i=-1; i<2; i++) {
        for (j=-1; j<2; j++) {
            if (i === 0 && j === 0) {
                continue;
            }
            cell = document.getElementById(cellID(row + i, col + j));
            if (!!cell && !cell.clicked && !cell.flagged) {
                handleCellClick(cell, row + i, col + j);
            }
        }
    }
}

function performMassClick(cell, row, col) {
    if (adjacentFlags(row, col) === adjacentBombs(row, col)) {
        clickAdjacentBombs(row, col);
    }
}

function gameOver() {
    components.alive = false;
    document.getElementById('lost').style.display="block";
    
}

function reload(){
    window.location.reload();
}

window.addEventListener('load', function() {
    document.getElementById('lost').style.display="none";
    startGame();
    findWinner();
});

// counter for players

let count1 = 1;
let count2 = 1;

let finalScore = {
    player1: Number(document.querySelector('.points').textContent),
    player2: Number(document.querySelector('.points2').textContent),
}

const player1Counter = () => {
    let points1 = document.querySelector('.points')
 points1.innerHTML = count1++;
 finalScore.player1 = Number(document.querySelector('.points').textContent);
}

const player2Counter = () => {
    let points = document.querySelector('.points2')
 points.innerHTML = count2++;
 finalScore.player2 = Number(document.querySelector('.points2').textContent);
}


const findWinner = () => {
   console.log(finalScore.player1, finalScore.player2)
   let winner = document.querySelector('.winner')
   if (finalScore.player1 > finalScore.player2) {
   winner.innerHTML = "'Player1 Wins!'"
   } else if (finalScore.player1 < finalScore.player2) {
    winner.innerHTML = "'Player2 Wins!'" 
   } else {
    winner.innerHTML = "'NICE SWEEP'"
   }
}


