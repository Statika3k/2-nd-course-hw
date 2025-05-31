// Задание 1
// Преобразовать строку 'js' в верхний регистр.'
console.log('js'.toUpperCase());

// Задание 2
// Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат.
function findElement(array, prefix) {
    return array.filter(item => item.toLowerCase().startsWith(prefix.toLowerCase()));
}
// Пример использования:
const str = ["смузи яблочный", "банановый смузи", "Лимонад", "сМузи вишнево-мятный", "Смузи  зеленый с Авокадо"];
const target = "смузи";
const result = findElement(str, target);
console.log(result);


// Задание 3
// Округлить число 32.58884:

// До меньшего целого.
// До большего целого.
// До ближайшего целого.
const num = 32.58884
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));


// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль. 
const numbers = [52, 53, 49, 77, 21, 32];
const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log(`Минимальное значение: ${min}`);
console.log(`Максимальное значение: ${max}`);


// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.
const findRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}

findRandomNumber();


// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.
function generateRandomArray(num) {
    const arrayLength = Math.floor(num / 2);
    const randomArray = [];

    for (let i = 0; i < arrayLength; i++) {
        const randomNumber = Math.floor(Math.random() * (num + 1));
        randomArray.push(randomNumber);
    }

    return randomArray;
}
console.log(generateRandomArray(7));



// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.
const getRandomNumber = (min, max) => {
  
  if (min > max) [min, max] = [max, min];
  
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(getRandomNumber(3, 7));



// Задание 8
// Вывести в консоль текущую дату.
let todaysDate = new Date();
console.log(todaysDate);


// Задание 9
// Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);


// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:


// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
"Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date();
let fullDate = "Сегодня: " + myDate.getDate() + 
    " " + months[myDate.getMonth()] + 
    " " + myDate.getFullYear() + 
    " - это " + days[myDate.getDay()];
console.log(fullDate);

let hours = myDate.getHours();
let minutes = myDate.getMinutes();
let seconds = myDate.getSeconds();
let minutesFormatted = minutes.toString().padStart(2, '0');
let secondsFormatted = seconds.toString().padStart(2, '0');
let myTime = `Сегодня: ${hours}:${minutesFormatted}:${secondsFormatted}`;
console.log(myTime);