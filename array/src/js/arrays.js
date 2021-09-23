//task1
// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит 
//название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

// const shoppingList = [
//     { name: 'apple', count : 20, bought: true },
//     { name: 'pineapple', count: 2, bought: false },
//     { name: 'orange', count: 14, bought: true },
//     { name: 'banana', count: 8, bought: false },
// ]

// //Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// function sortByBuy(arr) {
//     const newArray = arr.slice();
//     return newArray.sort((a, b) => (a.bought > b.bought ? 1 : -1));
//   }
// console.log(sortByBuy(shoppingList));

// //Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// function addNewItem(arr, item) {
//     const goods = arr.find(el => el.name === item.name);
//     if (goods) {
//         goods.count += item.count;
//     } else {
//       arr.push(item);
//     }
//   }
//   addNewItem(shoppingList, {name: 'apple', count: 3});
//   addNewItem(shoppingList, {name: 'lime', count: 3, bought: false}); // ?? нет нового объекта в массиве

// //Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

// function checkBuy(name) {
//     const item =  arr.find(el => el.name === item.name);
//     item.bought = true;
//   }
//   checkBuy('pineapple');



//task2
//Создать массив,, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

// const check = [
//     { name: 'apple', quantity: 20, price: 20 },
//     { name: 'pineapple', quantity: 2, price: 120 },
//     { name: 'orange', quantity: 11, price: 45 },
//     { name: 'banana', quantity: 8, price: 25 },
// ]

// //Распечатка чека на экран;
// check.forEach(function(showCheck) {
//     console.log(showCheck);
// });

// //+Подсчет общей суммы покупки;
// function calcSum(arr) {
//     const sum = arr.reduce(function (prev, item) {
//       return prev + item.price * item.quantity;
//     }, 0)
//     return sum;
//   }
// console.log('Sum', calcSum(check));

// // +Получение самой дорогой покупки в чеке;
// function calcMaxItem (arr) {
//     const maxItem = arr.reduce(function (prev, item) {
//     return arr.reduce((prev, item) => prev.quantity * prev.price > item.quantity * item.price ? prev : item);
// })
//   return maxItem;
// }
// console.log('MAX', calcMaxItem(check));

// // Подсчет средней стоимости одного товара в чеке.
// function calcAvgSum(arr) {
//     const avgSum = arr.reduce(function (prev, item) {
//       return prev + item.price * item.quantity;
//     }, 0)
//     return avgSum/ arr.length;
//   }
// console.log('AvgSum', calcAvgSum(check));



// task3
//Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест 
//(от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

// const classroom = [
//     {name: '201', seats: 20, department: 'history'},
//     {name: '110', seats: 16, department: 'economic'},
//     {name: '303', seats: 18, department: 'web technologies'},
//     {name: '211', seats: 10, department: 'economic'},
//     {name: '202', seats: 18, department: 'history'},
// ]

// //Вывод на экран всех аудиторий;
// classroom.forEach(function(showAllClassrooms) {
//     console.log(showAllClassrooms.name);
// });

// Вывод на экран аудиторий для указанного факультета;
// function showClassroomForCourse (arr) {
//     const newArray = arr.slice();
//     return newArray.map(function (item) {
//         return {department: item.department, name: item.name.toString(), }
//       });
//   }
// console.log(showClassroomForCourse(classroom)); //вывод на экран всех, как сделать для указанного

// Вывод на экран только тех аудиторий, которые подходят для переданной группы. 
// Объект-группа состоит из названия, количества студентов и названия факультета;

// const group = [
//     {name: 'h-20', quantity: 19, department: 'history'},
//     {name: 'ek-21', quantity: 15, department: 'economic'},
//     {name: 'wt-21', quantity: 18, department: 'web technologies'},
//     {name: 'ek-20', quantity: 10, department: 'economic'},
//     {name: 'h-21', quantity: 14, department: 'history'},
// ]

// //+Функция сортировки аудиторий по количеству мест;

// function sortSeats(arr) {
//     const newArray = arr.slice();
//     return newArray.sort((a,b) => (a.seats > b.seats) ? 1 : ((b.seats > a.seats) ? -1 : 0))
//   }
// console.log(sortSeats(classroom));

// // +Функция сортировки аудиторий по названию (по алфавиту).

// function sortForName(arr) {
//     const newArray = arr.slice();
//     return newArray.sort((a, b) => (a.name > b.name ? 1 : -1));
//   }
// console.log(sortForName(classroom));