'use strict';

alert('Hello there! It seems that you\'ve stumbled across my \"About Me\" page. My name is Irvine, and I\'d love to give you a quick rundown of my likes and dislikes. Simple yes or no answers will suffice. Have fun guessing!');

var myName = prompt ('Ok! Let\'s start off with something simple. My name\'s Irvine, right?');
var lowerName = myName.toLowerCase();
if (lowerName.charAt(0) === 'y'){
  alert ('That\'s right!');
} else {
  alert ('Sorry, that\'s wrong.');
};
console.log('The user answered ' + lowerName + ' for Question #1.' );
var myState = prompt ('Do you think I\'m originally from this state?');
var lowerState = myState.toLowerCase();
if (lowerState.charAt(0) === 'n'){
  alert ('That\'s right! I\'m originally from Texas.');
} else {
  alert ('Sorry, that\'s wrong. I\'m originally from Texas.');
};
console.log('The user answered ' + lowerState + ' for Question #2.' );
var myHobby = prompt ('I might be fibbing on the next few prompts. My favorite hobby is dancing. Do you think that\'s true?');
var lowerHobby = myHobby.toLowerCase();
if (lowerHobby.charAt(0) === 'y'){
  alert ('That\'s right! I love to dance.');
}
else {
  alert ('Sorry, that\'s wrong. I love to dance.');
};
console.log('The user answered ' + lowerHobby + ' for Question #3.' );
var myFood = prompt ('My favorite food is Pizza. Do you think that\'s true?');
var lowerFood = myFood.toLowerCase();
if (lowerFood.charAt(0) === 'n'){
  alert ('That\'s right! My favorite food is Tacos.');
} else {
  alert ('Sorry, that\'s wrong. My favorite food is Tacos.');
};
console.log('The user answered ' + lowerFood + ' for Question #4.' );
var myCode = prompt ('Last Question: Do you think I hate coding?');
var lowerCode = myCode.toLowerCase();
if (lowerCode.charAt(0) === 'n'){
  alert ('That\'s right! I wouldn\'t be at Code Fellows if I did.');
} else {
  alert ('Sorry, that\'s wrong. I\'m at Code Fellows for a reason.');
};
console.log('The user answered ' + lowerCode + ' for Question #5.' );
