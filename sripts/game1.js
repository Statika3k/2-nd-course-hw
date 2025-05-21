document.getElementById('playGame-1').addEventListener('click',
    function guessNumber() {
        const secretNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        alert('Я загадал число от 1 до 100. Попробуй угадать!');

        while (true) {
            let guess = Number(prompt('Введи свой вариант:'));
            attempts++;

            if (guess === null) {
                alert('Игра окончена. Поиграем в другой раз!');
                return;
            }

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