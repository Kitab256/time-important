"use strict"

const input = document.querySelector('#input');
const btn = document.getElementById('btn');
const minuteEl = document.querySelector('#minute');
const secondEl = document.querySelector('#second');

btn.onclick = () => {
    let time = input.value;
    startTimer(time)
}

const state ={
    timerStarted: false
}

function startTimer(time){
    let totalSeconds = Number(time) * 60;
    if(!state.timerStarted){
        let interival = setInterval(() => {
            let minute = Math.floor(totalSeconds / 60);
            let second = totalSeconds % 60;
            minuteEl.textContent= minute.toString();
            secondEl.textContent= second.toString().padStart(2,0);
            totalSeconds--;
            if(totalSeconds === -1){
                clearInterval(interival)
                minuteEl.textContent= minute.toString().padStart(2,0);
            }
        },10);
    }
    state.timerStarted = true;
}


// setTimeout(() =>{
//     startTimer(10)
// },5000);


// $('.img-text').click(function(e){
//     $(this).fadeOut(10000)
// })

// $('.img-text').click(function(e){
    
//     $('.btn').fadein(10000)

// })
// let interival = setInterval(() => {
//     let minute = Math.floor(totalSeconds / 60);
//     let second = totalSeconds % 60;
//     minuteEl.textContent= minute.toString();
//     secondEl.textContent= second.toString().padStart(2,0);
//     totalSeconds--;
//     if(totalSeconds === -1){
//         clearInterval(interival)
//         const img = document.querySelector('.img-text');
//         img.style.display = "none";
//     }
// });    