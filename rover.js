var myVar = "Prueba de una matriz multidimensional;";
var nb = 10;
var grid = new Array(nb); // crea una matriz de longitud 10
for (var i = 0; i < nb; i++) {
   grid[i] = new Array(nb); // define cada elemento como una matriz de longitud 10
   for (var j = 0; j < nb; j++) {
      //grid[i][j] = "[" + i + "," + j + "]"; // asigna a cada elemento de la matriz bidimensional
                                         // los valores de i y j
      grid[i][j] = 1;
   }
}

var myRover = {
  position: [0,0],
  direction: 'N'
};

function goForward(rover) {
  var x = rover.position[0];
  var y = rover.position[1];

  switch(rover.direction) {
    case 'N':
      y++ ;
      break;
    case 'E':
      x++ ;
      break;
    case 'S':
      y-- ;
      break;
    case 'W':
      x-- ;
      break;
  }

  if (checkObstacle(x,y) === false){
    rover.position[0] = x;
    rover.position[1] = y;

    //Mundo circular
    circularWorld(rover);

    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
  }
  else {
    console.log("Obstacle found");
  }
}

function goBackward(rover) {
  var x = rover.position[0];
  var y = rover.position[1];

  switch(rover.direction) {
    case 'N':
      y--;
      break;
    case 'E':
      x--;
      break;
    case 'S':
      y++;
      break;
    case 'W':
      x++;
      break;
  }

  if (checkObstacle(x,y) === false){
    rover.position[0] = x;
    rover.position[1] = y;

    //Mundo circular
    circularWorld(rover);

    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
  }
  else {
    console.log("Obstacle found");
  }
}

function turnRight(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
  console.log("New Rover Direction: " + rover.direction + ".");
}

function turnLeft(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
  }
  console.log("New Rover Direction: " + rover.direction + ".");
}

function circularWorld(rover) {
  if(rover.position[0] == 10){
    rover.position[0]= 0;
  }
  else if(rover.position[0]< 0){
    rover.position[0]= 9;
  }
  else if (rover.position[1] == 10){
    rover.position[1]= 0;
  }
  else if (rover.position[1] < 0){
    rover.position[1]= 9;
  }
}

function sendCommands (commands){

  var stringLength = commands.length ;

  for (var i = 0; i < stringLength; i++){
      switch (commands[i]) {
        case 'f':
          goForward(myRover);
          break;
        case 'b':
          goBackward(myRover);
          break;
        case 'r':
            turnRight(myRover);
            break;
        case 'l':
            turnLeft(myRover);
            break;
        default:
          console.log("Command " + commands[i]+ " it\'s an incorrect command");
        }
  }
}

function addObstacle(x,y){
  grid[x][y]= 3;

}

function checkObstacle(x,y){
  if(x==10){
    x=0;
  }
  else if(x<0){
    x=9;
  }

  if(y==10){
    y=0;
  }
  else if(y<0){
    y=9;
  }

  if(grid[x][y] == 3){
    return true;
  }
  else {
    return false;
  }
}

addObstacle(0,1);
sendCommands("frffbrffrbbullfffffff");
