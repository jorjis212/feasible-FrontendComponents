
const draggableList =
    document.querySelector('.draggable-list');

const btnSort = document.querySelector('.btn-sort');

const topCompanies: string[] = [
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

let dragStartIndex:number;

function swapItems(from:number,to:number):void {
    const fromNode =
     document.querySelector(`[data-index="${from}"] .draggable-list__item__name`);
    const toNode =
     document.querySelector(`[data-index="${to}"] .draggable-list__item__name`) ;
     const tempArr = [fromNode?.innerHTML, toNode?.innerHTML];
     fromNode?.innerHTML = tempArr[1];
     toNode?.innerHTML = tempArr[0];
}


function createList(): void {
    [...topCompanies]
        .map(a => ({ name: a, value: Math.random() }))
        .sort((a, a2) => a.value - a2.value)
        .map(a => a.name)
        .forEach((name, index) => {
            const createItem = document.createElement('li');
            createItem.setAttribute('data-index', `${index}`);
            createItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable-list__item" draggable='true'>
        <p class="draggable-list__item__name">${name}</p>
        <img class = "draggable-list__item__icon" src="./assets/icons/icon__dot.svg">
        </div>
        `;
            draggableList?.appendChild(createItem);
        });
    addEventListeners();
}

function dragStart(this:any) {
    dragStartIndex = +this.parentNode.getAttribute('data-index');
}


function dragOver(this:any,e:any) {
    this.classList.add('highlight');
    e.preventDefault();
}


function dragDrop(this:any) {
    const dragEndIndex = this.getAttribute('data-index');
    swapItems(dragStartIndex,dragEndIndex);
    this.classList.remove('highlight');
}


function dragLeave(this:any) {
    this.classList.remove('highlight');
}

function addEventListeners() {
    const draggables =
        document.querySelectorAll('.draggable-list__item');
    const dragListItems =
        document.querySelectorAll('.draggable-list li');

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



btnSort?.addEventListener('click',function(e:any){
    const userChoice = 
    document.querySelectorAll('.draggable-list__item__name');
    userChoice.forEach((value,index)=>{
        if (value.innerHTML===topCompanies[index]){
            value.classList.remove('right');
            value.classList.add('right');
        }else{
            value.classList.remove('wrong');
            value.classList.add('wrong');
        }
    });

    window.setTimeout(function(){
        userChoice.forEach((ele,index)=>{

            if (ele.classList.contains('wrong')){
                ele.classList.remove('wrong');
                ele.classList.add('right');
            }

            ele.innerHTML = topCompanies[index];
        })
    },4000);

    e.stopPropagation();
}) ;