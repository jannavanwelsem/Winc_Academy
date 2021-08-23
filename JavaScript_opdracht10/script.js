function squareSumSquare1(number1, number2) {
    const square1 = number1 ** 2;
    const square2 = number2 ** 2;
    const sumSquares = square1 + square2;
    const squareSumSquares = sumSquares ** 2;
    return squareSumSquares;
}

const squareSumSquare2 = function(number1, number2) {
    const square1 = number1 ** 2;
    const square2 = number2 ** 2;
    const sumSquares = square1 + square2;
    const squareSumSquares = sumSquares ** 2;
    return squareSumSquares;
}

const squareSumSquare3 = (number1, number2) => {
    const square1 = number1 ** 2;
    const square2 = number2 ** 2;
    const sumSquares = square1 + square2;
    const squareSumSquares = sumSquares ** 2;
    return squareSumSquares;
}

console.log(squareSumSquare1(4, 12));
console.log(squareSumSquare2(4, 12));
console.log(squareSumSquare3(4, 12));