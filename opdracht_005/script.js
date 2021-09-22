let person = {
    name: 'Marloes',
    age: 45
};
console.log(person);

person.name = 'Marloes';
console.log(person.name);

person['age'] = 45
console.log(person.age);

let evaluations = [7, 10, 9];
console.log(evaluations);

let colorReeks = ['groen', 'blauw', 'rood'];
colorReeks.push('geel');
colorReeks.push(5);
colorReeks.push({ greeting: "hi ik ben een object" });
console.log(colorReeks);
console.log(colorReeks.length);
console.log(colorReeks[0]);
console.log(colorReeks[2]);
console.log(colorReeks[5]);
