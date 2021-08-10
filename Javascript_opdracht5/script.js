const age = 28;
const identifiesAsWoman = true;
const driverStatus = "boB";
const firstName = 'sarah';
const totalAmount = 120;

if (age >= 18) {
    console.log('Welkom in de kroeg!');
} else {
    console.log('Helaas, kom later maar terug...');
}

if (identifiesAsWoman) {
    console.log('Koop hier je ticket -> ');
} else {
    console.log('Helaas, kom een andere avond maar terug...');
}

if (driverStatus == "bob") {
    console.log('Stap maar achter het stuur');
} else {
    console.log('Stap maar achterin');
}

if (age >= 18 && age <= 25) {
    console.log('Je krijgt 50% korting op bier');
} else {
    console.log('Je betaalt de volle prijs');
}

if (firstName === 'Bram' || firstName === 'Sarah' || firstName === 'bram' || firstName === 'sarah') {
    console.log('Gratis biertje voor jou');
} else {
    console.log('Sorry, alleen Sarah en Bram krijgen een gratis biertje');
}

if (totalAmount >= 100) {
    console.log('Je krijgt een flesje champagne cadeau');
} else if (totalAmount > 50) {
    console.log("Je krijgt een portie nacho's cadeau");
} else if (totalAmount > 25) {
    console.log('Je krijgt een portie (vega) bitterballen cadeau');
} else {
    console.log('Besteed nog wat meer meer voor een cadeau bij je bestelling');
}