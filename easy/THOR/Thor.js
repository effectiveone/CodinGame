var inputs = readline().split(" ");
const lightX = parseInt(inputs[0]); // pozycja światła mocy w osi X
const lightY = parseInt(inputs[1]); // pozycja światła mocy w osi Y
const initialTX = parseInt(inputs[2]); // początkowa pozycja Thora w osi X
const initialTY = parseInt(inputs[3]); // początkowa pozycja Thora w osi Y

let thorX = initialTX;
let thorY = initialTY;

while (true) {
  const remainingTurns = parseInt(readline()); // liczba pozostałych tur
  let directionX = "";
  let directionY = "";

  if (thorY > lightY) {
    directionY = "N";
    thorY--;
  } else if (thorY < lightY) {
    directionY = "S";
    thorY++;
  }

  if (thorX > lightX) {
    directionX = "W";
    thorX--;
  } else if (thorX < lightX) {
    directionX = "E";
    thorX++;
  }

  console.log(directionY + directionX);
}
