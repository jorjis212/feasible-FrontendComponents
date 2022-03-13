'use strict';

const userInput = document.querySelector('.tag__input');
const tagContainer = document.querySelector('.tag__elements');


userInput.onkeyup = function (e) {
    createTags(e.target.value);
};

function createTags(str) {
    const tags = str.split(',').map(ele => ele.trim()).filter(ele => ele !== " " && ele !== '');

    tagContainer.innerHTML = '';
    tags.forEach(ele => {
        const tag = document.createElement('span');
        tag.innerHTML = ele;
        tag.classList.add('tags');
        tagContainer.appendChild(tag);
    });
}