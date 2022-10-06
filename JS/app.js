'use strict';

let username = prompt('Hello there, what\'s your name?');
console.log(username);

function guessAge() {
  let myAge = prompt('Hi ' + username + ', am I 26 year old?').toLowerCase();
  if (myAge === 'yes' || myAge === 'y') {
    // console.log('You\'re right, I am 26 years old');
    alert('You\'re right, I am 26 years old');
  } else if (myAge === 'no' || myAge === 'n') {
    // console.log('It was a fifty fifty chance, unfortunately you choose wrong.');
    alert('It was a fifty fifty chance, unfortunately you choose wrong.');
  } else {
    // console.log('Please answer with "yes" or "no."');
    alert('Please answer with "yes" or "no."');
  }
}

guessAge();

function guessColor() {
  let favColor = prompt('Is my favorite color purple?');
  if (favColor === 'yes' || favColor === 'y') {
    // console.log('You\'re right, my favorite color is purple.');
    alert('You\'re right, my favorite color is purple.');
  } else if (favColor === 'no' || favColor === 'n') {
    // console.log('It was a fifty fifty chance, unfortunately you choose wrong.');
    alert('It was a fifty fifty chance, unfortunately you choose wrong.');
  } else {
    // console.log('Please answer with "yes" or "no."');
    alert('Please answer with "yes" or "no."');
  }
}

guessColor();

function guessRunAway() {
  let runAway = prompt('Have I ever ran away from home?');
  if (runAway === 'no' || runAway === 'n') {
    // console.log('You\'re right, I have never ran away from home.');
    alert('You\'re right, I have never ran away from home.');
  } else if (runAway === 'yes' || runAway === 'y') {
    // console.log('It was a fifty fifty chance, unfortunately you choose wrong.');
    alert('It was a fifty fifty chance, unfortunately you choose wrong.');
  } else {
    // console.log('Please answer with "yes" or "no."');
    alert('Please answer with "yes" or "no."');
  }
}

guessRunAway();

let videoGame = prompt('Do I play video games?');

if (videoGame === 'yes' || videoGame === 'y') {
  // console.log('You\'re right, I do play video games.');
  alert('YYou\'re right, I do play video games.');
} else if (videoGame === 'no' || videoGame === 'n') {
  // console.log('It was a fifty fifty chance, unfortunately you choose wrong.');
  alert('It was a fifty fifty chance, unfortunately you choose wrong.');
} else {
  // console.log('Please answer with "yes" or "no."');
  alert('Please answer with "yes" or "no."');
}

let myJournal = prompt('Do I keep a journal?');

if (myJournal === 'no' || myJournal === 'n') {
  // console.log('You\'re right, I do not keep a journal.');
  alert('You\'re right ' + username + ', I do not keep a journal. Thanks for playing!');
} else if (myJournal === 'yes' || myJournal === 'y') {
  // console.log('It was a fifty fifty chance, unfortunately you choose wrong.');
  alert('It was a fifty fifty chance ' + username + ', unfortunately you choose wrong. Thanks for playing! ');
} else {
  // console.log('Please answer with "yes" or "no."');
  alert('Please answer with "yes" or "no."');
}

// question 6

let favNumQuestion = 'Can you guess my favorite number between 1-10? I\'ll give you 4 chances!';

const favNum = 8;

let attempts = 4;

let userAttempts = null;

while (favNum !== userAttempts) {
  if (!attempts) {
    alert('you have ran out of chances the correct answer was 8.');
    break;
  }
  // console.log(favNumQuestion);
  userAttempts = parseInt(prompt(favNumQuestion));
  // console.log(userAttempts);
  attempts-=1;
  // console.log(favNum); console.log(favNumQuestion);
  if (userAttempts === favNum) {
    alert(`Dang ${username} you must be a mind reader because you guessed right!`);
    attempts = 0;
  } if (userAttempts < favNum) {
    alert(`Not quite you're a bit low, you have ${attempts} remaining`);
    // favNumQuestion = prompt('Can you guess my favorite number between 1-10? I\'ll give you 4 chances!');
  } if (userAttempts > favNum) {
    alert(`Not quite you're a bit high, you have ${attempts} remaining`); 
    // favNumQuestion = prompt('Can you guess my favorite number between 1-10? I\'ll give you 4 chances!');
  }
}

// question 7
