//task 1
//Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
class Circumference {
  constructor(radius) {
  this.radius = radius;
}

setRadius (value) {
  this.radius = value;
}

getRadius () {
  return this.radius;
}

getDiametr () {
  return this.radius * 2;
}
area () {
  const area =  (Math.PI * this.radius ** 2).toFixed(2);
  return console.log('Площадь окружности', area);
}

lengh() {
  const lenght =  (Math.PI * this.radius * 2).toFixed(2);
  return console.log('Длина окружности', lenght);
}
}
const r = new Circumference(10);
r.area()
r.lengh()

//Task2
//2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; 
// текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// поле, которое хранит цвет маркера;
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и 
// добавив метод для заправки маркера.

class Marker {
  constructor(color, quantity) {
    this.color = color;
    this.quantity = quantity;
  }

  getText {

  }
}
//Task 3
//3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.
// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка.
// Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().

