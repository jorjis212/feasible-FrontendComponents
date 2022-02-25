'use strict';

import { removeClassFromNodelists, addHighlight } from './functions.js';
const faqElementHeaders = document.querySelectorAll('.faq .faq__content__element__header');

faqElementHeaders.forEach((item) => {
    item.onclick = function (e) {
        e.stopPropagation();
        if (item.parentNode.classList.contains('expan')) {
            removeClassFromNodelists(faqElementHeaders, 'expan');

        } else {
            const logoContainer = item.querySelector('.faq__logo');
            removeClassFromNodelists(faqElementHeaders, 'expan');
            item.parentNode.classList.add('expan');
            logoContainer.src = './assets/Faq/minus-logo.svg';
            addHighlight(this);
        }
    };
});