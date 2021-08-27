const startButton = () => {
    let nameEntered = enterName();
    let numEntered = enterNum(nameEntered);
    let numGenerated = randomNumGenerator(numEntered);
    let checkNumber = checkNum(numEntered, numGenerated);
    let feedback = feedbackMssg(checkNumber, numEntered, numGenerated);
    const goodbye = goodBye();
}

const enterName = () => {
    let nameEntered = prompt("Welcome! Please start by telling me your name:", "Your name goes here");
    if (nameEntered === "") {
        nameEntered = incorrectNameEntry();
    }
    return nameEntered;
}

const incorrectNameEntry = () => {
    let correctName = prompt("Please fill in your name first to start the game:", "Your name goes here");
    if (correctName === "") {
        correctName = incorrectNameEntry();
    }
    return correctName;
}

const enterNum = (nameEntered) => {
    if (nameEntered != null) {
        let numEntered = prompt(`Thanks for filling in your name ${nameEntered}! Fill in a number to start guessing...`, "A number between 0 and 25");
        if (numEntered != null) {
            let numEnteredFloat = parseFloat(numEntered);
            if (isNaN(numEnteredFloat) | numEnteredFloat < 0 | numEnteredFloat > 25 | !Number.isInteger(numEnteredFloat)) {
                numEntered = incorrectNumEntry();
            }
            console.log(`number entered: ${numEntered}`);
            return numEntered;
        }
    }
}

const incorrectNumEntry = () => {
    let correctNum = prompt("That is not a valid number... Please fill in one round number between 0 and 25:", "A number between 0 and 25");
    if (correctNum != null) {
        let correctNumFloat = parseFloat(correctNum);
        if (isNaN(correctNumFloat) | correctNumFloat < 0 | correctNumFloat > 25 | !Number.isInteger(correctNumFloat)) {
            correctNumFloat = incorrectNumEntry();
        }
        return correctNumFloat;
    }
}

const randomNumGenerator = (numEntered) => {
    if (numEntered != null) {
        let randomNumGenerated = Math.floor(Math.random() * 26);
        console.log(`random number generated: ${randomNumGenerated}`);
        return randomNumGenerated;
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


const checkNum = (numEntered, numGenerated) => {
    if (isNaN(numEntered)) {
        return;
    } else if (numEntered == numGenerated) {
        return 'true';
    } else {
        return 'false';
    }
}

const feedbackMssg = (checkNumber, numEntered, numGenerated) => {
    let feedbackMessage;
    if (checkNumber === 'true') {
        feedbackMessage = alert(`Congratulations! The number you entered (${numEntered}) corresponds with the number that was generated (${numGenerated})!`);
    }
    else if (checkNumber === 'false') {
        feedbackMessage = alert(`Unfortunately the number you entered (${numEntered}) did not correspond with the number that was generated (${numGenerated}) ...`);
    }
    return feedbackMessage;
}

const goodBye = () => {
    let goodbye = alert("The game ends here. Thank you for playing!");
    return goodbye;
}