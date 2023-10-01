topic = "Prepositions with verbs (p5).";
grammar = "Believe/specialise/succeed IN<br>";
grammar+= "Break INTO<br>";
grammar+= "Crash/drive/bump/run INTO<br>";
grammar+= "Divide/cut/split INTO<br>";
grammar+= "Translate INTO<br>";
grammar+= "Collide WITH; Fill smth WITH, <b>BUT</b> full OF<br>";
grammar+= "Provide/supply smb WITH<br>";
grammar+= "Happen TO, prefer one thing TO another<br>";
grammar+= "Concentrate/insist/spend ON<br>";

cards = [
 {"question":"Do you believe ... God?",
  "answer": "in",
  "radios": ["in", "into", "with", "to", "on"],
 },
 {"question":"I could admin anything and code anything,<br>but I do specialise ... databases",
  "answer": "in",
  "radios": ["in", "into", "with", "to", "on"],
 },
 {"question":"I kinda succeed ... failures. I do it regularly and with a pleasure",
  "answer": "in",
  "radios": ["in", "into", "with", "to", "on"],
 },
 {"question":"Somebody broke ... a shop in Uralmash",
  "answer": "into",
  "radios": ["in", "into", "with", "to", "on"],
 },
 {"question":"I %arg1 a car ... barrier arm",
  "answer": "into",
  "radios": ["in", "into", "with", "to", "on"],
  "arg1": ["crashed", "drived", "bumped", "ran"],
 },
 {"question":"I %arg1 an apple ... two pieces",
  "answer": "into",
  "radios": ["in", "into", "with", "to", "on"],
  "arg1": ["cut", "divided", "split"],
 },
 {"question":"I translated my game ... Turkish",
  "answer": "into",
  "radios": ["in", "into", "with", "to", "on"],
 },
 {"question":"A school bus collided ... a car",
  "answer": "with",
  "radios": ["in", "into", "with", "to", "on"],
 },
 {"question":"A school bus crahsed ... a car",
  "answer": "into",
  "radios": ["in", "into", "with", "to", "on"],
 },
 {"question":"Did you fill the glass ... a wine?",
  "answer": "with",
  "radios": ["with", "by", "of"],
 },
 {"question":"Is your glass full ... wine?",
  "answer": "of",
  "radios": ["with", "by", "of"],
  "needhelp": "of wine or of a wine?",
 },
 {"question":"Could you %arg1 us ... fuel?",
  "answer": "with",
  "radios": ["in", "into", "with", "to", "on"],
  "arg1": ["provide", "supply"],
 },
 {"question":"What happened ... you? You look bad",
  "answer": "to",
  "radios": ["in", "into", "with", "to", "on"],
 },
 {"question":"I prefer flavoured tea ... coffee",
  "answer": "to",
  "radios": ["in", "into", "with", "to", "on"],
 },
 {"question":"I didn't visit last game,<br>because I wanted to concentrate ... my work",
  "answer": "on",
  "radios": ["in", "into", "with", "to", "on"],
 },
 {"question":"I insisted ... visiting the shooting range",
  "answer": "on",
  "radios": ["in", "into", "with", "to", "on"],
 },
 {"question":"I spend a lot ... gadgets and Lego",
  "answer": "on",
  "radios": ["in", "into", "with", "to", "on"],
 },
]

include("js/engine.js",function(){
  //
});

