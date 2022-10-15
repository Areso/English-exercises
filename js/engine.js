//DOM OBJECTS
myquestion   = document.getElementById("question");
answers      = document.getElementById("answer_radiobutton_div");
check_result = document.getElementById("resultLbl");
answer_field = document.getElementById("answer_text_field");
answer_field.value = "";
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
  console.log(qst)
  if (inArray2(qst, "%arg1")) {
    theCaseId = Math.floor(Math.random() * cards[card_id].arg1.length);
    theCase   = cards[card_id].arg1[theCaseId];
    console.log(theCase);
    qst = qst.replace("%arg1", theCase);
  }
  console.log(qst)
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
  question.innerHTML = qst;
}
function getAnswer() {
  if (answer_field.value !== ""){
    user_answer = answer_field.value;
    user_answer = user_answer.toLowerCase();
    user_answer = user_answer.trim();
    checkAnswer();
  } else { 
    for (i=0;i<cards[card_id].radios.length;i++){ 
      anOption = document.getElementById("radio"+cards[card_id].radios[i]);
      if (anOption.checked) {
        user_answer = anOption.value;
      }
    }
    checkAnswer();
  }
}
function checkAnswer() { 
  if (user_answer===cards[card_id].answer){
    console.log("CORRECT");
    check_result.innerHTML = "CORRECT";
  } else {
    console.log("INCORRECT");
    check_result.innerHTML = "WRONG";
  }
}
function nextCard() {
  if (cards_deck_learn.length > 1){
    answer_field.value = "";
    answers.innerHTML  = "";
    check_result.innerHTML = "";
    cards_deck_learn.shift();
    card_id = cards_deck_learn[0];
  } else {
    answer_field.value = "";
    answers.innerHTML  = "";
    check_result.innerHTML = "";
    cards_deck_learn.shift(); //delete the last item, so the array is empty
    console.log("END OF THE DECK");
    document.getElementById("nextBtn").style   = "display: none";
    document.getElementById("checkBtn").style  = "display: none";
    document.getElementById("resultDiv").style = "display: none";
  }
}
function buildDeck() {
	smallPractice      = true;
	if (smallPractice) {//FOR DEBUG!
		console.log("build a custom deck to train it");
		if (cards.length>2) {
			number_of_cards_to_train = 2;
		} else {
			number_of_cards_to_train = cards.length;
		}
		console.log("number of custom deck cards");
		console.log(number_of_cards_to_train);
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
	console.log("show me my deck cards_deck");
	console.log(cards_deck);
}
loadLesson()

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

