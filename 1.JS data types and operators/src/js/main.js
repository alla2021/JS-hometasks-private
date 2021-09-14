// //Task 1
// let age  = +prompt('How old are you?');
//     if (age >= 0 && age < 12) {
//         console.log('You are a child');
//     } else if (age >= 12 && age < 18) {
//         console.log('You are a teenager');
//     } else if (age >= 18 && age < 60) {
//         console.log('You are an adult');
//     } else if (age >= 60) {
//         console.log('You are an retired person');
//     } 

// //Task 2
// let num  = prompt('Enter the number from 0 to 9');
//     switch (num){
//         case '0':
//             console.log('0 is ")"');
//             break;
//         case '1':
//             console.log('1 is "!"');
//             break;
//         case '2':
//             console.log('2 is "@"');
//             break;
//         case '3':
//             console.log('3 is "#"');
//             break;
//         case '4':
//             console.log('4 is "$"');
//             break;
//         case '5':
//             console.log('5 is "%"');
//             break;
//         case '6':
//             console.log('6 is "^"');
//             break;
//         case '7':
//             console.log('7 is "&"');
//             break;
//         case '8':
//             console.log('8 is "*"');
//             break;
//         case '9':
//             console.log('9 is "(!)"');
//             break;
//         default:
//             console.log('Only 1 digits!');
//     }

// //Task 3
// let number = prompt('Enter the number from 100 to 999');
//     if (number[0] === number[1] || number[0] === number[2] || number[1] === number[2]) {
//             console.log('The number contains the same digits');
//         } else {
//             console.log('The number contains different digits');
//         }

// //Task 4
// let anyYear = +prompt('Enter any year');
//     if (anyYear % 400 === 0 || (anyYear % 4 === 0 && anyYear % 100 !=== 0)) {
//         console.log('Leap year');
//     } else {
//         console.log('Not Leap Year');
//     }     

// //Task 5
// //Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
// let x = prompt('Enter the number from 10 000 to 99 999', 0);
// console.log(typeof x);
//     if (x[0] == x[4] && x[1] == x[3]) {
//         console.log('The number is a palindrome');
//     } else {
//         console.log('The number is NOT a palindrome');
//     }

// //Task 6
// //Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
// let amount = +prompt('Enter the amount of USD:');
// let currency = +prompt('EUR = 1, UAH = 2, AZN = 3');
//     switch(currency) {
//         case '1':
//             console.log(amount*0.85 + 'EUR');
//             break;
//         case '2':
//             console.log(amount*26.72 + 'UAH');
//             break;
//         case '3':
//             console.log(amount*1.7 + 'AZN');
//             break;
//         default:
//             break;
//     }

// //Task 8
// //Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
// let circumference = +prompt('Enter the circumference');
// let perimetersSquare = +prompt('Enter the perimeters of the square');
// if (perimetersSquare / 4 == circumference / Math.PI || perimetersSquare / 4 <= circumference / Math.PI ) {
//         console.log('Circle inscribed in a square');
//     }
//     else {
//         console.log('Circle NOT inscribed in a square');
//     }

// //Task 9
// //Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
// let planet = prompt('What is the planet? 1 - Moon 2 - Sun 3 - Earth');
// let country = prompt('What is NOT the island country? 1 - Madagascar 2 - Canada 3 - Cuba');
// let capital = prompt('What is the capital of France? 1 - Madrid 2 - Malta 3 - Paris');
//     let score = 0;
//     if (planet == 3) {
//         score += 2;
//     } if (country == 2) {
//         score += 2;
//     } if (capital == 3){
//         score += 2;
//     }
//     alert('Your score is ' + score);

// //Task 10
// //Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
// let date = prompt('Enter the date: day/month/year ');
//     date = date.split('/');
//     let oldDate = new Date(date[2], date[1]-1, date[0]);
//     oldDate.setDate(oldDate.getDate()+1);
//     alert(oldDate);
