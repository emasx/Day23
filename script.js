const emas = {
    firstName: 'De',
    lastName: 'Emas',
    age: 2022-1994,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

// console.log(emas);
console.log(emas.lastName);
console.log(emas['lastName']);

const nameKey = 'Name';
console.log(emas['first' + nameKey]);   // in the square brackets we can put any expression
console.log(emas['last' + nameKey]);


const interestedIn = prompt("What do you want to know about Emas? Choose between firstName, lastName, age, job, and friends" );
// console.log(emas[interestedIn]); // JavaScript will now come here and replace [interestedIn] with the actual value of the variable and then that's the one that will be looked up on the Emas object.

if(emas[interestedIn]) {
    console.log(emas[interestedIn]); 
} else {
    console.log('Wrong request!Choose between firstName, lastName, age, job, and friends.');
}


// Add new proprieties to the object

emas.location = 'Romania';
emas['twitter'] = '@emas_ecs';
console.log(emas);


// Challenge 
// "Emas has 3 friends, and his best friend is called Michael";

console.log(`${emas.lastName} has ${emas.friends.length} friends, and his best friend is called ${emas.friends[0]}`);
