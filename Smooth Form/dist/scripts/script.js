
'use strict';


const btnSubmit = document.querySelector('.contact .btn-submit');

function addBtnRipple(btn, event) {
    if (btn.querySelector('.ripple')) {
        btn.querySelector('.ripple').remove();
    }
    btn.style.position = 'relative';
    const x = event.clientX, y = event.clientY;
    const btnTop = event.target.offsetTop;
    const btnLeft = event.target.offsetLeft;

    const xInside = x - btnLeft;
    const yInside = y - btnTop;

    const span = document.createElement('span');

    span.classList.add('ripple');
    span.style.top = yInside + 'px';
    span.style.left = xInside + 'px';
    btn.appendChild(span);
}

btnSubmit.onclick = function (e) {
    addBtnRipple(btnSubmit, e);
};