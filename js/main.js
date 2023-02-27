"use strict"

const imgs = ['01.webp','02.webp','03.webp','04.webp','05.webp']; // array che contiene le nostre immagini

let itemsContent = ''; // stringa che serve per costruire la struttura
let active = 0; //posizione di partenza del carosello

const slider = document.querySelector('.slider');


for(let i =0; i < imgs.length; i++ ){
    itemsContent += `<div class="item"><img src="img/${imgs[i]}" alt="img-${i}"></div>`;
}

slider.innerHTML += itemsContent;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const items = document.querySelectorAll('.item');
items[active].classList.add('show');


prev.addEventListener('click',function(){
    if(active > 0){
        items[active].classList.remove('show');
        active--;
        items[active].classList.add('show');
    }
})

next.addEventListener('click',function(){
    if(active < items.length - 1){
        items[active].classList.remove('show');
        active++;
        items[active].classList.add('show');
    }
})