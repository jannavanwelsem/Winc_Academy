let checkEvenOdd = number => {
    if ((number % 2) === 0 | -0){
        return true;
    } else if ((number % 2) === 1 | -1){
        return false;
    }
}

for (let i = 0; i <= 20; i++) {
    console.log(`Is ${i} even or odd?`);
    let evenOrOdd = checkEvenOdd(i);
    if (evenOrOdd === true){
        console.log(i + ' is even');
    } else if (evenOrOdd === false) {
        console.log(i + ' is odd');
    }
  }