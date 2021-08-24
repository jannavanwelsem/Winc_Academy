let colors = ['yellow', 'blue', 'red', 'orange'];
let color = 0;

while (color < colors.length) {
    console.log(`the color: ${colors[color]}`);
    color++;
}

console.log(`while has looped through all the colors`);

for (color = 0; color < colors.length; color++) {
    console.log(`the color: ${colors[color]}`);
}

console.log('for has looped through all the colors');

colors.forEach(element => console.log(`the color: ${element}`));

console.log(`forEach has looped through all the colors`);

/*
Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
    Als ik het netjes formatteer, neemt mijn while loop 4 regels in beslag, en de for loop 3.

Hoeveel regels neemt mijn forEach method in beslag?
    Slechts 1 regel.

Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
    Ik vind een array method leesbaarder omdat daar meer 'menselijke' taal gebruikt wordt, terwijl dat bij for en while vrij abstract is.

Kun je een array method gebruiken op een object? Het antwoord is nee. Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object. Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?
    Ja, ik vind wel dat ik nu aan het itereren ben.
 */

const eenObject = {a: 1, b: 'drie', c: 'vier', d: true, e: ['e1', 'e2', 'e3']};

//met een for...in statement:
for (let property in eenObject){
    console.log(`${property}: ${eenObject[property]}`);
}

//of met Object.entries()-methode
Object.entries(eenObject).forEach(item => console.log(item))

