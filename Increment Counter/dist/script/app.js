
'use strict';

const counters =
    document.querySelectorAll('.container__counter__count');


window.onload = () => {
    counters.forEach(item => {
        item.innerHTML = '00';

        function updateCounter() {
            const max = +item.getAttribute('data-target');
            const temp = +item.innerHTML;

            const increment = max / 100;

            if (temp < max) {
                item.innerHTML = `${Math.ceil(temp + increment)}`;
                setTimeout(updateCounter, 1);
            } else {
                item.innerHTML = max;
            }
        }
        updateCounter();
    });
};