topic = "Prepositions with verbs (p4).";
grammar = "Accuse/suspect/approve OF<br>";
grammar+= "Die OF (reason); consist OF<br>";
grammar+= "Pay (smb) FOR<br>";
grammar+= "But: pay a bill/fine/tax/fare/rent/sum of money<br>";
grammar+= "Thank/forgive smb FOR<br>";
grammar+= "Apologise FOR<br>";
grammar+= "blame FOR smth, <b>BUT</b> blame smth ON smbd<br>"; 
grammar+= "Suffer FROM, protect FROM/AGAINST<br>";
grammar+= "Depend/rely ON<br>";
grammar+= "Depend what/where/... ON/NO_PREP smth<br>";
grammar+= "Live ON (money/food)<br>";
grammar+= "Congratulate/compliment ON smth<br>";

cards = [
 {"question":"I accused girls ... being cruel",
  "answer": "of",
  "radios": ["about", "of", "on", "no preposition"],
 },
 {"question":"I suspect ... they tried to cheat me with prices",
  "answer": "of",
  "radios": ["about", "of", "on", "no preposition"],
 },
 {"question":"I appove ... how he loves to create games",
  "answer": "of",
  "radios": ["about", "of", "on", "no preposition"],
 },
 {"question":"He died ... %arg1",
  "answer": "of",
  "radios": ["by", "of", "on", "no preposition"],
  "arg1": ["suffocation", "asphyxiation", "three bullets in chest"],
 },
 {"question":"A human body consists ... flesh and 200 bones",
  "answer": "of",
  "radios": ["by", "of", "from"],
 },
 {"question":"I will pay ... this meal",
  "answer": "for",
  "radios": ["for", "on", "by", "no preposition"],
 },
 {"question":"I need to pay ... the unitilities bill",
  "answer": ["","no preposition"],
  "radios": ["for", "on", "by", "no preposition"],
 },
 {"question":"I need to pay ... %arg1",
  "answer": ["","no preposition"],
  "radios": ["for", "on", "by", "no preposition"],
  "arg1": ["an unitilities bill", "a fine", "a speed ticket",
  "a travel fare", "rent for the flat", "money for a new image for my game"],
 },
 {"question":"I thank you ... the invitation",
  "answer": "for",
  "radios": ["for", "on", "by", "no preposition"],
 },
 {"question":"I forgive her ... a cruel joke",
  "answer": "for",
  "radios": ["for", "on", "by", "no preposition"],
 },
 {"question":"She never apologised ... that",
  "answer": "for",
  "radios": ["for", "on", "by", "no preposition"],
 },
 {"question":"You could blame me ... that",
  "answer": "for",
  "radios": ["for", "on", "by", "no preposition"],
 },
 {"question":"All blamed the incident ... me",
  "answer": "on",
  "radios": ["for", "on", "by", "no preposition"],
 },
 {"question":"All blamed the incident ... me",//BUG
  "answer": "on",
  "radios": ["for", "on", "by", "no preposition"],
 },
 {"question":"I suffer ... backache",
  "answer": "from",
  "radios": ["from", "on", "by", "for"],
 },
 {"question":"I wanna something to protect my skin ... the sun",
  "answer": ["from","against"],
  "radios": ["from", "on", "against", "for"],
 },
 {"question":"I wanna something to protect my skin ... the sun",//BUG
  "answer": ["from","against"],
  "radios": ["from", "on", "against", "for"],
 },
 {"question":"It depends ...  how good the article is",
  "answer": "on",
  "radios": ["from", "on", "by", "for"],
 },
 {"question":"My success relies ... whether I could complete the task",
  "answer": "on",
  "radios": ["from", "on", "by", "for"],
 },
 {"question":"The tunnel relies ... SSH connection",
  "answer": "on",
  "radios": ["from", "on", "by", "for"],
 },
 {"question":"The tunnel relies ... SSH connection",//BUG
  "answer": "on",
  "radios": ["from", "on", "by", "for"],
 },
 {"question":"The author barely lives ... donations",
  "answer": "on",
  "radios": ["from", "on", "by", "for"],
 },
 {"question":"I live ... pastry from Zorpas and Papantoniou",
  "answer": "on",
  "radios": ["from", "on", "by", "for"],
 },
 {"question":"I congratulated him ... his promotion",
  "answer": "on",
  "radios": ["from", "on", "by", "for"],
 },
 {"question":"She complimented me ... being smart.<br>Well, I said, it was pleasant",
  "answer": "on",
  "radios": ["from", "on", "by", "for"],
 },
]

include("js/engine.js",function(){
  //
});

