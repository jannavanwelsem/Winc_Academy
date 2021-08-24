//opdracht 1:
console.log('----exercise 1----');

/* const checkAge = age => {
    console.log('running checkAge...');
    if (age >= 18){
        return true;
    } else {
        return false;
    }
}; */

const checkAge = age => age >= 18;

// console.log(checkAge(18));

const greet = age => {
    const isAdult = checkAge(age);
    if (isAdult === true){
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
}

console.log(greet(18)); // Hello there
console.log(greet(17)); // Hey kiddo
console.log(greet(999)); // Hello there


console.log('----exercise 2.1----');


const calcVATAmount = (priceExcl, VATPercentage) => priceExcl * (VATPercentage / 100);

const calcPriceIncl = (priceExcl, VATPercentage) => {
    const VATAmount = calcVATAmount(priceExcl, VATPercentage);
    const priceIncl = priceExcl + VATAmount;
    return priceIncl;
}

console.log('the price including VAT is: ' + calcPriceIncl(1000, 21)); // 1210
console.log('the price including VAT is: ' + calcPriceIncl(20, 9)); // 21.8


console.log('----exercise 2.2----');

const calcPriceExcl = (priceIncl, VATPercentage) => {
    console.log('running calcPriceExcl...');
    const denominator = 1 + (VATPercentage / 100);
    const VATAmount = priceIncl / denominator;
    return VATAmount;
}

const calcPriceExclAndVAT = (priceIncl, VATPercentage) => {
    const priceExcl = calcPriceExcl(priceIncl, VATPercentage);
    const VATAmount = priceIncl - priceExcl;
    const outcome = [priceExcl.toFixed(2), VATAmount.toFixed(2)];
    return outcome;
}

console.log(calcPriceExclAndVAT(21,8, 9)); // ['19.44', '1.56']
console.log(calcPriceExclAndVAT(1210, 21)); // ['1000.00', '210.00']