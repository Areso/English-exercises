topic = "Basic usage of articles.";
grammar = "a/an use with a jobs, e.g. he is a doctor, an ambulance driver<br>";
grammar+= "a/an used with singular, countable nouns. e.g. a potato, an umbrella<br>";
grammar+= "be careful with _an hour_, _an university_, an user and so on<br>"
grammar+= "We use the the definite article when a person already knows which thing we are talking about<br>"
grammar+= "because it was mentioned before or because there's only one of them.<br>"
grammar+= "When we talk about a particular group of things, we use the.<br>";
cards = [
 {"question":"I have ... apple",
  "answer": "an",
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"I have ... apples",
  "answer": ["", "no article","-"],
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"I saw some apples back home. Did you bring ... apples?",
  "answer": "the",
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"Do you like ... children?",
  "answer": ["", "no article","-"],
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"Could you pickup ... children from school?",
  "answer": "the",
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"Right not I am not a developer, I am ... user",
  "answer": "a",
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"Could you add ... sugar to my cofee ... %arg1",
  "answer": ["", "no article","-", "some"],
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"I was there for ... hour or two",
  "answer": "an",
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"I was there for ... hour or two",
  "answer": "an",
  "radios": ["a", "an", "the", "no article"]
 }
]


include("js/engine.js",function(){
  //
});
