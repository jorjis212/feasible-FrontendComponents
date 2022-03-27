import {Ripple, generateNameArr, removeClassFromArr} from './functions.js';


const btn = document.querySelector('.btn-flagship');

if (window.innerWidth>=1024){
    btn?.addEventListener('click',function (event:any){
        const initRipple = new Ripple(event);
        initRipple.createRipple();  
    })
}


const flagshipImage:any = 
document.querySelector('.flagship__mock__img__ele');

const nextBtn:any = document.querySelector('.chevron-right');
const prevBtn:any = document.querySelector('.chevron-left');
const colors = document.querySelectorAll('.color');
const loader = document.querySelector('.loader');

const pathPrefix = './assets/images/';
const imgFormat = '.webp';

let currArray:string[], currColor:string;
let trackIndex = 0;

//utility functions
function updateFlagshipImage
(pathPrefix:string,imgFormat:string,currColor:string,trackIndex:number){
    let imgPath = 
    `${pathPrefix}${currColor}/${currArray[trackIndex] + imgFormat}`;
    flagshipImage.src = imgPath;
    
}

function prev(){
    if (trackIndex>0){
        trackIndex--;
        loader?.classList.remove('hide');
        updateFlagshipImage
        (pathPrefix,imgFormat,currColor,trackIndex);
    }else{
        trackIndex = currArray.length-1;
        loader?.classList.remove('hide');
        updateFlagshipImage
        (pathPrefix,imgFormat,currColor,trackIndex);
    }
}

function next(){
    if (trackIndex<currArray.length-1){
        trackIndex++;
        loader?.classList.remove('hide');
        updateFlagshipImage
        (pathPrefix,imgFormat,currColor,trackIndex);
    }else{
        trackIndex = 0
        loader?.classList.remove('hide');
        updateFlagshipImage
        (pathPrefix,imgFormat,currColor,trackIndex);
    }
}



colors.forEach(color=>{
    const colorName:any = color.getAttribute('data-name');
    
    color.addEventListener('click',function(){
        trackIndex = 0;
        removeClassFromArr('active',colors);
        loader?.classList.remove('hide');
        color.classList.add('active');
        currArray = generateNameArr(colorName,3);
        currColor = colorName;
        updateFlagshipImage(pathPrefix,imgFormat,currColor,trackIndex);
    })
})



nextBtn.onclick = next;
prevBtn.onclick = prev;



window.onload = function(){
    loader?.classList.add('hide');
    flagshipImage.onload = function(){
        loader?.classList.add('hide');
    }
}

const defaultColor:any = 
document.querySelector("[data-name='purple']");
defaultColor?.click();