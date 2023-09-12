/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...






/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

// const fullNameString = `My name is ${}`;
// const yearOfBirthString =
// const hobbyString =




/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let vrFullName = "Mohammed AL Osaimi";
let vrYearOfBirth = 2005;
let vrHobby = "History";
let vrFunFact = "I am interested in video games";
// I don't have picture of myself on this device

console.log(`My name is ${vrFullName} I am ${2023 -vrYearOfBirth} my hobby is ${vrHobby}`);

let stars = 0;

console.log(`${stars}`);
function incrementBy1(value) {
  value = value + 1;
  return value;
}
console.log(`${incrementBy1(stars)}`);
function decrementBy1(value) {
  value = value - 1; 
  return value;
}
decrementBy1(stars);
console.log(`${decrementBy1(stars)}`);
function incrementBy2(value) {
  value = value + 2; 
  return value;
}
incrementBy2(stars);
console.log(`${incrementBy2(stars)}`);
function decrementBy2(value) {
  value = value - 2;
  return value;
}
decrementBy2(stars);
console.log(`${decrementBy2(stars)}`);

