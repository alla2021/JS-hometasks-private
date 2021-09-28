//task1 нет нумерации списка?
let playList = [
    {author: "LED ZEPPELIN", song:"STAIRWAY TO HEAVEN"},
    {author: "QUEEN", song:"BOHEMIAN RHAPSODY"},
    {author: "LYNYRD SKYNYRD", song:"FREE BIRD"},
    {author: "DEEP PURPLE", song:"SMOKE ON THE WATER"},
    {author: "JIMI HENDRIX", song:"ALL ALONG THE WATCHTOWER"},
    {author: "AC/DC", song:"BACK IN BLACK"},
    {author: "QUEEN", song:"WE WILL ROCK YOU"},
    {author: "METALLICA", song:"ENTER SANDMAN"},
];

function renderPlayElement (item) {
    const listItem = document.createElement('li');
    const itemText = document.createElement('p');

    listItem.classList.add ('list__item');
    itemText.classList.add ('list__item-text');
    itemText.innerText = item.author + ' - ' + item.song; 

    listItem.append(itemText);
    return(listItem);
}    
// renderPlayElement () 

function renderListSongs(arr) {
    const list = document.querySelector('#playlist-id');
    for(let item of arr){
        const songs = renderPlayElement(item);
        list.append(songs);
    }
}
renderListSongs (playList)

//2. Создать HTML-страницу с кнопкой "Открыть"
// и модальным окном. На модальном окне должен быть
// текст и кнопка "Закрыть". Изначально модальное
// окно не отображается. При клике на кнопку
// "Открыть" появляется модальное окно, на
// кнопку "Закрыть" – исчезает.

// прописала в css display: none; для модального окна до нажатия на кнопку Открыть, 
//как это сделать в js?


const openBtn = document.getElementById('btn-open');
const closeBtn = document.getElementById('btn-close');

openBtn.addEventListener('click', function () {
    document.getElementById("modal").style.display = "block";
    openBtn.style.display = "none";
   })

closeBtn.addEventListener('click', function () {
    document.getElementById("modal").style.display = "none";
    openBtn.style.display = "block";
   })

// 3. Создать HTML-страницу со светофором и кнопкой,
// которая переключает светофор на следующий цвет.


const trafficLights = document.querySelector(".traffic-light");

const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");
const button = document.getElementById("btn");

button.addEventListener("click", function() {
    if (redLight.classList.contains("color__red")) {
        redLight.classList.remove("color__red");
        yellowLight.classList.add("color__yellow");
    } else if (yellowLight.classList.contains("color__yellow")) {
        yellowLight.classList.remove("color__yellow");
        greenLight.classList.add("color__green");
    } else if (greenLight.classList.contains("color__green")) {
        greenLight.classList.remove("color__green");
        redLight.classList.add("color__red");
        }
});
