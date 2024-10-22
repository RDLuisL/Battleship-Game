// Variables:

// allBoardBlocks: there are the piece who compone each ship
// randomStartIndex: first ship piece placed random (it's a number)
// randomBoolean: is a random number generated to place a computer ship
// isHorizontal: is a Bolean parameter to notice if ship is horizontal or vertical placed
// shipBlocks: is the ship type (destroyer, submarine, cruiser, battleship and carrier)

const gamesBoardContainer = document.querySelector("#gamesboard-container");
const optionContainer = document.querySelector(".option-container");
const flipButton = document.querySelector("#flip-button"); //✅




//❌
// Flip Funtion

let angle = 0; 
function flip() {
  const optionShips = Array.from(optionContainer.children)
  angle = angle === 0 ? 90 : 0;
  optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${angle}deg)`)
}; 

flipButton.addEventListener("click", flip);

// Flip Funtion End Checked✅

// Create Game Boards
const width = 10;

function createBoard(color, user) {
  const gameBoardContainer = document.createElement('div')
  gameBoardContainer.classList.add('game-board')
  gameBoardContainer.style.backgroundColor = color
  gameBoardContainer.id = user

  for (let i = 0; i < width * width; i++) {
    const block = document.createElement('div')
      block.classList.add('block')
      block.id = i
      gameBoardContainer.append(block)
   }
    gamesBoardContainer.append(gameBoardContainer)
}
createBoard('lightblue', 'player')
createBoard('lightcoral', 'computer')
// Create Board End✅

// Creating Ships

class Ship {
    //Ship Class structure to a object
  constructor(name, length) {
    this.name = name
    this.length = length
  }
}
  //Kind of Ships
const destroyer = new Ship("destroyer", 2)
const submarine = new Ship("submarine", 3)
const cruiser = new Ship("cruiser", 3)
const battleship = new Ship("battleship", 4)
const carrier = new Ship("carrier", 5)

const ships = [destroyer, submarine, cruiser, battleship, carrier]; //agrouping ships y an arrage
// let notDropped

//Creating (Class) and placing each part of Computers Ship
function addShipPiece(ship) {
  const allBoardBlocks = document.querySelectorAll('#computer div')
  let randomBoolean = Math.random() < 0.5
  let isHorizontal = randomBoolean
  let randomStartIndex = Math.floor(Math.random() * width * width)
  console.log(randomStartIndex)


  // let startIndex = startId ? startId : randomStartIndex

  // let validStart = isHorizontal ? startIndex <= width * width -
  // ship.length ? startIndex :
  //   width * width - ship.length :
   
   
    // handle vertical
    // startIndex <= width * width - width * ship.length ? 
    // startIndex : 
    // startIndex - ship.length * width + width

  let shipBlocks = []

  for (let i = 0; i < ship.length; i++) {
    if (isHorizontal) {
        shipBlocks.push(allBoardBlocks[Number(randomStartIndex) + i])
    } else {
      shipBlocks.push(allBoardBlocks[Number(randomStartIndex) + i * width])
    }
  } 


//   let valid

//   if (isHorizontal) {
//     shipBlocks.every((_shipBlock, index) => 
//         valid = shipBlocks[0].id % width !== width - (shipBlocks.length - (index + 1)))
//   } else {
//     shipBlocks.every((_shipBlock, index) => 
//         valid = shipBlocks[0].id < 90 +(width * index + 1)
//     )
//   }

//   const noTaken = shipBlocks.every(shipBlock => !shipBlock.classList.contains('taken'))

//   if (valid && noTaken) {
    shipBlocks.forEach(shipBlock => {
        shipBlock.classList.add(ship.name)
        shipBlock.classList.add('taken')
    })

    addShipPiece(destroyer)
//   } else{
//     if (user === 'computer') addShipPiece(user, shipBlock)
//     if (user === 'player') notDropped = true
//   }
// }

// ships.forEach(ship => addShipPiece('computer',ship))

// Creating Ships End

//Drag player ships
// let draggedShip

// const optionShips = Array.from(optionContainer.children)
// optionShips.forEach(optionShip => 
//     optionShip.addEventListener('dragstart', dragStart))

// const allPlayerBlocks = document.querySelectorAll('#player div')
// allBoardBlocks.forEach(playerBlock => {
//     playerBlock.addEventListener('dragover', dragOver)
//     playerBlock.addEventListener('drop', dropShip)
// })

//     function dragStart(e) {
//         notDropped = false
//         draggedShip = e.target
//     }

// function dragOver(e) {
//     e.preventDefault()
// }

// function dropShip(e) {
//     const startId = e.target.id;
//     const ship = ships[draggedShip.id];
//     addShipPiece('player', ship, startId);
//     if (!notDropped) {
//       draggedShip.remove();}
  }