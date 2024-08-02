let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";
let amounts = {
  "1": 0, // Bitcoin
  "2": 0, // Ethereum
  "3": 0 // Tether
};

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

// Добавляем поля для ввода количества
let inputAmount1 = document.createElement("input");
inputAmount1.setAttribute("type", "number");
inputAmount1.setAttribute("placeholder", "Введите количество Bitcoin");
document.body.appendChild(inputAmount1);

let inputAmount2 = document.createElement("input");
inputAmount2.setAttribute("type", "number");
inputAmount2.setAttribute("placeholder", "Введите количество Ethereum");
document.body.appendChild(inputAmount2);

let inputAmount3 = document.createElement("input");
inputAmount3.setAttribute("type", "number");
inputAmount3.setAttribute("placeholder", "Введите количество Tether");
document.body.appendChild(inputAmount3);

btn1.addEventListener("click", function(){
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  }
  else {
    amounts["1"] = parseInt(inputAmount1.value) || 0; // Получаем количество для Bitcoin
    tg.MainButton.setText(Вы выбрали Bitcoin! (${amounts["1"]}));
    item = "1";
    tg.MainButton.show();
  }
});

btn2.addEventListener("click", function(){
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  }
  else {
    amounts["2"] = parseInt(inputAmount2.value) || 0; // Получаем количество для Ethereum
    tg.MainButton.setText(Вы выбрали Ethereum! (${amounts["2"]}));
    item = "2";
    tg.MainButton.show();
  }
});

btn3.addEventListener("click", function(){
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  }
  else {
    amounts["3"] = parseInt(inputAmount3.value) || 0; // Получаем количество для Tether
    tg.MainButton.setText(Вы выбрали Tether! (${amounts["3"]}));
    item = "3";
    tg.MainButton.show();
  }
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
  tg.sendData(item + "," + amounts[item]); // Отправляем данные в виде строки "item,amount"
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = ${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name};

usercard.appendChild(p);
