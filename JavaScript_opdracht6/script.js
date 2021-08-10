person = {
    name: 'Janna',
    age: 24,
    evaluations: [7, 10, 9]
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person['name']);
console.log(person['age']);
console.log(person.evaluations);
//de waarde is: [7, 10, 9]

lijstKleuren = ['rood', 'roze', 'oranje'];
console.log(lijstKleuren);
console.log(lijstKleuren.length);
console.log(lijstKleuren[0]);
console.log(lijstKleuren[lijstKleuren.length - 1]);

lijstKleuren.push('geel');
console.log(lijstKleuren);

lijstKleuren.push(27);
console.log(lijstKleuren);

lijstKleuren.push({greeting: "hi ik ben een object"});
console.log(lijstKleuren);

console.log(lijstKleuren[5]);