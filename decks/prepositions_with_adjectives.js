topic = "Prepositions with adjectives.";
grammar = "Nice/kind/good/generous/polite/silly/stupid OF smbd (to do smth)<br>";
grammar+= "But! be nice/kind/friendly/cruel TO smbd<br>";
grammar+= "Angry/annoyed/furious ABOUT smth<br>";
grammar+= "Angry/annoyed/furious WITH smbd FOR doing smth<br>";
grammar+= "Excited/worried/upset/nervous ABOUT smth<br>";
grammar+= "Delighted/pleased/satisfied/disappointed WITH smth<br>";
grammar+= "Surprised/shocked/amazed/astonished AT/BY smth<br>";
grammar+= "Impressed WITH/BY smbd/smth<br>";
grammar+= "fed up/bored WITH smth<br>";
grammar+= "Sorry ABOUT smth<br>";
grammar+= "Sorry FOR doing smth<br>";
grammar+= "Acceptable: 'I'm sorry I did smth<br>";
grammar+= "Feel/to be sorry FOR smbd<br>";

cards = [
 {"question":"It was %arg1 ... you to help me with that",
  "answer": "of",
  "radios": ["of", "from", "by", "to"],
  "arg1": ["nice", "kind"],
 },
 {"question":"It was %arg1 ... him to go out in such weather",
  "answer": "of",
  "radios": ["of", "from", "by", "to"],
  "arg1": ["stupid", "relentless"],
 },
 {"question":"She was always %arg1 ... me",
  "answer": "to",
  "radios": ["of", "by", "at", "to"],
  "arg1": ["kind", "good", "friendly"],
 },
 {"question":"It's stupid to be %arg1 ... %arg2",
  "answer": "about",
  "radios": ["about", "of", "by", "at", "with"],
  "arg1": ["angry", "annoyed", "furious"],
  "arg2": ["bad weather", "injustice"],
 },
 {"question":"I'm %arg1 ... her for being late to the lesson",
  "answer": "with",
  "radios": ["about", "of", "by", "at", "with"],
  "arg1": ["angry", "annoyed", "furious"],
 },
 {"question":"I'm %arg1 ... my next speech",
  "answer": "about",
  "radios": ["about", "of", "by", "at", "with"],
  "arg1": ["excited", "worried", "upset", "nervous", "happy"],
 },
 {"question":"I'm %arg1 ... the gift I got at Xmas",
  "answer": "with",
  "radios": ["about", "of", "by", "at", "with"],
  "arg1": ["delighted", "pleased", "satisfied", "disappointed"],
 },
 {"question":"I'm %arg1 ... news",
  "answer": ["at", "by"],
  "radios": ["about", "of", "by", "at", "with"],
  "arg1": ["suprpised", "shocked", "amazed", "astonished"],
 },
 {"question":"I'm impressed ... his productivity",
  "answer": ["with", "by"],
  "radios": ["about", "of", "by", "at", "with"],
 },
 {"question":"I'm impressed ... her",
  "answer": ["with", "by"],
  "radios": ["about", "of", "by", "at", "with"],
 },
 {"question":"I'm %arg1 ... his behaviour",
  "answer": "with",
  "radios": ["about", "of", "by", "at", "with"],
  "arg1": ["fed up", "bored"],
 },
 {"question":"Hey, neighbor! I'm sorry ... the party last night. It was noisy",
  "answer": "for",
  "radios": ["about", "for", "by", "at", "with"],
 },
 {"question":"I'm sorry ... shooting you last night",
  "answer": "for",
  "radios": ["about", "for", "by", "at", "with"],
 },
 {"question":"I'm sorry ... I shot you last night",
  "answer": ["","no preposition"],
  "radios": ["about", "for", "by", "at", "no preposition"],
 },
 {"question":"I feel sorry ... my colleague. He was fired",
  "answer": "for",
  "radios": ["about", "for", "by", "at", "no preposition"],
 },

]

include("js/engine.js",function(){
  //
});
