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



//Task2
//Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, 
//необходимо отсортировать данные по этой колонке. Учтите, что числовые значения должны 
//сортироваться как числа, а не как строки.

const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');
const columsTitle = document.querySelectorAll('th');

function sortColumn (event) {
  const rows = Array.from(tableBody.rows);
  const index = event.target.cellIndex;

  const sortedRows = rows.sort ((a, b) => {
    const current = a.cells[index].innerText;
    const current = b.cells[index].innerText;

    if (current > next) {
      return 1;
    }

    if (current < next) {
      return - 1;
    }

    return 0;
  })

 tableBody.append(...sortedRows)
}

columsTitle.forEach(item => item.addEventListener('click', sortColumn));

console.log(columsTitle)
