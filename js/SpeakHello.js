(function (window) {     
      var helloSpeaker = {};
  var speakWord = "Hello";
      helloSpeaker.speak = function (names) {
          if (names.startsWith('J') || names.startsWith('j')) {
          
          } else {
              console.log(speakWord + " " + names);
          }
      }
          window.helloSpeaker = helloSpeaker;
  })(window);
  