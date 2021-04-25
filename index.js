let front = document.querySelector('#front')
let behind = document.querySelector('#behind')
let stars = document.querySelector('#stars')
let moon = document.querySelector('#moon')
let moonHeader = document.querySelector('#moon-header')
let content = document.querySelector('.content')
let btn = document.querySelector('.explore')
let header = document.querySelector('.sec')
function parallax (){
    moonHeader.style.marginRight = window.scrollY * 4 + 'px';
   stars.style.transform ='rotate(-' +window.pageYOffset/10+'deg)';
  moon.style.top = window.pageYOffset * 1 + 'px';
   front.style.top = window.pageYOffset * 0.15 + 'px';
   behind.style.top= window.pageYOffset * 0.35 +'px';
  // content.style.top = -window.pageYOffset/6 + 'px';
   btn.style.marginTop = window.pageYOffset * 2 + 'px';
   header.style.top = window.pageYOffset * 0.5 + 'px';

}

document.addEventListener('scroll',parallax,false)
