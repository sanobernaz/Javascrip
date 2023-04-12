/*Indroduction*/

//Hello world!
console.log('Hello,world');

// variables
let greeting =' Hej from en varisbel';
console.log(greeting);
// Redefine
greeting=3;
console.log(greeting);

greeting = "Hello";
const PI = 3.1415;

//Printing
console.log(greeting + ', PI is: ' + PI);

//Interpolation and templating literals
console.log(`${greeting}, PI is ${PI}`);

// Be careful with floats
console.log(0.1 +0.2);

// Equality
console.log(1 == 1); // true
console.log(1 == '1'); // true - will convert to sa
console.log(1 === '1'); // false

// Loose typing and converstion
let myNumber = 5;
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber + 5);

myNumber = ' 5 ';
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber + 5); // '55'

/* control flows*/
// if

let myAge = 38;
if(myAge>= 40){
    console.log('you are getting old ');

}
else{
    console.log('you\'re still young');
}
// Ternary operation
myAge === 38 ?
           console.log('38') :
           console.log('not old');

// boolean statement ? true : false


/* 
  camelcase // praxis in JS,vars
  PascalCase // Classes
  snake_case // often not used 
  */

  /* Loop */
  // for
  for(let i = 0; i < 5; i++){
    console.log(i);

  }

  let persons = [
    'Mike',
    'Emma',
    'Ally',
    'Lizzi',

  ];

  // Log entire arrey
  console.log(persons);

  // lenght of array
  console.log(persons.length);

  // Get the first person
  console.log(persons[0]);

  // Get the last person
  console.log(persons[persons.length - 1]);

  // Get a slice of the arrey
  let newPersons = persons.slice(0,2); // First 2

  console.log(newPersons);

  // Add to start of array
  persons.unshift('Acke');

  // Add to end of array
  persons.push('Lotta');

  console.log(persons);

  // remove from start of array
   persons.shift();

   console.log(persons);

  // Remove from end of array
  persons.pop();

  console.log(persons);

  //Loop over array
  for(let person of persons){
    console.log(person);
  }

  // Older but still.works
   for(let i = 0; i< persons.length; i++){
      console.log(persons[i]);
   }

   // Lamba loop
   persons.forEach(x => console.log(x));

   // Objects
   let mike = {
    firstName: 'Mike',
    lastName: 'Back',
    age: 38,
    hobby: 'music'


   };
    console.log(mike);

    console.log(`firtstName: ${mike.firstName}`);
    let mikeStr = `${mike.firstName} ${mike.lastName},age: ${mike.age}`;
    console.log(mikeStr);


      















