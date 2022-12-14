topic = "Usage of 'by' preposition.";
grammar = "We 'by' to answer 'how' it happened<br>";
grammar+= "With a few exceptions: 'pay in cash',<br>";
grammar+= "'done on purpose', 'on foot'.<br>"
grammar+= "By a margin, i.e. 'by 100 meters', 'by $100 increase'.<br>"
cards = [
 {"question":"I sent a mail ... %arg1",
  "answer": "by",
  "radios": ["by", "at", "in", "with"],
  "arg1": ["post", "courrier", "DHL Express", "FedEx"],
 },
 {"question":"I did that ... %arg1",
  "answer": "by",
  "radios": ["by", "at", "in", "with"],
  "arg1": ["hand"],
 },
 {"question":"Do you accept payments ... %arg1",
  "answer": "by",
  "radios": ["by", "at", "in", "with"],
  "arg1": ["cheque", "credit card"],
 },
 {"question":"Could you pay ... %arg1",
  "answer": "in",
  "radios": ["by", "at", "in", "with"],
  "arg1": ["cash"],
 },
 {"question":"I did that ... %arg1",
  "answer": "by",
  "radios": ["by", "at", "in", "with"],
  "arg1": ["mistake", "accident", "chance"],
 },
 {"question":"I did that ... %arg1",
  "answer": "by",
  "radios": ["by", "on", "in", "with"],
  "arg1": ["mistake", "accident", "chance"],
 },
 {"question":"I did that ... purpose",
  "answer": "on",
  "radios": ["by", "on", "in", "with"],
 },
 {"question":"I came here ... %arg1",
  "answer": "by",
  "radios": ["by", "on", "in", "with"],
  "arg1": ["car", "train", "plane", "boat", "ship", "bus", "bicycle", "road", "rail", "air", "sea", "underground"],
 },
 {"question":"I came here ... %arg1",
  "answer": "in",
  "radios": ["by", "on", "in", "with"],
  "arg1": ["my car", "a taxi"],
 },
 {"question":"I came here ... a taxi",
  "answer": "in",
  "radios": ["by", "on", "in", "with"],
 },
 {"question":"I came here ... the 6.45 %arg1",
  "answer": "on",
  "radios": ["by", "on", "in", "with"],
  "arg1": ["train", "bus"],
 },
 {"question":"Have ever been bitten ... %arg1",
  "answer": "by",
  "radios": ["by", "on", "in", "with"],
  "arg1": ["a dog", "a horse"],
 },
 {"question":"The football game was watched ... millions of people",
  "answer": "by",
  "radios": ["by", "on", "in", "with"],
 },
 {"question":"I cracked it ... a hammer",
  "answer": "with",
  "radios": ["by", "on", "in", "with"],
 },
 {"question":"Last book I read ... Agatha Christie",
  "answer": "by",
  "radios": ["by", "of", "from"],
 },
 {"question":"Last play I visit ... Anton Checkhov",
  "answer": "by",
  "radios": ["by", "of", "from"],
 },
 {"question":"Your place is ... me",
  "answer": "by",
  "radios": ["by", "at"],
 },
 {"question":"The light switch is ... the fridge",
  "answer": "by",
  "radios": ["by", "at"],
 },
 {"question":"The light switch is ... the fridge",
  "answer": "by",
  "radios": ["by", "at"],
 },
 {"question":"He won in the race ... %arg1",
  "answer": "by",
  "radios": ["by", "with"],
  "arg1": ["five metres", "0.2 second"],
 },
 {"question":"Over the year, I increased my salary ... %arg1",
  "answer": "by",
  "radios": ["by", "with", "on"],
  "arg1": ["$300","20 per cent"],
 },
]


include("js/engine.js",function(){
  //
});
