topic = "Prepositions with verbs (p2).";
grammar = "Talk/read/tell/have a discussion ABOUT<br>";
grammar+= "But: discuss smth (no prep)<br>";
grammar+= "Care about smb/smt (think smb/smt is important)<br>";
grammar+= "Care what/where/how/question<br>";
grammar+= "Care FOR (questions/negative answers)<br>";
grammar+= "Care FOR smb  / Take care OF smb<br>";
grammar+= "Ask smb FOR or !no prep!<br>";
grammar+= "I asked the HR for more info about the job<br>";
grammar+= "She asked me the way to the bus station<br>";
grammar+= "Aply TO (a person, a company) FOR (a job)<br>";
grammar+= "Wait FOR, search FOR, leave (a place) FOR (another place)<br>";
grammar+= "Look FOR (search smth), look AFTER (smbd)<br>";

cards = [
 {"question":"She %arg1 ... her neighbors",
  "answer": "about",
  "radios": ["about", "to", "on", "no preposition"],
  "arg1": ["talk", "read", "tell", "has a discussion"],
 },
 {"question":"We discussed ... the war",
  "answer": ["","no preposition"],
  "radios": ["about", "to", "on", "no preposition"],
 },
 {"question":"I don't care ... people",
  "answer": "about",
  "radios": ["about", "for", "of", "no preposition"],
 },
 {"question":"I don't care what ... you're saying",
  "answer": ["","no preposition"],
  "radios": ["about", "for", "of", "no preposition"],
 },
 {"question":"Do you care ... a cup of coffee?",
  "answer": "for",
  "radios": ["about", "for", "of", "no preposition"],
 },
 {"question":"I don't care ... cold. I am used to it",
  "answer": "for",
  "radios": ["about", "for", "of", "no preposition"],
 },
 {"question":"He is old and need a person to care ... him",
  "answer": "for",
  "radios": ["about", "for", "of", "no preposition"],
 },
 {"question":"Are on a moto? Take care ... yourself!",
  "answer": "of",
  "radios": ["about", "for", "of", "no preposition"],
 },
 {"question":"I asked her ... going out",
  "answer": "for",
  "radios": ["about", "for", "of", "to"],
  "needvalidation": "yes",
 },
 {"question":"Are you on a moto? Take care ... yourself!",
  "answer": "of",
  "radios": ["about", "for", "of", "no preposition"],
 },
 {"question":"I applied to MegfaFon ... a job",
  "answer": "for",
  "radios": ["about", "for", "of", "no preposition"],
 },
 {"question":"I'm looking ... keys!",
  "answer": "for",
  "radios": ["about", "for", "of", "after"],
 },
 {"question":"I'm looking ... him. He is my younger bro",
  "answer": "after",
  "radios": ["about", "for", "of", "after"],
 },
 {"question":"I'm look ... the game. It's my treasure!",
  "answer": "after",
  "radios": ["about", "for", "of", "after"],
 },
]

include("js/engine.js",function(){
  //
});

