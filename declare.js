var HOUR=8;
var MINUTE=50;
var PERIOD="AM";
console.log("it is almost 9 in the morning");

var HOUR=7;
var MINUTE=15;
var PERIOD="PM";
console.log("it is just after 7 in the evening");

var HOUR=7;
var MINUTE=10;
var PERIOD="PM";
if(MINUTE<30 && PERIOD==="AM"){
  console.log("Just after " + HOUR + " in the morning");
}
else if(MINUTE<30 && PERIOD==="PM"){
  console.log("Just after " + HOUR + " in the evening");
}
else if(MINUTE>30 && PERIOD==="AM"){
  console.log("Almost " + (HOUR + 1) + " in the morning");
}
else{
  console.log("Almost " + (HOUR + 1) + " in the evening");
}