let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

// Создаем элементы для счетчика
const counterContainer = document.createElement('div');
const counter = document.createElement('span');
counterContainer.classList.add('counter');
counterContainer.appendChild(counter);

// Функция для обновления счетчика
function updateCounter(count) {
  counter.textContent = count;
}

// Обновляем счетчик при загрузке страницы
let count = 0;
updateCounter(count);

// Функция для изменения кнопки
function toggleButtons(button) {
  // Удаляем старую кнопку
  button.remove();

  // Создаем новые кнопки
  const minusBtn = document.createElement('button');
  minusBtn.classList.add('btn', 'minus');
  minusBtn.textContent = '-';

  const plusBtn = document.createElement('button');
  plusBtn.classList.add('btn', 'plus');
  plusBtn.textContent = '+';

  // Вставляем кнопки и счетчик в контейнер
  button.parentElement.appendChild(minusBtn);
  button.parentElement.appendChild(counterContainer);
  button.parentElement.appendChild(plusBtn);

  // Добавляем обработчики событий для новых кнопок
  minusBtn.addEventListener('click', function() {
    count--;
    updateCounter(count);
  });

  plusBtn.addEventListener('click', function() {
    count++;
    updateCounter(count);
  });
}

// Обработчики событий для кнопок
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener("click", function() {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы выбрали Bitcoin!");
    item = "1";
    tg.MainButton.show();
  }
  toggleButtons(this); // Изменяем кнопку после нажатия
});

btn2.addEventListener("click", function() {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы выбрали Ethereum!");
    item = "2";
    tg.MainButton.show();
  }
  toggleButtons(this); // Изменяем кнопку после нажатия
});

btn3.addEventListener("click", function() {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы выбрали Tether!");
    item = "3";
    tg.MainButton.show();
  }
  toggleButtons(this); // Изменяем кнопку после нажатия
});

Telegram.WebApp.onEvent("mainButtonClicked", function() {
  tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
