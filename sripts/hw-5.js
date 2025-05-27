// Задание 1
// Дан массив: [1, 5, 4, 10, 0, 3].

// Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10. После вывода значения 10 в консоль цикл должен прекратить свою работу.
const numbs = [1, 5, 4, 10, 0, 3];
for (let n = 0; n < numbs.length; n++) {
    console.log(numbs[n]);
    if (numbs[n] === 10) {
        break;
    }
}

// Задание 2
// Дан массив: 
// [1, 5, 4, 10, 0, 3].
// Найдите индекс значения 4 в этом массиве.
const number = [1, 5, 4, 10, 0, 3];
const target = 4;
const findIndex = number.indexOf(target);

console.log(findIndex);


// Задание 3
// Дан массив чисел: [1, 3, 5, 10, 20].
// С помощью метода join выведите элементы массива через пробел (пустую строку ' ').
const numb = [1, 3, 5, 10, 20];
const joinNumb = numb.join(' ');
console.log(joinNumb);


// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].
let arr = [];
 for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    arr.push(row);
 }

 console.log(arr);


// Задание 5
// Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.
const array = [1, 1, 1];
array.push(2, 2, 2);
console.log(array);


// Задание 6
// Дан массив: [9, 8, 7, 'a', 6, 5].
// С помощью метода sort отсортируйте массив и удалите букву 'a' из массива. Затем выведите массив.
const newArray = [9, 8, 7, 'a', 6, 5];
newArray.sort();
console.log(newArray.pop());
console.log(newArray);


// Задание 7
// Дан массив: [9, 8, 7, 6, 5].
// Попросите пользователя угадать число с помощью метода prompt. Если значение, которое ввел пользователь, есть в массиве, выведите в alert «Угадал», в противном случае — «Не угадал».
const guessArray = [9, 8, 7, 6, 5];
const userGuess = prompt("Угадай какое число от 1 до 10 я загадал?");

if (guessArray.includes(Number(userGuess))) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// Задание 8
// Дана строка: 'abcdef'. Выведите в консоль 'fedcba'.
// Для этого задания вам пригодится метод reverse().
const str = 'abcdef';
const strArray = str.split('');
strArray.reverse();
console.log(strArray.join(''));


// Задание 9
// Дан массив: [[1, 2, 3],[4, 5, 6]]. Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].
const multiArray = [
    [1, 2, 3],
    [4, 5, 6]
];
const newArr = multiArray.flat();

console.log(newArr);


// Задание 10
// Создайте массив с произвольными числами (диапазон от 1 до 10).
// Переберите его с помощью цикла for.
// В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
// Следующий элемент массива можно получить с помощью индекса: i + 1. Обратите внимание, что у последнего элемента нет следующего.
const randomArray = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10) + 1);
console.log("Исходный массив:", randomArray);

for (let c = 0; c < randomArray.length - 1; c++) {
  const current = randomArray[c];
  const next = randomArray[c + 1];
  const sum = current + next;
  console.log(`Сумма элементов ${current} и ${next}: ${sum}`);
}



// Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.
const num = [11, 18, 10, 17, 21];
const result = updateNum(num);
function updateNum (numbers) {
    return numbers.map(num => num * num);
}

console.log(result);


// Задание 12
// Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.
function arrayStr(words) {
  return words.map(word => word.length);
};

let colors = ['red', 'green', 'blue', 'grey', 'yellow'];
const colorLengths = arrayStr(colors);

console.log(colorLengths);


// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения.
function anyNumbers(numbers) {
    return numbers.filter(number => number < 0);
};

const differentNumbers = [3, -4, 5, -8, -2, 7, 8, -4];
const negativeNumbers = anyNumbers(differentNumbers);

console.log(negativeNumbers);


// Задание 14
// Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода Math.random() в диапазоне от 0 до 10.

// В данном массиве найдите все четные значения и добавьте их в новый массив. Результат работы программы необходимо вывести в консоль — это будут два массива: исходный массив и массив с четными значениями.
const anyArray = Array.from({ length: 10}, () => Math.floor(Math.random() * 11));
const evenNumbers = anyArray.filter(num => num % 2 === 0);

console.log(`Созданный массив: ${anyArray}`);
console.log(`Четные значения: ${evenNumbers}`);


// Задание 15
// Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью Math.random() в диапазоне от 1 до 10.

// Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.
const randomArr = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);

const sum = randomArr.reduce((total, number) => total + number, 0);
const arithmeticMean = sum / randomArr.length;

console.log(`Сгенерированный массив: ${randomArr}`);
console.log(`Среднее арифметическое: ${arithmeticMean}`);
