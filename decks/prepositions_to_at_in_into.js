topic = "To/at/in/into.";
grammar = "we say go/come/travel to a place or event<br>";
grammar+= "on my way to/a journey or trip to<br>";
grammar+= "we say 'I'have been to a place'<br>";
grammar+= "get to a place<br>";
grammar+= "but arrive in a country or town/city<br>";
grammar+= "arrive at places or events<br>";

cards = [
 {"question":"I want to go ... %arg1",
  "answer": "to",
  "radios": ["to", "at", "in", "into"],
  "arg1": ["Europe", "America"],
 },
 {"question":"I need to go ... %arg1",
  "answer": "to",
  "radios": ["to", "at", "in", "into"],
  "arg1": ["bed", "the bank", "hospital"],
 },
 {"question":"We are going ... %arg1",
  "answer": "to",
  "radios": ["to", "at", "in", "into"],
  "arg1": ["a concert", "a party"]
 },
 {"question":"Are you coming ... %arg1",
  "answer": "to",
  "radios": ["to", "at", "in", "into"],
  "arg1": ["a concert", "a party"]
 },
 {"question":"A person was sent ... prison",
  "answer": "to",
  "radios": ["to", "at", "in", "into"],
  "arg1": []
 },
 {"question":"Injured people were taken ... hospital",
  "answer": "to",
  "radios": ["to", "at", "in", "into"],
  "arg1": []
 },
 {"question":"I've [never] been ... %arg1",
  "answer": "to",
  "radios": ["to", "at", "in", "into"],
  "arg1": ["Italy", "Rome", "a hockey match", "the dealership"]
 },
 {"question":"We got here just ... time %arg1",
  "answer": "in",
  "radios": ["on", "at", "in"],
  "arg1": ["to catch the train", "to catch the bus"],
 },
 {"question":"I'm going away ... the end of %arg1",
  "answer": "at",
  "radios": ["on", "at", "in"],
  "arg1": ["my contract", "May", "Summer"],
 },
 {"question":"... the end of performance, there was %arg1 appluase",
  "answer": "at",
  "radios": ["on", "at", "in"],
  "arg1": ["long", "great", "loud"],
 },
 {"question":"Contesters shook ... the end of the match",
  "answer": "at",
  "radios": ["on", "at", "in"],
  "arg1": [],
 },
 {"question":"He came here ... the beginning of %arg1",
  "answer": "at",
  "radios": ["on", "at", "in"],
  "arg1": ["January", "Febrary", "March", "April", "May", "June", "July", 
    "August", "September", "October", "November", "December",
    "winter", "spring", "summer", "autumn", "fall"], 
 },
 {"question":"... the end we %arg1 it",
  "answer": "in",
  "radios": ["on", "at", "in"],
  "arg1": ["sold", "bought", "made"],
 },
]


include("js/engine.js",function(){
  //
});
