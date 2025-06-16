// Задание 1

const titleEL = document.querySelector('.title');
const hiddenButton = document.querySelector('.btn');

hiddenButton.addEventListener('click', function() {
    if(titleEL.style.display === 'none') {
        titleEL.style.display = 'block';
        hiddenButton.textContent = 'Скрыть текст';
    } else {
        titleEL.style.display = 'none';
        hiddenButton.textContent = 'Показать текст';
    }
})

// Задание 2

const changeColorText = document.querySelector('.text2');
const changeColorBtn = document.querySelector('.btn2');

changeColorBtn.addEventListener('click', function() {
    if(changeColorText) {
        changeColorText.style.color = 'blue';
    }
})

// Задание 3

const changeTitle = document.querySelector('.title3');
const changeButton = document.querySelector('.btn3');

changeButton.addEventListener('click', function() {
    if(changeTitle) {
        changeTitle.textContent = 'Привет, мир!';
    }
})

// Задание 4

const descriptions = document.querySelectorAll('.description4');

descriptions.forEach(description4 => {
    description4.textContent = 'Измененный текст';
})

// Задание 5

const allDescriptions = document.querySelectorAll('.description5');

allDescriptions.forEach(description5 => {
   description5.textContent = 'Новый текст';
})

// Задание 6

const button = document.querySelector('.btn6');
const contentEl6 = document.querySelector('.content6');

button.addEventListener('click', function () {
    const text6 = document.createElement('p');
    text6.textContent = 'Новый абзац';
    text6.classList.add('newText');
    contentEl6.appendChild(text6);
})

// Задание 7

const buttonRemoveEL = document.querySelector('.btn7');

buttonRemoveEL.addEventListener('click', function () {
    const firstDescription = document.querySelector('.description7');
    if (firstDescription) {
        firstDescription.remove();
    } else {
        buttonRemoveEL.disabled = true;
        buttonRemoveEL.textContent = 'Элементы закончились';
    }
})