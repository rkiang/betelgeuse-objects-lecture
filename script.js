console.log('script.js has been sourced in');

//[name, favoriteAnimal]
var people = [
    {
        name: 'Canin',
        favoriteAnimal: 'Uniflitten'

    },
    {
        name: 'Charly',
        favoriteAnimal: 'Angler Fish'
    },
    {
        name: 'Bobby',
        favoriteAnimal: 'Liger'
    },
    {
        name: 'Luke',
        favoriteAnimal: 'Killer Whale'
    },
];

console.log(people);

// log {person}'s favorite animal is the [favoriteAnimal]
// log for Canin: Canin's favorite animal is the Uniflitten

for (var i = 0; i < people.length; i++) {
    var childPersonArray = people[i]; // ['Canin', 'Uniflitten'], this makes people array four times
    console.log(childPersonArray[0] + '\'s favorite animal is the ' + childPersonArray[1]); // logs each of the four childPersonArray, but only the [0] index
}