// ----- Task1 
//Подсчитать сумму всех чисел в заданном пользователем диапазоне.

// let a = +prompt("beginning of the range:", 1);
// let b = +prompt("ending of the range:", 10);
// let sum = 0;
// while (a <= b) {
//  sum += b;
//  b-- ;
// }
// alert(sum)

// ----- Task2
//Запросить 2 числа и найти только наибольший общий делитель.

// let x = +prompt("Enter the first number", 10);
// let y = +prompt("Enter the second number", 15);
// number = Math.min(x, y);
// let arr = [];
// for (i = 1; i <= number; i++ ) {
//  if (number % i === 0 && Math.max(x,y) % i === 0) {
//     arr.push(i); 
//  }
// }
// console.log(arr.slice(-1)[0])

// ----- Task3
//Запросить у пользователя число и вывести все делители этого числа.

// let number = +prompt("Enter the number:", 9);
// console.log(typeof number);
// let arr = [];
// for (i = 1; i <= number; i++ ) {
//  if (number % i === 0) {
//     arr.push(i); 
//  }
// }
// console.log(arr)

// ----- Task4
//Определить количество цифр в введенном числе.

// let n = +prompt("Enter the number:");
// for (i = 1; n > 1; i++) {
//     n /= 10;
// }
// console.log(i-1)

// ----- Task5
//Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. 
//При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. 
//Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

// let arr = [];
// for(let i = 0; i < 10; i++)
//    arr.push(prompt("Enter a number"));
// console.log(arr);
// let zeroCount = 0;
// let positiveCount = 0;
// let negativeCount = 0;
// arr.forEach((item) => {
//     if (item < 0)  {
//       negativeCount++
//     } else if (item > 0) {
//       positiveCount++
//     } else {
//         zeroCount++
//     }
//   })
//   let evenNumber = 0;
//   let unevenNumber = 0;
//   arr.forEach((item) => {
//     if (item % 2 === 0) {
//       evenNumber++
//     } else if (item %2 != 0) {
//       unevenNumber++
//     } 
//   })
//   alert('Zero: ' +zeroCount +'. Negative: ' + negativeCount + '. Positive: '+ positiveCount +'. ' + 'Even number: ' +evenNumber+ '. Uneven number: ' + unevenNumber)

// ----- Task6
//Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, 
//хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
// do {
//     let x = +prompt("Enter the first number", 2);
//     let y = +prompt("Enter the second number", 2);
//     let symbol = prompt("Enter the symbol - + * /");
//     switch (symbol) {
//         case '+':
//             alert(x + y);
//             break;
//         case '-':
//             alert(x - y);
//             break;
//         case '/':
//             alert(x / y);
//             break;
//         case '*':
//             alert(x * y);
//         default:
//             break;
//     }
// } while (confirm("Would you like to solve another example?"));


// ----- Task7
//Запросить у пользователя число и на сколько цифр его сдвинуть. 
//Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

// let x = prompt("Enter the number", 123456);
// let y = +prompt("How many digits to shift it?", 2);
// console.log(x.slice(y)+x.slice(0, y))
// for (i = 0; i <= x.length; i++ ) {
//        arr.push(i); 
//     }
//    alert(arr);

// ----- Task8
//Зациклить вывод дней недели таким образом:
// «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

// const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let currDay = 0;
// while (confirm(`${days[currDay]}. Do you want to see the next day?`)) {
//   currDay = (currDay + 1) % days.length;
//}

// ----- Task9
//Вывести таблицу умножения для всех чисел от 2 до 9. 
//Каждое число необходимо умножить на числа от 1 до 10.
// let result = 'x ';
// for (i = 1; i < 10; i++) {
//     for (let j = 1; j < 11; j++) {

//         if(i == 0 && j > 0){
//           result += '[' + j + ']';
//         } 
//         else if(j == 0 && i>0){
//           result += '[' + i + '] ';
//         } 
//         else if(i>0 && j>0){
//         result += (i*j) + ' ';
//         }
//     }
//     result += '\n'
// }
// console.log(result);

// ----- Task10
//Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: 
//каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, 
//< N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, 
//поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. 
//И так до тех пор, пока пользователь не выберет == N. 

let arr = [25, 12, 6, 3, 2, 1, 1];
let y = 50;
console.log(typeof arr[0]);
for (i = 0; i < 6; i++) {
    if (confirm('ваше число больше? ' + y )) {
        y = y + arr[i];
    }
    else {
        y = y - arr[i];
    }
    console.log(y);
}

