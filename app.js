let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";
let clickCount = 0; // Добавляем переменную для подсчета кликов

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener("click", function(){
  clickCount++; // Увеличиваем счетчик при каждом клике
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  }
  else {
    tg.MainButton.setText(Вы выбрали Bitcoin! (Клик: ${clickCount})); // Выводим количество кликов в тексте кнопки
    item = "1";
    tg.MainButton.show();
  }
});

btn2.addEventListener("click", function(){
  clickCount++;
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  }
  else {
    tg.MainButton.setText(Вы выбрали Ethereum! (Клик: ${clickCount}));
    item = "2";
    tg.MainButton.show();
  }
});

btn3.addEventListener("click", function(){
  clickCount++;
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  }
  else {
    tg.MainButton.setText(Вы выбрали Tether! (Клик: ${clickCount}));
    item = "3";
    tg.MainButton.show();
  }
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
  tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = ${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name};

usercard.appendChild(p);
