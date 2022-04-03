"use strict";
const draggableList = document.querySelector('.draggable-list');
const btnSort = document.querySelector('.btn-sort');
const topCompanies = [
    'Apple',
    'Microsoft',
    'Google',
    'Amazon',
    'NVIDIA',
    'Meta',
    'Samsung',
    'Alibaba',
    'ASML',
    'Cisco'
];
let dragStartIndex;
function swapItems(from, to) {
    const fromNode = document.querySelector(`[data-index="${from}"] .draggable-list__item__name`);
    const toNode = document.querySelector(`[data-index="${to}"] .draggable-list__item__name`);
    let tempArr = [fromNode === null || fromNode === void 0 ? void 0 : fromNode.innerHTML, toNode === null || toNode === void 0 ? void 0 : toNode.innerHTML];
    fromNode === null || fromNode === void 0 ? void 0 : fromNode.innerHTML = tempArr[1];
    toNode === null || toNode === void 0 ? void 0 : toNode.innerHTML = tempArr[0];
}
function createList() {
    [...topCompanies]
        .map(a => ({ name: a, value: Math.random() }))
        .sort((a, a2) => a.value - a2.value)
        .map(a => a.name)
        .forEach((name, index) => {
        const createItem = document.createElement('li');
        createItem.setAttribute('data-index', `${index}`);
        createItem.setAttribute('data-index', `${index}`);
        createItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable-list__item" draggable='true'>
        <p class="draggable-list__item__name">${name}</p>
        <img class = "draggable-list__item__icon" src="./assets/icons/icon__dot.svg">
        </div>
        `;
        draggableList === null || draggableList === void 0 ? void 0 : draggableList.appendChild(createItem);
    });
    addEventListeners();
}
function dragStart() {
    dragStartIndex = +this.parentNode.getAttribute('data-index');
}
function dragOver(e) {
    this.classList.add('highlight');
    e.preventDefault();
}
function dragDrop() {
    const dragEndIndex = this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);
    this.classList.remove('highlight');
}
function dragLeave() {
    this.classList.remove('highlight');
}
function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable-list__item');
    const dragListItems = document.querySelectorAll('.draggable-list li');
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    });
    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragleave', dragLeave);
    });
}
createList();
btnSort === null || btnSort === void 0 ? void 0 : btnSort.addEventListener('click', function () {
    const userChoice = document.querySelectorAll('.draggable-list__item__name');
    userChoice.forEach((value, index) => {
        if (value.innerHTML === topCompanies[index]) {
            value.classList.remove('right');
            value.classList.add('right');
        }
        else {
            value.classList.remove('wrong');
            value.classList.add('wrong');
        }
    });
    window.setTimeout(function () {
        userChoice.forEach((ele, index) => {
            if (ele.classList.contains('wrong')) {
                ele.classList.remove('wrong');
                ele.classList.add('right');
            }
            ele.innerHTML = topCompanies[index];
        });
    }, 4000);
});
