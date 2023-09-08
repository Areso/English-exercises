//DOM OBJECTS
if (window.location.href.indexOf("grammar.html")!==-1){
  pageType="grammar";
  grammar_dom  = document.getElementById("spnGrammar");
} else {
  pageType="lesson";
  myquestion   = document.getElementById("question");
  answers      = document.getElementById("answer_radiobutton_div");
  check_result = document.getElementById("resultLbl");
  answer_field = document.getElementById("answer_text_field");
  answer_field.value = "";
  curpos_dom   = document.getElementById("spnCurPos");
  total_dom    = document.getElementById("spnTotal");
  action_dom   = document.getElementById("lblAction");
}
topic_dom    = document.getElementById("spnTopic");
curpos = 0;
total  = 0;
thefreq= -1;

function loadGrammar() {
  grammar_dom.innerHTML = grammar;
}
function loadLesson() {
  console.log(cards);
  buildDeck();
  cards_deck_learn   = new Array();
  for (i=0;i<cards_deck.length;i++){
    cards_deck_learn.push(cards_deck[i])
  }
  console.log("show me cards_deck_learn");
  console.log(cards_deck_learn);
  loadCard();
}
function loadCard() {
  qst = cards[card_id].question;
  tied = false;
  if (typeof cards[card_id].tied !== 'undefined' && cards[card_id].tied==="yes"){
    tied = true;
  }
  if (tied === false){
    if (inArray2(qst, "%arg1")) {
      theCaseId = Math.floor(Math.random() * cards[card_id].arg1.length);
      theCase   = cards[card_id].arg1[theCaseId];
      console.log(theCase);
      qst = qst.replace("%arg1", theCase);
    }
    if (inArray2(qst, "%arg2")) {
      theCaseId = Math.floor(Math.random() * cards[card_id].arg2.length);
      theCase2   = cards[card_id].arg2[theCaseId];
      console.log(theCase2);
      qst = qst.replace("%arg2", theCase2);
    }
  } else {
    theCaseId = Math.floor(Math.random() * cards[card_id].arg1.length);
    theCase   = cards[card_id].arg1[theCaseId];
    theCase2   = cards[card_id].arg2[theCaseId];
    qst = qst.replace("%arg1", theCase);
    qst = qst.replace("%arg2", theCase2);
  }
  //synonyms lesson doesn't provide options
  if (cards[card_id].hasOwnProperty("radios")) {
    for (i=0;i<cards[card_id].radios.length;i++){
      dom_radio = document.createElement('input');
      dom_radio.type  = "radio"
      dom_radio.name  = "possibleAnswers";
      dom_radio.value = cards[card_id].radios[i];
      dom_radio.id    = "radio"+cards[card_id].radios[i];
      answers.appendChild(dom_radio);
      dom_radio_lbl = document.createElement('label');
      dom_radio_lbl.innerHTML = cards[card_id].radios[i]+"<br>";
      answers.appendChild(dom_radio_lbl);
    }
  }
  curpos += 1;
  curpos_dom.innerHTML = curpos;
  question.innerHTML = qst;
}
function getAnswer() {
  if (answer_field.value !== ""){
    user_answer = answer_field.value;
    user_answer = user_answer.toLowerCase();
    user_answer = user_answer.trim();
    checkAnswer();
  } else { 
    if (cards[card_id].hasOwnProperty("radios")) {
    for (i=0;i<cards[card_id].radios.length;i++){ 
      anOption = document.getElementById("radio"+cards[card_id].radios[i]);
      if (anOption.checked) {
        user_answer = anOption.value;
      }
    }
    }
    checkAnswer();
  }
}
function showAnswer() {
  if (action_dom.innerHTML !== "ANSWER: "){
      action_dom.innerHTML = "ANSWER: "
  }
  resultLbl.innerHTML = cards[card_id].answer;
}
function isAcceptable(providedAnswer) {
  //typeof from an array returns object!
  if (typeof(cards[card_id].answer)==="string"){
    if (providedAnswer===cards[card_id].answer) {
      return true;
    } else {
      return false;
    }
  } else {
    if (cards[card_id].answer.indexOf(providedAnswer)!==-1){
      return true;
    } else {
      return false;
    }
  }
}
function isMinor(providedAnswer) {
  if (typeof(cards[card_id].answer)!=="string"){
    if (cards[card_id].answer.indexOf(providedAnswer)>0){
      if (typeof cards[card_id].minor !== 'undefined' && cards[card_id].minor==="yes"){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function isShowComment(){
  if (typeof cards[card_id].showcomment !== 'undefined' && cards[card_id].showcomment==="yes") {
    return true;
  } else {
    return false;
  }
}
function getFreq(word_to_check){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      back_response = JSON.parse(this.responseText);
      console.log(back_response);
      thefreq = parseInt(back_response);
      if (thefreq!==-1) {
        check_result.innerHTML += "; "+thefreq+"th";
      }
    }
  };
  endpoint    = "https://freq.english.areso.pro:8099/get_freq?word="+word_to_check;
  xhttp.open("GET", endpoint, true);
  xhttp.send();
}
function checkAnswer() {
  if (isAcceptable(user_answer)){
	//CORRECT OR ACCEPTABLE ANSWER
    if (action_dom.innerHTML !== "CHECK: "){
      action_dom.innerHTML = "CHECK: "
    }
    console.log("CORRECT");
    thefreq = -1;
    if (lesson_name==="synonyms") {
      getFreq(user_answer);
    }
    if (!isMinor(user_answer)){
      if (isShowComment()){
        check_result.innerHTML="<span class='correct'>CORRECT, "+cards[card_id].comment+"<span>";
      } else {
        check_result.innerHTML = "<span class='correct'>CORRECT<span>";
      }
    } else {
      check_result.innerHTML="<span class='correct'>CORRECT, "+cards[card_id].comment+"<span>";
    }
  } else {
	//INCORRECT ANSWER
    if (action_dom.innerHTML !== "CHECK: "){
      action_dom.innerHTML = "CHECK: "
    }
    console.log("INCORRECT");
    check_result.innerHTML = "<span class='wrong'>WRONG<span>";
  }
}
function nextCard() {
  if (cards_deck_learn.length > 1){
    answer_field.value = "";
    answers.innerHTML  = "";
    check_result.innerHTML = "";
    myquestion.innerHTML   = "";
    cards_deck_learn.shift();
    card_id = cards_deck_learn[0];
    loadCard()
  } else {
    answer_field.value = "";
    answers.innerHTML  = "";
    check_result.innerHTML = "";
    action_dom.innerHTML   = "";
    myquestion.innerHTML = "";
    cards_deck_learn.shift(); //delete the last item, so the array is empty
    console.log("END OF THE DECK");
    document.getElementById("nextBtn").style   = "display: none";
    document.getElementById("checkBtn").style  = "display: none";
    document.getElementById("showAnswerBtn").style = "display: none";
    document.getElementById("answer_text_field").style = "display: none";
    document.getElementById("resultLbl").innerHTML = "LESSON FINISHED";
  }
}
function buildDeck() {
  smallPractice      = false;
  if (smallPractice) {
    console.log("build a custom deck to train it");
    smallDeckSize = 10;
    if (cards.length>smallDeckSize) {
      number_of_cards_to_train = smallDeckSize;
    } else {
      number_of_cards_to_train = cards.length
    }
  } else {
    if (cards.length > 40){
        number_of_cards_to_train = Math.floor(cards.length/2);
      } else {
        number_of_cards_to_train = cards.length;
    }
  }
  total_dom.innerHTML = number_of_cards_to_train;
  number_cards_in_deck       = 0;
  cards_deck                 = [];
  card_id_deck_iterator      = 0;
  while (number_cards_in_deck < number_of_cards_to_train) {
    roll_the_dice          = Math.floor(Math.random()*cards.length);
    if (roll_the_dice === 0) {
      //check whether this card is already added or not?
      if (!inArray2(cards_deck,card_id_deck_iterator)){
        cards_deck.push(card_id_deck_iterator);
        number_cards_in_deck  += 1;
      }
    }
    if (card_id_deck_iterator<cards.length-1){
      card_id_deck_iterator += 1;
    } else {
      card_id_deck_iterator  = 0;
    } 
  }
  card_id = cards_deck[0];
}


if (typeof grammar !== 'undefined' && pageType==="lesson") {
  topic_dom.innerHTML = "<a href='grammar.html?lesson="+lesson_name+"'>"+topic+"</a>";
} else {
  topic_dom.innerHTML = topic;
}
if (pageType==="lesson"){ 
  loadLesson();
} else {
  loadGrammar();
}

//HELPERS
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
function inArray2(arrayToCheck, valueToCheck) {
  return arrayToCheck.indexOf(valueToCheck) > -1;
}
function inArray(needle,haystack){
  count=haystack.length;
  for(var i=0;i<count;i++){
    if(haystack[i]===needle){return true;}
  }
  return false;
}
include = function (url, fn) {
  var e = document.createElement("script");
  e.onload = fn;
  e.src = url;
  e.async=true;
  document.getElementsByTagName("head")[0].appendChild(e);
};

