topic = "To/at/in/into.";
grammar = "We say 'go/come/travel to a place or event'<br>";
grammar+= "We say 'on my way to/a journey(trip) to'<br>";
grammar+= "We say 'Going to, come to a place'<br>";
grammar+= "We say 'Get to city/building/event'<br>";
grammar+= "We say 'I'have been to a place'<br>";
grammar+= "But arrive in a country or town/city<br>";
grammar+= "But arrive at places or events<br>";
grammar+= "Go/come/get/arrive/on the way home doesn't require prep<br>";
grammar+= "But 'be/stay/do smth at home'<br>";
grammar+= "Go into, get into = 'enter'<br>"
grammar+= "Acceptable: Come in(to) house<br>"
grammar+= "Enter doesnt req prep! eg Enter a house<br>";
grammar+= "The opp: ouf of smth<br>";
grammar+= "Get on/off a bus/train/plane<br>";

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
 {"question":"How did they get ... %arg1?",
  "answer": "to",
  "radios": ["to", "at", "in", "into"],
  "arg1": ["Paris", "work", "the party?"]
 },
 {"question":"When did you arrive ... %arg1?",
  "answer": "in",
  "radios": ["to", "at", "in", "into"],
  "arg1": ["Madrid", "Spain", "Columbia"]
 },
 {"question":"When did you arrive ... %arg1?",
  "answer": "at",
  "radios": ["to", "at", "in", "into"],
  "arg1": ["the hotel", "the party", "work"]
 },
 {"question":"It's late. We should %arg1 ... home",
  "answer": "",
  "radios": ["to", "at", "in", "into", ""],
  "arg1": ["go", "come", "be on the way"]
 },
 {"question":"We arrive ... home",
  "answer": "",
  "radios": ["to", "at", "in", "into", ""],
  "arg1": []
 },
 {"question":"How did arrive ... %arg1?",
  "answer": "at",
  "radios": ["to", "at", "in", "into"],
  "arg1": ["the hotel", "the party", "work"]
 },
 {"question":"%arg1 ... home today",
  "answer": "at",
  "radios": ["to", "at", "in", "into"],
  "arg1": ["Be", "Stay", "Just do something"]
 },
 {"question":"He got ... the car and drove away",
  "answer": ["into", "in"],
  "radios": ["to", "at", "in", "into"],
  "arg1": []
 },
 {"question":"A %arg1 flew ... the kitchen through the window",
  "answer": ["into", "in"],
  "radios": ["to", "at", "in", "into"],
  "arg1": ["bat", "bird", "owl"]
 },
 {"question":"A %arg1 flew ... the kitchen through the window",
  "answer": "into",
  "radios": ["to", "at", "in", "into"],
  "arg1": ["bat", "bird", "owl"]
 },
 {"question":"He got out ... the %arg1 and went into a shop",
  "answer": "of",
  "radios": ["to", "at", "in", "into", "of"],
  "arg1": ["car", "bus"]
 },
 {"question":"He got ... the bus and the bus carried him away",
  "answer": "on",
  "radios": ["to", "at", "in", "into", "on"],
  "arg1": []
 },
 {"question":"He got ... the bus and went into a building",
  "answer": "off",
  "radios": ["to", "at", "in", "into", "off"],
  "arg1": []
 },
]


include("js/engine.js",function(){
  //
});
