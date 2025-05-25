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
        let result = '';
        let userAnswer = '';
        let roundedResult = null; /*Будет использоваться только для деления*/

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
                userAnswer = prompt(`${Math.max(num1, num2)} / ${Math.min(num1, num2)} = ?`);
                result = Math.max(num1, num2) / Math.min(num1, num2);
                roundedResult = Number(result.toFixed(2));
                break;
        }

        if (userAnswer === null) {
            continueGame = false;
        }
        else if (isNaN(userAnswer)) {
            continueGame = false;
        } else {
            const userNumber = Number(userAnswer);
            let isCorrect;
            
            // Для деления сравниваем с округленным результатом
            if (operator === '/') {
                isCorrect = Math.abs(userNumber - roundedResult) < 0.01;
            } else {
                isCorrect = Math.abs(userNumber - result) < 0.0001;
            } if (isCorrect) {
                correctAnswers++;
                alert('Правильно!');
            } else {
                continueGame = false;
                
                const correctAnswer = operator === '/' ? roundedResult : result;
                alert(`Неверно! Правильный ответ: ${correctAnswer}`);
            }
        }
    }
    
    alert(`Игра окончена. Правильных ответов: ${correctAnswers}`);
}
)