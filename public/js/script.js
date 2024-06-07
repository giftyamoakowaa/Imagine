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