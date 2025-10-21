topic = "Articles and countries";
grammar = "Usually we don't need articles with countries<br>";
grammar+= "However, some countries require def. article: the USA(US), the UK, etc<br>";
grammar+= "Be careful, though: I live in Great Britain<br>";
grammar+= "Rule of _the_ article: if country has special word, such as Kingdom/Federation/Republic/<br>"
cards = [
 {"question":"I live in ... Spain",
  "answer": ["", "no article","-"],
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"I am from ... US",
  "answer": ["the"],
  "radios": ["a", "an", "the", "no article"]
 },
{"question":"I live in ... Great Britain",
  "answer": ["", "no article","-"],
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"Who is the Ruler of ... Kingdom of Spain?",
  "answer": "the",
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"I am from ... Russia",
  "answer": ["", "no article","-"],
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"I am represent ... Russian Federation",
  "answer": "the",
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"I live in ... Cyprus",
  "answer": ["", "no article","-"],
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"... Republic of Cyprus has doubled tourists' visits this year",
  "answer": ["the"],
  "radios": ["a", "an", "the", "no article"]
 },
]


include("js/engine.js",function(){
  //
});
