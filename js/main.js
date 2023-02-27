"use strict"

/*
<div class="item show"><img src="img/01.webp" alt="img-1"></div>
            <div class="left">left</div>
            <div class="right">right</div>
*/

const imgs = ['01.webp','02.webp','03.webp','04.webp','05.webp'];

let itemsContent = '';
let active = 0;

const slider = document.querySelector('.slider');


for(let i =0; i < imgs.length; i++ ){
    itemsContent += `<div class="item"><img src="img/${imgs[i]}" alt="img-${i}"></div>`;
}

slider.innerHTML += itemsContent;
document.querySelector('.item').classList.add('show');

const prev = document.querySelector('prev');
const next = document.querySelector('next');