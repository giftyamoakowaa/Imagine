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
