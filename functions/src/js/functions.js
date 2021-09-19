//Task1
//Написать функцию, которая принимает 2 числа и возвращает -1, 
//если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
// function maxNumber (a , b) {
//     if (a < b) {
//         alert(-1);
//     } else if (a > b) {
//        alert(1);
//     } else if (a === b) {
//         alert(0);
//     }
// }
// maxNumber (11 ,12);

//task2
//Написать функцию, которая вычисляет факториал переданного ей числа.
// function factorial (n) {
//    return (n != 1) ? n * factorial(n - 1) : n;
// }
// alert(factorial (3));

//task3
//Написать функцию, которая принимает три отдельные цифры
// и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
function inputNumbers (a, b, c) {
    a = String(a);
    b = String(b);
    c = String(c);
    n = a + b + c;
    console.log(typeof(n));
    return(parseInt(n));
}
let digits = inputNumbers(1, 3, 4);
console.log(typeof(digits));
console.log(digits);

//task4
//Написать функцию, которая принимает длину и ширину прямоугольника 
//и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
// let a = prompt("Enter the lenght");
// let b = prompt("Enter the width");
// function square (a, b){
// if(a != '' && b != '')
// return a * b;
// else if(a != '' && b === '')
// return a * a;
// else if(a === '' && b != '')
// return b * b; }
// console.log(square(a, b));

//task5
//Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
//Совершенное число – это число, равное сумме всех своих собственных делителей.
// function isPerfectNumber(num){
//   let result = 0;
//   for (let i = 0; i < num; i++) {
//     if (num % i ===0 ) {
//       result += i;
//     }
// }
// return result === num ? true : false;
// }
// let number = isPerfectNumber(28);
// console.log(number);


//task6
//Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
//и выводит только те числа из диапазона, которые являются совершенными. 
//Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
// function findPerfectNumber (min, max) {
//   for (let i = min; i < max; i++) {
//     if (isPerfectNumber(i)){
//       console.log(i);
//     }
//   }
// }
// findPerfectNumber (2, 29);


//task7
//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
//Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
// function inputTime(h, m, s) {
//   return function inputMinutes(m = '00') {
//     return function inputSeconds(s = '00') {
//       return `${h}:${m}:${s}`
//     }
//   }
// }
// let time = inputTime(22)()(16);
// console.log(time);

//task8
//Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
// function timeToSeconds(h, m, s) {
//   let sum = s + m * 60 + h * 3600;
//   return(sum);
// }
// let timeSeconds = timeToSeconds(1, 10, 44);
// console.log(timeSeconds);

//task9
//Написать функцию, которая принимает количество секунд, 
//переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
// function secondsToTime (secondsTime) {
//   let h = Math.floor(secondsTime / 60 / 60);
//   let m = Math.floor(secondsTime / 60) - (h * 60);
//   let s = secondsTime % 60;
//   let formatted = [
//     h.toString().padStart(2, '0'),
//     m.toString().padStart(2, '0'),
//     s.toString().padStart(2, '0')
//   ].join(':');
//   return(formatted);
// }
// console.log(secondsToTime(4244));

//tas10
//Написать функцию, которая считает разницу между датами. 
//Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». 
//При выполнении задания используйте функции из предыдущих 2-х заданий: 
//сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
