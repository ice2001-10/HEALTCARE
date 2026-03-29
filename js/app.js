const burgerMenu = document.getElementById('burgerMenu');
const burgerContent = document.getElementById('header--burger--info');
let usBurger = 0;

console.log()
burgerContent.style.left = `${window.innerWidth-220}px`

burgerMenu.addEventListener('click', function() {
    if (usBurger==0) {
        document.getElementById('strip1').classList.add('us1');
        document.getElementById('strip2').classList.add('us2');
        document.getElementById('strip3').classList.add('us3');
        burgerContent.style.display = 'flex';
        burgerContent.classList.add('us4');
        usBurger=1
    } else if (usBurger==1) {
        document.getElementById('strip1').classList.remove('us1');
        document.getElementById('strip2').classList.remove('us2');
        document.getElementById('strip3').classList.remove('us3');
        burgerContent.classList.remove('us4');
        burgerContent.style.display = 'none'
        usBurger=0
    }
    
})