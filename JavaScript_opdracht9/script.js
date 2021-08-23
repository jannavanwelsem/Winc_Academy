// - Checking if a number is big:

function checkIfBig(number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
}

console.log(checkIfBig(90));
console.log(checkIfBig(100));
console.log(checkIfBig(101));

//I think this is a function that produces something

// - Bouncer at a club

function bouncerBot(age, peopleInside, capacity) {
    if (age < 18){
        return "this is a club for adults";
    } else if (peopleInside > capacity){
        return "it's too busy now, come back later";
    } else {
        return "come in";
    }
}

/*
andere manier om de functie te schrijven:

function bouncerBot(age, peopleInside, capacity) {
    if (age >= 18 && peopleInside <= capacity){
        return "come in";
    } else if (age < 18) {
        return "this is a club for adults";
    } else if (peopleInside > capacity){
        return "it's too busy now, come back later";
    } 
} */

console.log(bouncerBot(18, 50, 100));
console.log(bouncerBot(17, 50, 100));
console.log(bouncerBot(17, 51, 50));
console.log(bouncerBot(19, 100, 100));
console.log(bouncerBot(30, 15, 10));

//I think this is a function that does something

// - Calculating the average

function calculateAverage(number1, number2, number3, number4, number5){
    average = (number1 + number2 + number3 + number4 + number5) / 5;
    return Math.round(average);
}

console.log(calculateAverage(10, 10, 10, 10, 10));
console.log(calculateAverage(8, 12, 11, 100, 105));

// I think this is a function that produces something