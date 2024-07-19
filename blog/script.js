let text = document.getElementById('text');
let shelf = document.getElementById('shelf');
let plant = document.getElementById('plant');
let plant2 = document.getElementById('plant2');
/*let pictures = document.getElementById('pictures');*/

window.addEventListener('scroll',() =>{
    let value = window.scrollY;
    let maxScroll = 400; // Change this value as needed

    if (value <= maxScroll) {
      text.style.marginTop = value * 2.5 + 'px';
    } else {
      text.style.marginTop = maxScroll * 2.5 + 'px';
    }

    
    shelf.style.top = value * -1.5 +'px';
    shelf.style.left = value * 1.5 + 'px';
    plant.style.left = value * 1.5 + 'px';
    plant2.style.left = value * -1.5 + 'px';
   /* pictures.style.top = value * 4 + 'px';*/
})
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').appendChild(items[0])
})
prev.addEventListener('click', function(){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').prepend(items[items.length - 1])
})