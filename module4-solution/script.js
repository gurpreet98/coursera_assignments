(function (window) {


var name = ["Yaakov", "Jenny", "Gurpreet", "Johnson", "Bob", "Jim", "Wayne", "Harry", "Tony", "James"];


for (var i in name) {

 
  var firstLetter = ((name[i]).charAt(0)).toLowerCase();

 
  if (firstLetter == 'j') {
     window.byeSpeak.speak(name[i]);
  } else {
     window.helloSpeak.speak(name[i]);
  }
}
})(window);