const myButton = document.getElementById('btn');
myButton.onclick = function () {
    const name = prompt('Enter your full name');
    document.getElementById('name').innerText = name;
    
}

// variables
const pi = 3.142;
let name = 'Gifty Amoakowaa';
let age = 21;
let present = false;
console.log(name);

// objects
const car = {
    numberPlate: 'GR-345-24',
    model: 'Bentley',
    color: 'white',
    weight: 50,
    weightUnit: 'KG',
    owner: {
        name: 'Gifty',
        driver:{ 
            name: 'Shem',
        }
    }
}
console.log(car.numberPlate);
console.log(car.owner.driver.name);

car.model = 'Benz';
console.log(car.model);

car.owner.driver.name = 'Shem';
console.log(car.owner.driver.name);
console.log(car);


// write a function thst will take a user with firstname,lastname and return fullname;
const user = {
  firstname: 'Joe',
  lastname: 'Ganner'
}
function fullname(user) {
  return {
    ...user,
    fullname: `${user.firstname} ${user.lastname}`
  }
}
fullname(user);

// Array map
const users = [
  {firstname: 'Shania', lastname: 'Robertson'},
  {firstname: 'Freya', lastname: 'Thompson'},
  {firstname: 'stone', lastname: 'Simms'},
  {firstname: 'Pearl', lastname: 'Ashley'},
  {firstname: 'Kuks', lastname: 'Philix'}
]
users.map(fullname);

// Map and return squares of numbers
function square(number) {
  return number **2;
}
const numbers = [0,1,2,3,4,5]
numbers.map(square)

// Filter and return even numbers
function even(number) {
  return number % 2===0
}
numbers.filter(even);


// arrays
const tweet1 = {
  text: 'I am learning js todsy.',
  likes: 5,
  shares: 2,
  retweets: 1
}

const tweet2 = {
  text: 'I am learning arrays todsy.',
  likes: 8,
  shares: 3,
  retweets: 0
}

const tweets = [];
tweets.push(tweet1);
tweets.push(tweet2);
tweets.length;
tweets;

// Dates
const today = new Date();
today.toString();
today.toLocaleDateString();
today.getHours();

// if/Else
if (today.getHours() >=16) {
  console.log('class has ended!');
} else {
  console.log('class is in session!');
}
// For loop
for(let i = 0; i <= 9; i++) {
  console.log('Notify friends!', i);
}
// functions
// Defining functions
function login(username,password) {
if (username == 'Gifty' && password == '1234') {
  return 'user is logged in!';
} else if (username != 'Gifty') {
  return 'invalid username!';
} else if (password != '1234') {
  return 'Invalid password!'; 
} else {
  return 'Invalid username or password!';
}

}
// Invoking functions
login('Gifty', '1234');
// Basic Arithmetic
12 + 34;
45 - 16;
7 * 12;
78 / 4;
78 % 4;

37 / 24;

// Built-in Math functions
Math.round(37 / 24);
Math.floor(37 /24);
Math.ceil(37 /24);
Math.random();
Math.max(78, 12, 98, 14, 89);

// Order of operations
1*2+3-4/2+2**2;
// Handling user inputs
1200+Number('250');

// String Concatenation
const firstname = 'Gifty ';
const lastname = 'Amoakowaa ';
firstname.trim() + ' ' + lastname.trim()

// Template literal
`${firstname.trim()} ${lastname.trim()}`;

// String methods
firstname.length;
lastname.length;
`${firstname.trim()} ${lastname.trim}`.length;
(firstname.trim() + ' ' +lastname.trim()).length

//  Upper Case
firstname.toUpperCase();
lastname.charAt(1);
`${firstname.trim()} ${lastname.trim()}`.charAt(0);
`${firstname.trim().charAt(0)} ${lastname.trim().charAt(0)}`

// String cpnversion
String(2014)

// Write a finction that will add a participant to our Googlr Classrom

const participants = []
// Defining function
function addParticipant(email) {
// check if email was provided
if (!email) {
  return 'Email not provided!'
}
// check if email is valid
if (!email.includes ('@')){
  return 'Invalid email provided!';
}
// Add email to the participants;
participants.push(email);
// Notify them via email;
// return response
return 'Participant added!';
}

addParticipant('maameamoakowaa1@gmail.com'); 

// Arrays in Javascript
const alphabets = ['A', 'B', 'C', 'D'];
alphabets;
alphabets.join(' ')
alphabets.join(' ').split(' ');

// write a function that takes a user with name and dateofBirth and returns true if their birthday is today else false
// 
function isBirthday(user) {
  const today = new Date();
  const birthDate = new Date(user.dateOfBirth);
  if (today.getMonth()===birthDate.getMonth() && today.getDate()===birthDate.getDate())
 {return true;
} else {return false;
       }
}


isBirthday(user);


// Write a function that takes a user with name and dateOfBirth and returns birthday with their nameif their birthday is today else return not your day

function birthdayMessage(user) {
  const today = new Date();
  const birthDate = new Date(user.dateOfBirth);

  if (today.getDate() === birthDate.getDate() && today.getMonth() === birthDate.getMonth()) {
    return `Happy Birthday, ${user.name}!`;
  } else {
    return 'Not your day';
  }
}


console.log(birthdayMessage(user));

// Objects in Javascript

// Bottle class
class Bottle {
  constructor(color, shape, volume) {
    this.color=color;
    this.shape=shape;
    this.volume=volume
  }

getInfo() 
  {return `This is a ${this.color} ${this.shape} bottle with a capacity of ${this.volume}ml`;}
}


class Car {}

const bottle1 = new Bottle('black', 'circle', 300);
bottle1.getInfo();
const bottle2 = new Bottle('yeloow', 'square', 100);
bottle2.getInfo();

bottle1 instanceof Car;

// classes in Javascrip




