import { Ripple, generateNameArr, removeClassFromArr } from './functions.js';
const btn = document.querySelector('.btn-flagship');
if (window.innerWidth >= 1024) {
    btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function (event) {
        const initRipple = new Ripple(event);
        initRipple.createRipple();
    });
}
const flagshipImage = document.querySelector('.flagship__mock__img__ele');
const nextBtn = document.querySelector('.chevron-right');
const prevBtn = document.querySelector('.chevron-left');
const colors = document.querySelectorAll('.color');
const loader = document.querySelector('.loader');
const pathPrefix = './assets/images/';
const imgFormat = '.webp';
let currArray, currColor;
let trackIndex = 0;
//utility functions
function updateFlagshipImage(pathPrefix, imgFormat, currColor, trackIndex) {
    let imgPath = `${pathPrefix}${currColor}/${currArray[trackIndex] + imgFormat}`;
    flagshipImage.src = imgPath;
}
function prev() {
    if (trackIndex > 0) {
        trackIndex--;
        loader === null || loader === void 0 ? void 0 : loader.classList.remove('hide');
        updateFlagshipImage(pathPrefix, imgFormat, currColor, trackIndex);
    }
    else {
        trackIndex = currArray.length - 1;
        loader === null || loader === void 0 ? void 0 : loader.classList.remove('hide');
        updateFlagshipImage(pathPrefix, imgFormat, currColor, trackIndex);
    }
}
function next() {
    if (trackIndex < currArray.length - 1) {
        trackIndex++;
        loader === null || loader === void 0 ? void 0 : loader.classList.remove('hide');
        updateFlagshipImage(pathPrefix, imgFormat, currColor, trackIndex);
    }
    else {
        trackIndex = 0;
        loader === null || loader === void 0 ? void 0 : loader.classList.remove('hide');
        updateFlagshipImage(pathPrefix, imgFormat, currColor, trackIndex);
    }
}
colors.forEach(color => {
    const colorName = color.getAttribute('data-name');
    color.addEventListener('click', function () {
        trackIndex = 0;
        removeClassFromArr('active', colors);
        loader === null || loader === void 0 ? void 0 : loader.classList.remove('hide');
        color.classList.add('active');
        currArray = generateNameArr(colorName, 3);
        currColor = colorName;
        updateFlagshipImage(pathPrefix, imgFormat, currColor, trackIndex);
    });
});
nextBtn.onclick = next;
prevBtn.onclick = prev;
window.onload = function () {
    loader === null || loader === void 0 ? void 0 : loader.classList.add('hide');
    flagshipImage.onload = function () {
        loader === null || loader === void 0 ? void 0 : loader.classList.add('hide');
    };
};
const defaultColor = document.querySelector("[data-name='purple']");
defaultColor === null || defaultColor === void 0 ? void 0 : defaultColor.click();
