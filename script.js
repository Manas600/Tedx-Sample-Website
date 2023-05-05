let wave = document.getElementById("wave");

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    wave.style.left = value*-0.35 + 'px';

});
