const hamburger = document.querySelector('.hambuger');
const whole = document.querySelector('.whole')
const cancle = document.querySelector('.close');

hamburger.addEventListener('click', function () {
    whole.classList.toggle('show')
})

cancle.addEventListener('click', function () { 
    whole.classList.toggle('show')
})