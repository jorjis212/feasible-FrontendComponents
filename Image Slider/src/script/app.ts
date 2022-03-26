import {Ripple, generateNameArr, removeClassFromArr} from './functions.js';

console.log('hello')

const btn = document.querySelector('.btn-flagship');
// addButtonRipple(btn)

if (window.innerWidth>=1024){
    console.log(window.innerWidth);
    btn?.addEventListener('click',function (event:any){
        const initRipple = new Ripple(event);
        initRipple.createRipple();  
    })
}


const flagshipImage:any = 
document.querySelector('.flagship__mock__img__ele');

const nextBtn = document.querySelector('.chevron-right');
const prevBtn = document.querySelector('.chevron-left');
const colors = document.querySelectorAll('.color');
const loader = document.querySelector('.loader');


let currArray:string[] = generateNameArr('purple',3);
let indexTrack = 0;
let currColor = 'purple' , currPictureTitle = '';

colors.forEach(color=>{
    const colorName:any = color.getAttribute('data-name');

    color.addEventListener('click',function(){
        removeClassFromArr('active',colors);
        loader?.classList.remove('hide');
        color.classList.add('active');
        currArray = generateNameArr(colorName,3);
        currColor = colorName;
        flagshipImage.src = `./assets/images/${colorName}/${currArray[0]}.png`;
        console.log(currArray);
        indexTrack = 0;
    })
})

console.log(generateNameArr('red',3));

nextBtn?.addEventListener('click',function(){
    if (indexTrack<currArray.length-1){
        indexTrack++;
        loader?.classList.remove('hide');
        const pictureTitle = currArray[indexTrack];
        let pictureColor = pictureTitle.split('__')[0];
        flagshipImage.src = 
        `./assets/images/${pictureColor}/${currArray[indexTrack]}.png`;
        console.log('object',pictureColor);
    }
})

prevBtn?.addEventListener('click',function(){
    if (indexTrack>0){
        indexTrack--;
        loader?.classList.remove('hide');
        const pictureTitle = currArray[indexTrack];
        let pictureColor = pictureTitle.split('__')[0];
        flagshipImage.src = 
        `./assets/images/${pictureColor}/${currArray[indexTrack]}.png`;
    }
})


flagshipImage?.addEventListener('load',function(){
    loader?.classList.add('hide');
    console.log(loader);
})