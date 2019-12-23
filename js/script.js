// // модальное окно
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let formNav = document.getElementById('form-nav');
let close = document.getElementById('close');

/* Открываем модальное окно */
btn.onclick = function () {
    btn.setAttribute("href", "#form-nav"); 
    document.body.style.overflow = "hidden";
};
btn2.onclick = function () {
    btn2.setAttribute("href", "#form-nav"); 
    document.body.style.overflow = "hidden";
};
/* Закрываем модальное окно */
close.onclick = function () {
    btn.removeAttribute("href"); 
    document.body.style.overflow = null;
};



