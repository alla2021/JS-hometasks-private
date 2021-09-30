// Task3
//Создать HTML-страницу с блоком текста в рамочке. Реализовать возможность изменять размер блока, 
//если зажать мышку в правом нижнем углу и тянуть ее дальше.

const resizeBox = document.querySelector("#text-holder");
const resize = document.querySelector(".text-holder--resize");

function initialResize () {
  window.addEventListener('mousemove', startResize);
    window.addEventListener('mouseup', stopResize);
};

function startResize (el) {
  resizeBox.style.width = (el.clientX - resizeBox.offsetLeft) + 'px';
};

function stopResize (el) {
  window.removeEventListener('mousemove', startResize);
    window.removeEventListener('mouseup', stopResize);
    console.log(el);
}

resize.addEventListener('mousedown', initialResize);

//task1 
//Создать HTML-страницу для отображения/редактирования текста. 
//При открытии страницы текст отображается с помощью тега div. 
//При нажатии Ctrl + E, вместо div появляется textarea с тем же 
//текстом, который теперь можно редактировать. При нажатии Ctrl + , 
//вместо textarea появляется div с уже измененным текстом. 
// //Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.

// document.addEventListener('keydown', function (event) {
//     const changeText =  document.createElement('div');
//     listItem.classList.add ('wrapper');
//     if (event.code === ('ControlLeft' && 'KeyE')) {
//         let elem = document.querySelector(".wrapper");
//     }
//  }   

//Task2
//Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, 
//необходимо отсортировать данные по этой колонке. Учтите, что числовые значения должны 
//сортироваться как числа, а не как строки.
