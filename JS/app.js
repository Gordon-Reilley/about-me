'use strict';

let username = prompt("Hello there, what's your name?");
console.log(username);

let myAge = prompt('Hi ' + username + ", am I 26 year old?").toLowerCase();


if (myAge === 'yes' || myAge === 'y') {
  // console.log('Your right, I am 26 years old');
  alert('Your right, I am 26 years old');
} else if (myAge === 'no' || myAge === 'n') {
  // console.log('It was a fifty fifty chance, unfortunately you choose wrong.');
  alert('It was a fifty fifty chance, unfortunately you choose wrong.');
} else {
  // console.log('Please answer with "yes" or "no."');
  alert('Please answer with "yes" or "no."');
}

let favColor = prompt('Is my favorite color purple?');

if (favColor === 'yes' || favColor === 'y') {
  // console.log('Your right, my favorite color is purple.');
  alert('Your right, my favorite color is purple.');
} else if (favColor === 'no' || favColor === 'n') {
  // console.log('It was a fifty fifty chance, unfortunately you choose wrong.');
  alert('It was a fifty fifty chance, unfortunately you choose wrong.');
} else {
  // console.log('Please answer with "yes" or "no."');
  alert('Please answer with "yes" or "no."');
}

let runAway = prompt('Have I ever ran away from home?');

if (runAway === 'no' || runAway === 'n') {
  // console.log('Your right, I have never ran away from home.');
  alert('Your right, I have never ran away from home.');
} else if (runAway === 'yes' || runAway === 'y') {
  // console.log('It was a fifty fifty chance, unfortunately you choose wrong.');
  alert('It was a fifty fifty chance, unfortunately you choose wrong.');
} else {
  // console.log('Please answer with "yes" or "no."');
  alert('Please answer with "yes" or "no."');
}

let videoGame = prompt('Do I play video games?');

if (videoGame === 'yes' || videoGame === 'y') {
  // console.log('Your right, I do play video games.');
  alert('Your right, I do play video games.');
} else if (videoGame === 'no' || videoGame === 'n') {
  // console.log('It was a fifty fifty chance, unfortunately you choose wrong.');
  alert('It was a fifty fifty chance, unfortunately you choose wrong.');
} else {
  // console.log('Please answer with "yes" or "no."');
  alert('Please answer with "yes" or "no."');
}

let myJournal = prompt('Do I keep a journal?');

if (myJournal === 'no' || myJournal === 'n') {
  // console.log('Your right, I do not keep a journal.');
  alert('Your right ' + username + ', I do not keep a journal. Thanks for playing!');
} else if (myJournal === 'yes' || myJournal === 'y') {
  // console.log('It was a fifty fifty chance, unfortunately you choose wrong.');
  alert('It was a fifty fifty chance ' + username + ', unfortunately you choose wrong. Thanks for playing! ');
} else {
  // console.log('Please answer with "yes" or "no."');
  alert('Please answer with "yes" or "no."');
}

document.write('Thanks for coming to my page ' + username + '! It was great interacting with you, I hope you enjoyed your stay.');
