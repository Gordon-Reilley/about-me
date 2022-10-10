'use strict';

let username = prompt('Hello there, what\'s your name?');
console.log(username);

let counter = 0;

function guessAge() {
  let myAge = prompt('Hi ' + username + ', am I 26 year old?').toLowerCase();
  if (myAge === 'yes' || myAge === 'y') {
    alert('You\'re right, I am 26 years old');
    counter++;
  } else if (myAge === 'no' || myAge === 'n') {
    alert('It was a fifty fifty chance, unfortunately you choose wrong.');
  } else {
    alert('Please answer with "yes" or "no."');
  }
}

guessAge();

function guessColor() {
  let favColor = prompt('Is my favorite color purple?');
  if (favColor === 'yes' || favColor === 'y') {
    alert('You\'re right, my favorite color is purple.');
    counter++;
  } else if (favColor === 'no' || favColor === 'n') {
    alert('It was a fifty fifty chance, unfortunately you choose wrong.');
  } else {
    alert('Please answer with "yes" or "no."');
  }
}

guessColor();

function guessRunAway() {
  let runAway = prompt('Have I ever ran away from home?');
  if (runAway === 'no' || runAway === 'n') {
    alert('You\'re right, I have never ran away from home.');
    counter++;
  } else if (runAway === 'yes' || runAway === 'y') {
    alert('It was a fifty fifty chance, unfortunately you choose wrong.');
  } else {
    alert('Please answer with "yes" or "no."');
  }
}

guessRunAway();

function guessGame() {
  let videoGame = prompt('Do I play video games?');
  if (videoGame === 'yes' || videoGame === 'y') {
    alert('You\'re right, I do play video games.');
    counter++;
  } else if (videoGame === 'no' || videoGame === 'n') {
    alert('It was a fifty fifty chance, unfortunately you choose wrong.');
  } else {
    alert('Please answer with "yes" or "no."');
  }
}

guessGame();

function guessJournal() {
  let myJournal = prompt('Do I keep a journal?');
  if (myJournal === 'no' || myJournal === 'n') {
    alert('You\'re right ' + username + ', I do not keep a journal.');
    counter++;
  } else if (myJournal === 'yes' || myJournal === 'y') {
    alert('It was a fifty fifty chance ' + username + ', unfortunately you choose wrong.');
  } else {
    alert('Please answer with "yes" or "no."');
  }
}

guessJournal();

function guessNumber() {
  let favNumQuestion = 'Can you guess my favorite number between 1-10? I\'ll give you 4 chances!';

  const favNum = 8;

  let attempts = 4;

  let userAttempts = null;

  while (favNum !== userAttempts) {
    if (!attempts) {
      alert('you have ran out of chances the correct answer was 8.');
      break;
    }
    userAttempts = parseInt(prompt(favNumQuestion));
    attempts-=1;
    if (userAttempts === favNum) {
      alert(`Dang ${username} you must be a mind reader because you guessed right!`);
      attempts = 0;
      counter++;
    } if (userAttempts < favNum) {
      alert(`Not quite you're a bit low, you have ${attempts} remaining`);
    } if (userAttempts > favNum) {
      alert(`Not quite you're a bit high, you have ${attempts} remaining`);
    }
  }
}

guessNumber();

function guessSport() {
  let favSport = ['wrestling','football','mountain biking','surfing','skateboarding','snowboarding','basketball','disc golf','lacrosse','soccer'];

  let guessFavSport = '';

  guessFavSport = prompt('What do you think one of my favorite sports is?').toLowerCase();

  let correctSport = false;

  let attemptsLeft = 6;

  for (let i = 0; i < attemptsLeft; i++) {
    for (let j = 0; j < favSport.length; j++){
      if (favSport[j] === guessFavSport){
        correctSport = true;
      }
    }
    if (correctSport === true){
      alert(`You're definitely a mind reader because ${guessFavSport} is one of my favorite sports!`);
      counter++;
      break;
    } else if (i < attemptsLeft - 1){
      alert(`That's an awesome sport, just not one of my favorites. Take another shot at it I'll give you ${attemptsLeft - i -1} more chances`);
      guessFavSport = prompt('What do you think one of my favorite sports is?').toLowerCase();
    } else {
      alert('Sorry, that was your last chance better luck next time.');
    }
  }
}

guessSport();

alert(`${username} you got ${counter} right out of 7 questions correct! Thanks for playing, enjoy my website.`);
