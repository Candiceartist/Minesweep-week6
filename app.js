
// 
// if player 1 hull equal to zero game over else if continue
// if firepower greater than alien fire power alien hull  minus 1 elese if player1 minus 1
//  if player one accuracy > than alien accuracy minus 1 you hit alien else if you took a hit player 1 minus1
//  else if aliens array.length === zero ,"you win"
// else Draw
// 
//  

function getRandomNum1(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}
function getRandomNum2(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min)/10;
}

const player1 = {
    hull: 20,
    firepower: 5,
    accuracy: getRandomNum2(6, 8),
}

const alien = 
  {hull: getRandomNum1(3, 6),
    firepower:getRandomNum1(2, 4),
    accuracy: getRandomNum2(6, 8),
    }

 const attackTarget = ()=> {
    if (player1.accuracy < alien.accuracy) {
        console.log('You have been hit!')
    } else {
        console.log("Target hit successfully")
    }
}

const takeFire = () =>{
   let health = player1.hull --;
   console.log(health, "You are under attack")
   if(health ===0){
    console.log("Game Over")
   }
}

const targetHit = () =>{
    let health2 = alien.hull --;
    console.log(health2, "The cretaures are damaged")
    if(health2 ===0){
     console.log("You won! The war is over")
    }
 }

//    { hull: getRandomNum1(3, 6),
//         firepower: getRandomNum1(2, 4),
//         acurracy: getRandomNum2(6, 8),
//    },
//    {hull: getRandomNum1(3, 6),
//     firepower: getRandomNum1(2, 4),
//     acurracy:getRandomNum2(6, 8),
//     },
    
//     {hull: getRandomNum1(3, 6),
//         firepower: getRandomNum1(2, 4),
//         acurracy: getRandomNum2(6, 8),
//     },
//    {hull: getRandomNum1(3, 6),
//     firepower: getRandomNum1(2, 4),
//     acurracy: getRandomNum2(6, 8),
//     },
//    {hull: getRandomNum1(3, 6),
//    firepower: getRandomNum1(2, 4),
//    acurracy: getRandomNum2(6, 8),
//    },
// ]

// if player 1 hull equal to zero game over else if continue


    //  if (player1.hull === 0) {
    //  console.log("Game Over")
    //  } else if ( player1.firepower > alien.firepower) alien.hull--){

    //  }



