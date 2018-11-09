(function (window) {

var helloSpeak = {};

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";


helloSpeak.speak = function (name) {
  console.log(speakWord + " " + name);
}


window.helloSpeak = helloSpeak;

})(window);