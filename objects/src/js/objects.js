//task3
// +++Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), 
// и следующие функции для работы с этим объектом:
// +++Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.


// const car = {
//     manufacturer: 'Tesla Inc.',
//     model: 'Model 3',
//     year: '2019',
//     avgSpeed: 130,
//     getParamethers: function() {
//         alert(`manufacturer: - ${car.manufacturer}, model - ${car.model},  year - ${car.year},  avgSpeed - ${car.avgSpeed}`);
//       },
//     calcDistance: function(km) {
//         let timeMove = km / car.avgSpeed;
//         let timeRest = 0;
//         if (timeMove > 4) {
//             for (let i = 4; i < timeMove; i += 4) {
//                 timeRest++;
//             }
//         } else {
//             return timeMove;
//         }
//         return timeMove + timeRest;
//     }
// }
// console.log(calcDistance(260));


//task4
//Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, 
// и следующие функции для работы с этим объектом: 
// ++++Функция сложения 2-х объектов-дробей;
// ++++Функция вычитания 2-х объектов-дробей;
// +++Функция умножения 2-х объектов-дробей;
// +++Функция деления 2-х объектов-дробей;
// +++Функция сокращения объекта-дроби.

// const obj = {
//     numerator: 5,
//     denominator: 10,
// }
// getSum = () => {
//     return (obj.numerator / obj.denominator) + (obj.numerator / obj.denominator);
// }
// console.log(getSum());

// getSubtraction = () => {
//     return (obj.numerator / obj.denominator) - (obj.numerator / obj.denominator);
// }
// console.log(getSubtraction());

// getMultiplications = () => {
//     return (obj.numerator / obj.denominator) * (obj.numerator / obj.denominator);
// }
// console.log(getMultiplications());

// getDivisions = () => {
//     return  (obj.numerator / obj.denominator) / (obj.numerator / obj.denominator);
// }
// console.log(getDivisions());

// getReductions = () => {
//     while (obj.denominator) {
//         let num = obj.denominator;
//         obj.denominator = obj.numerator  % obj.denominator;
//         obj.numerator  = num;
//     }
//     return obj.numerator;
// }
// console.log(getReductions());


// task5
// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
// ++++Функция вывода времени на экран;
// +++++Функция изменения времени на переданное количество секунд;
// ++++Функция изменения времени на переданное количество минут;
// ++++Функция изменения времени на переданное количество часов. 
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. 
// Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75» 
// const time = {
//     hours: 12,
//     minutes: 10,
//     seconds: 55,
// }
// getTime = () => {
//     let timeScreen = '';
//     for (let key in time) {
//         if (time[key] == time.seconds) {
//             timeScreen += (time[key])
//         } else {
//             timeScreen += (time[key]) + ':';
//         }
//     }
//     console.log(timeScreen);
// }
// getTime();

// changeSeconds = (s) => {
//     let newSeconds = time.seconds + s;
//     time.seconds = Math.trunc(newSeconds % 60);
//     if (newSeconds < 0) {
//         time.seconds += 60;
//         time.minutes += Math.trunc(newSeconds / 60);
//     } else if (newSeconds >= 60) {
//         time.minutes += Math.trunc(newSeconds / 60);
//     } else {
//         time.seconds = newSeconds;
//     }
//     return getTime();
// }
// changeSeconds(86);

// changeMin = (min) => {
//     let newMin = time.minutes + min;
//     time.minutes = Math.trunc(newMin % 60);
//     if (newMin < 0) {
//         time.minutes += 60;
//         time.hours += Math.trunc(newMin / 60);
//     } else if (newMin >= 60) {
//         time.hours += Math.trunc(newMin / 60);
//     } else {
//         time.minutes = newMin;
//     }
//     return getTime();
// }
// changeMin(17);

// changeHour = (hour) => {
//     let newHour = time.hours + hour;
//      time.hours = Math.trunc(newHour % 24);
//      if (newHour >= 24) {
//         time.hours += Math.trunc(newHour / 24);
//      } else {
//     time.hours = newHour;
//     }
//     return getTime();
// }
// changeHour(2);

//Task1
//+++Создать объект user  со свойствами name, age, role. 
//+++Создать второй объект admin и унаследовать все свойства объекта user, кроме значения свойства role(свойтво role должно быть 'user'). 
// Также в объектах должны быть два метода, первый метод length() выводит в консоль количество ключей в объекте, 
//при вызове метода  user.length()  должно отобразиться количество ключей; второй метод 
// checkPermission() показывает alert с текстом "Access granted" если role === 'admin', и "Access denied" если role === 'user'.
const user = {    
    name: "John",  
    age: 30,
  };
const admin = {};
for (let key in user) {
    console.log(user[key]);
    admin[key] = user[key];
}
user.role = "User";
admin.role = "Admin";
console.log(user);
console.log(admin);
console.log(Object.keys(user));
console.log(Object.keys(admin));

//task2
//+++Создать функцию createUser() которая создает объект со значениями name, age, height, weight. 
//Для свойств age, height, weight должен быть тип number, иначе вывести alert, что неверный тип и 
//объект не должен создаться. Если в функцию не переданы аргументы, вывести аргументы по умолчанию. 
//+++Функция должна вызываться так createUser('John', 39, 178, 67)

// function createUser(userName, userAge, userHeight, userWeight) {
//     if(typeof(userAge, userHeight, userWeight) === 'number') {
//         return {
//             name: userName,
//             age: userAge,
//             height: userHeight,
//             weight: userWeight,
//             getInfo: function() {
//                 console.log("Name: " + this.name + " age: " + this.age + " height: " + this.age + " weight: " + this.age );
//             }
//         }
//       } else {
//         alert('неверный тип');
//       }
// };
// console.log(createUser('John', 39, 178, 67));
