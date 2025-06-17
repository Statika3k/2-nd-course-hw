// Игра "Угадай число"
document.getElementById('playGame-1').addEventListener('click',
    function guessNumber() {
        const secretNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        alert('Я загадал число от 1 до 100. Попробуй угадать!');

        while (true) {
            let guessInput = prompt('Введи свой вариант:');

            if (guessInput === null) {
                alert('Игра окончена. Поиграем в другой раз!');
                return;
            }

            let guess = Number(guessInput);
            attempts++;



            if (guess === secretNumber) {
                alert(`Поздравляю! Ты угадал число ${secretNumber} за ${attempts} попыток!`);
                break;
            } else if (guess < secretNumber) {
                alert('Загаданное число больше. Попробуй еще!');
            } else {
                alert('Загаданное число меньше. Попробуй еще!');
            }
        }


    }

);

// Игра "Простая арифметика"
document.getElementById('playGame-2').addEventListener('click',
    function simpleArithmetic() {
        let correctAnswers = 0;
        let continueGame = true;

        while (continueGame) {
            const num1 = Math.floor(Math.random() * 10) + 1;
            const num2 = Math.floor(Math.random() * 10) + 1;
            const operators = ['+', '-', '*', '/'];
            const operator = operators[Math.floor(Math.random() * operators.length)];
            let result = 0;
            let userAnswer = '';
            let onlyIntegersNumber = true;

            switch (operator) {
                case '+':
                    userAnswer = prompt(`${num1} + ${num2} = ?`);
                    result = num1 + num2;
                    break;
                case '-':
                    userAnswer = prompt(`${Math.max(num1, num2)} - ${Math.min(num1, num2)} = ?`);
                    result = Math.max(num1, num2) - Math.min(num1, num2);
                    break;
                case '*':
                    userAnswer = prompt(`${num1} * ${num2} = ?`);
                    result = num1 * num2;
                    break;
                case '/':
                    if (Math.max(num1, num2) % Math.min(num1, num2) !== 0) {
                        onlyIntegersNumber = false;
                        break;
                    } /*Проверка, что результатом деления будет целое число*/
                    result = Math.max(num1, num2) / Math.min(num1, num2);
                    userAnswer = prompt(`${Math.max(num1, num2)} / ${Math.min(num1, num2)} = ?`);
                    break;
            }

            if (!onlyIntegersNumber) continue;
            if (userAnswer === null) {
                continueGame = false;
                continue;
            }

            const userNumber = parseFloat(userAnswer);
            const isCorrect = userNumber === result;

            if (isCorrect) {
                correctAnswers++;
                alert('Правильно!');
            } else {
                continueGame = false;
                alert(`Неверно! Правильный ответ: ${result}`);
            }
        }

        alert(`Игра окончена. Правильных ответов: ${correctAnswers}`);
    }
)

// Игра «Переверни текст»
document.getElementById('playGame-3').addEventListener('click',
    function invertedText() {
        let userText = prompt('Введите слово или текст');

        if (userText === null) {
            result.textContent = 'Вы отменили ввод текста.';
            return;
        }

        if (userText.trim() === '') {
            alert('Вы не ввели текст. Попробуйте снова.');
            return;
        }
        const reversedText = userText.split('').reverse().join('');
        alert(`Перевернутый текст: ${reversedText}`);
    }
)

// Игра «Викторина»
document.getElementById('playGame-5').addEventListener('click',
    function quizGame() {
        const quiz = [
            {
                question: "Какой цвет небо?",
                options: ["1. Красный", "2. Синий", "3. Зеленый"],
                correctAnswer: 2
            },
            {
                question: "Сколько дней в неделе?",
                options: ["1. Шесть", "2. Семь", "3. Восемь"],
                correctAnswer: 2
            },
            {
                question: "Сколько у человека пальцев на одной руке?",
                options: ["1. Четыре", "2. Пять", "3. Шесть"],
                correctAnswer: 2
            }
        ];

        let counter = 0;
        for (let i = 0; i < quiz.length; i++) {
            const currentQuestion = quiz[i];

            let questionText = currentQuestion.question + "\n";
            for (let j = 0; j < currentQuestion.options.length; j++) {
                questionText += currentQuestion.options[j] + "\n";
            }


            const userAnswer = parseInt(prompt(questionText));
            if (userAnswer === currentQuestion.correctAnswer) {
                counter++;
                alert("Правильно!");
            } else {
                alert(`Неправильно! Правильный ответ: ${currentQuestion.correctAnswer}`);
            }
        }
        alert(`Викторина завершена!\n\nПравильных ответов: ${counter} из ${quiz.length}`);
    }
)

// Игра «Камень, ножницы, бумага»
document.getElementById('playGame-4').addEventListener('click',
    function rockPaperScissors() {
        const choices = ["камень", "ножницы", "бумага"];
        let playAgain = true;

        while (playAgain) {
            let userChoice = prompt('Выбирай: Камень, Ножницы или Бумага');

            if (userChoice === null) {
                alert("Игра окончена! Поиграем в другой раз.");
                playAgain = false;
                break;
            }

            userChoice = userChoice.toLowerCase();

            while (!choices.includes(userChoice)) {
                userChoice = prompt("Некорректный ввод. Выберите: камень, ножницы или бумага");
                if (userChoice === null) {
                    alert("Игра окончена! Поиграем в другой раз.");
                    playAgain = false;
                    break;
                }
                userChoice = userChoice.toLowerCase();
            }

            if (!playAgain) break;

            function randomComputerChoice() {
                const randomChoices = Math.floor(Math.random() * choices.length);
                return choices[randomChoices];
            }

            function choiceWinner(userChoice, computerChoice) {
                if (userChoice === computerChoice) {
                    return 'Ничья!';
                }

                if (
                    (userChoice === "камень" && computerChoice === "ножницы") ||
                    (userChoice === "ножницы" && computerChoice === "бумага") ||
                    (userChoice === "бумага" && computerChoice === "камень")
                ) {
                    return 'Поздравляем! Вы выиграли!';
                } else {
                    return 'Вы проиграли. Выиграл компьютер!';
                }
            }

            const computerChoice = randomComputerChoice();
            const result = choiceWinner(userChoice, computerChoice);

            alert(`Ваш выбор: ${userChoice};
            Выбор компьютера: ${computerChoice};
            Результат игры: ${result}`);

            playAgain = confirm("Хотите сыграть ещё раз?");
        }

        alert("Спасибо за игру! До новых встреч!");
    }
)

// Игра «Генератор случайных цветов»
document.addEventListener('DOMContentLoaded', function() {
    const changeColorButton = document.getElementById('playGame-6');
    const changeBackgroundColorGameBox = document.querySelector('.game-box');
    const changeBackgroundColorGameInfo = document.querySelector('.game-info');

    changeColorButton.addEventListener('click', function() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        changeBackgroundColorGameBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        changeBackgroundColorGameInfo.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        console.log(`Новый цвет фона: rgb(${r}, ${g}, ${b})`);
    });
})
