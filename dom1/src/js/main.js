//task1 как сделать вывод исполнителя + песни ??
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
    itemText.innerText = item.author + ' - ' +item.song; 

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




// 3. Создать HTML-страницу со светофором и кнопкой,
// которая переключает светофор на следующий цвет.
// const trafficLights = document.querySelector("div.traffic__light");

