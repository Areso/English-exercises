cards = [
 {"question":"We gonna go ... %arg1",
  "answer": "to",
  "radios": ["on", "at", "in"],
  "arg1": ["school", "university", "prison", "hospital", "church", "bed", "work", "home"]},
 {"question":"We should wait ... %arg1",
  "answer": "at",
  "radios": ["on", "at", "in"],
  "arg1": ["the corner", "the bus stop", "the door", "the entrance", "the crossroads"]
 },
 {"question":"He stopped ... %arg1",
  "answer": "at",
  "radios": ["on", "at", "in"],
  "arg1": ["the top of the page", "the end of the page"]
 },
 {"question":"He sitted ... %arg1",
  "answer": "at",
  "radios": ["on", "at", "in"],
  "arg1": ["the front desk", "the rear desk"]
 },
]


include = function (url, fn) {
  var e = document.createElement("script");
  e.onload = fn;
  e.src = url;
  e.async=true;
  document.getElementsByTagName("head")[0].appendChild(e);
};
include("js/engine.js",function(){
  //
});
