let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

// Initialize click counters
let btn1Clicks = 0;
let btn2Clicks = 0;
let btn3Clicks = 0;

// Display click counts
let clicksDisplay = document.createElement("p");
usercard.appendChild(clicksDisplay);

btn1.addEventListener("click", function(){
    btn1Clicks++;
    updateClickCounts();
 if (tg.MainButton.isVisible) {
  tg.MainButton.hide();
 }
 else {
  tg.MainButton.setText(f"Вы выбрали Bitcoin!");
  item = "1";
  tg.MainButton.show();
 }
});

btn2.addEventListener("click", function(){
    btn2Clicks++;
    updateClickCounts();
 if (tg.MainButton.isVisible) {
  tg.MainButton.hide();
 }
 else {
  tg.MainButton.setText("Вы выбрали Ethereum!" + btn2Clicks);
  item = "2";
  tg.MainButton.show();
 }
});

btn3.addEventListener("click", function(){
    btn3Clicks++;
    updateClickCounts();
 if (tg.MainButton.isVisible) {
  tg.MainButton.hide();
 }
 else {
  tg.MainButton.setText("Вы выбрали Tether!");
  item = "3";
  tg.MainButton.show();
 }
});

// Function to update click counts display
function updateClickCounts() {
    clicksDisplay.innerText = Bitcoin: ${btn1Clicks}, Ethereum: ${btn2Clicks}, Tether: ${btn3Clicks};
}


Telegram.WebApp.onEvent("mainButtonClicked", function(){
 tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = ${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name};

usercard.appendChild(p);
