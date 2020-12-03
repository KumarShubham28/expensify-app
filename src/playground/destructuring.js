// const person = {
//     name: 'Shubham',
//     age: 24,
//     location: {
//         city: 'Delhi',
//         temp: 16
//     }
// };

// // destructuring the object person and assigning it to a variable
// // name and age.
// // we can provide default value while destructuring
// // or we can rename the variable and then provide the default value

// // const {name= 'Kumar', age} = person;

// const { name: firstName= 'Kumar', age} = person;
// console.log(`${firstName} is ${age}.`);
// // destructuring object person.location
// // and assigning new name to the temp
// const { city, temp: Temperature } = person.location;

// console.log(`It's is ${Temperature} degree C in ${city}.`)

// Array destructuring

const address = ['Dwarka Sector-8 S.P.G Complex', 'Delhi', 'Delhi', '811211']
// For array destructuring we use square bracket [] and for 
// object destructuring we use curly bracket {}

// const [street, city, state, zip] = address;

// these variable inside the destructuring array are difined 
// with the respect of position
// it's not nessesary to destructure all the element inside the original array
// we can left that position blank and proceed

const [, city, state='Bangalore'] = address;
// we can set the default just like object 
// it can take any variable name if we want to

console.log(`You are in ${city} which comes under state: ${state}`)