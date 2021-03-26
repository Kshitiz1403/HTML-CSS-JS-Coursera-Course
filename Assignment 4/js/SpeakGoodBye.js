(function (window){
      var byeSpeaker = {};    
  var speakWord = "Good Bye";
      byeSpeaker.speak = function (names) {
          if (names.startsWith('J') || names.startsWith('j')) {
              console.log(speakWord + " " + names);
          }
      }
       window.byeSpeaker = byeSpeaker;
  })(window);