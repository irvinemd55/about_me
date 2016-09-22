'use strict';

alert('Hello there! It seems that you\'ve stumbled across my \"About Me\" page. My name is Irvine, and I\'d love to give you a quick rundown of my likes and dislikes. Simple yes or no answers will suffice. Have fun guessing!');

var testScore = 0;

function firstName() {
  var myName = prompt ('Ok! Let\'s start off with something simple. My name\'s Irvine, right?');
  var lowerName = myName.toLowerCase();
  if (lowerName.charAt(0) === 'y'){
    alert ('That\'s right!');
    testScore ++;
  } else {
    alert ('Sorry, that\'s wrong.');
  };
  console.log('The user answered ' + lowerName + ' for Question #1.' );
}

firstName();

function originalState() {

  var myState = prompt ('Do you think I\'m originally from this state?');
  var lowerState = myState.toLowerCase();
  if (lowerState.charAt(0) === 'n'){
    alert ('That\'s right! I\'m originally from Texas.');
    testScore ++;
  } else {
    alert ('Sorry, that\'s wrong. I\'m originally from Texas.');
  };
  console.log('The user answered ' + lowerState + ' for Question #2.' );
}

originalState();

function personalHobby() {
  var myHobby = prompt ('I might be fibbing on the next few prompts. My favorite hobby is dancing. Do you think that\'s true?');
  var lowerHobby = myHobby.toLowerCase();
  if (lowerHobby.charAt(0) === 'y'){
    alert ('That\'s right! I love to dance.');
    testScore ++;
  }
  else {
    alert ('Sorry, that\'s wrong. I love to dance.');
  };
  console.log('The user answered ' + lowerHobby + ' for Question #3.' );
}

personalHobby();

function favoriteFood() {
  var myFood = prompt ('My favorite food is Pizza. Do you think that\'s true?');
  var lowerFood = myFood.toLowerCase();
  if (lowerFood.charAt(0) === 'n'){
    alert ('That\'s right! My favorite food is Tacos.');
    testScore ++;
  } else {
    alert ('Sorry, that\'s wrong. My favorite food is Tacos.');
  };
  console.log('The user answered ' + lowerFood + ' for Question #4.' );
}

favoriteFood();

function likeCode() {
  var myCode = prompt ('Last Question: Do you think I hate coding?');
  var lowerCode = myCode.toLowerCase();
  if (lowerCode.charAt(0) === 'n'){
    alert ('That\'s right! I wouldn\'t be at Code Fellows if I did.');
    testScore ++;
  } else {
    alert ('Sorry, that\'s wrong. I\'m at Code Fellows for a reason.');
  };
  console.log('The user answered ' + lowerCode + ' for Question #5.' );
}

likeCode();

function numPets() {
  var myPets = parseInt(prompt('Can you guess the number of pets I\'ve owned in my life?'));
  var guessing = 4;
  while (guessing > 1){
    if (myPets < 6) {
      guessing--;
      myPets = parseInt(prompt('You\'re close, but I\'ve owned a few more than that.'));
    }
    else if (myPets > 6) {
      guessing--;
      myPets = parseInt(prompt('You\'re guess is alittle high. Try again with a few less.'));
    }
      else {
      guessing = 0;
    }
  };
  if (myPets === 6) {
    alert('That\'s right! I\'ve owned ' + myPets + ' pets.');
    testScore ++;
  }
  else {
    alert('I\'m sorry that was one too many guesses. I\'ve owned 6 pets.');
  };
}

numPets();

function driveThru() {
  var stateDriveGuesses = 7;
  var stateDrive = prompt('I drove up to CodeFellows from my original home in Texas. Can you guess one of the states I drove through on my way to Washington?').toLowerCase();
  var stateDriveAnswers = ['new mexico', 'colorado', 'wyoming', 'idaho', 'montana'];
  while (stateDriveGuesses > 1){
    for (var i = 0; i < stateDriveAnswers.length; i++) {
      if (stateDriveAnswers[i] === stateDrive) {
        stateDriveGuesses = 0;
        alert('You got it right!');
        break;
      }
    }
    if (stateDriveGuesses === 0){
      break;
    }
    prompt('Sorry, that answer is incorrect. Please try again.').toLowerCase();
    stateDriveGuesses--;
  };
  if (stateDriveGuesses === 1) {
    alert('I\'m sorry. Correct answers include:' + stateDriveAnswers + '.');
  }
  else {
    alert('Good job! Correct answers include:' + stateDriveAnswers + '.');
    testScore ++;
  };
}

driveThru();

alert('Congratulations! You got ' + testScore + ' of 7 questions right!');
