function paintWalls(northWall, eastWall) {
    console.log('The north wall has been painted ' + northWall + ', the east wall has been painted ' + eastWall);
}

paintWalls('red');
paintWalls('green');
paintWalls();

//Without an argument, the function prints 'The wall has been painted undefined'

paintWalls('yellow', 'pink');

//6. Of course the order of the arguments matters when calling the function.
//7. If I were to switch the parameters in the function definition it would make sense if I changed both the content within () and {}.
//8. Changing things up in calling the definition would not make sense unless you want the colors of the walls to switch.