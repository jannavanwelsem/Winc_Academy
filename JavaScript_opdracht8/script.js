function paintWalls(color, wall) {
    console.log('The ' + wall + ' has been painted ' + color);
}

paintWalls('red');
paintWalls('green');
paintWalls();

//Without an argument, the function prints 'The wall has been painted undefined'

paintWalls('yellow', 'east wall');

//6. Of course the order of the arguments matters when calling the function.
//7. If I were to switch the parameters in the function definition I would also have to change the content within the console.log parentheses.
//8. If I changed everything, i.e. the content of the () and the {} of the function definition and the arguments when calling it, it would still work fine of course.