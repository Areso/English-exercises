topic = "Basic usage of articles.";
grammar = "We don't use articles with (move to, or be at) bed, work, home<br>";
grammar = "We usually don't the ariticles with school, university, prison and hospital.<br>";
grammar = "However, with visiting not as a student/prisoner/patiner - the article is needed.<br>";
cards = [
 {"question":"I am going to ... bed",
 "answer": ["", "no article","-"],
 "radios": ["a", "an", "the", "no article"]
 },
 {"question":"I am running to ... work",
  "answer": ["", "no article","-"],
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"I am at ... bed",
  "answer": ["", "no article","-"],
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"I am at ... work",
  "answer": ["", "no article","-"],
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"I start ... work at 9 o'clock",
  "answer": ["", "no article","-"],
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"I finish ... work at 9 o'clock",
  "answer": ["", "no article","-"],
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"My work? ... work is hard",
  "answer": "the",
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"I go to ... home",
  "answer": ["", "no article","-", "some"],
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"Where am I? I am ... home, dude",
  "answer": ["", "no article","-", "some"],
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"You need to get ... home",
  "answer": ["", "no article","-", "some"],
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"I have ... home",
  "answer": "a",
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"I have ... home",
  "answer": "a",
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"Now we have ... school in our village",
  "answer": "a",
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"My son %arg1 ... school this year",
  "answer": ["", "no article","-", "some"],
  "radios": ["a", "an", "the", "no article"],
  "arg1": ["started", "finished", "went to"],
 },
 {"question":"I visited ... school to talk with my son's teacher",
  "answer": "the",
  "radios": ["a", "an", "the", "no article"]
 },
 {"question":"My son should be at ... school right now",
  "answer": ["", "no article","-", "some"],
  "radios": ["a", "an", "the", "no article"]
 }

]


include("js/engine.js",function(){
  //
});
