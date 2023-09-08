if (window.location.href.indexOf("file")===-1){
  webserver = "";
  dev_flag  = false;
} else {
  webserver = "http://localhost:8091";
  dev_flag  = true;
}

function polyfill_uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function genUUID() {
  try {
    uuid = crypto.randomUUID();
  } catch (error) {
    uuid = polyfill_uuidv4();
  }
  return uuid;
}

uuid = localStorage.getItem("english_uuid");
if (uuid === null) {
  uuid = genUUID();
  localStorage.setItem("enlish_uuid", uuid);
}

function sendEvent(eventname, params) {
    webserver="http://localhost:8091"
    console.log("sendEvent");
    console.log(uuid);
    if (uuid === null || uuid === undefined) {
        console.log("uuid is null or undefined")
        console.log("try to load uuid from localStorage")
        uuid = localStorage.getItem("english_uuid");
        console.log("uuid from localStorage is ")
        console.log(uuid)
    }
    mylocation = window.location.href;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText)
      }
    };
    dataToParse  = {
      "project": "english_exercises",
      "uuid": uuid,
      "event": eventname,
      "location": mylocation,
      "params":params,
    }
    //dataToParse=""
    endpoint     = webserver + "/prc";
    xhttp.open("POST", endpoint, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(dataToParse));
    console.log("sendEvent");
}

if (window.location.href.indexOf("index")!==-1){
  if (dev_flag==true){
    sendEvent("main menu loaded", "");
  }
}
if (window.location.href.indexOf("lesson")>0 || window.location.href.indexOf("grammar")>0){
  //nothing happens
} else {
  if (dev_flag==true){
    sendEvent("main menu loaded", "");
  }
}