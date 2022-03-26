import { Ripple, generateNameArr, removeClassFromArr } from './functions.js';
console.log('hello');
const btn = document.querySelector('.btn-flagship');
// addButtonRipple(btn)
if (window.innerWidth >= 1024) {
    console.log(window.innerWidth);
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
let currArray = generateNameArr('purple', 3);
let indexTrack = 0;
let currColor = 'purple', currPictureTitle = '';
colors.forEach(color => {
    const colorName = color.getAttribute('data-name');
    color.addEventListener('click', function () {
        removeClassFromArr('active', colors);
        loader === null || loader === void 0 ? void 0 : loader.classList.remove('hide');
        color.classList.add('active');
        currArray = generateNameArr(colorName, 3);
        flagshipImage.src = `./assets/images/${colorName}/${currArray[0]}.png`;
        console.log(currArray);
        indexTrack = 0;
    });
});
console.log(generateNameArr('red', 3));
nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener('click', function () {
    if (indexTrack < currArray.length - 1) {
        indexTrack++;
        loader === null || loader === void 0 ? void 0 : loader.classList.remove('hide');
        const pictureTitle = currArray[indexTrack];
        let pictureColor = pictureTitle.split('__')[0];
        flagshipImage.src =
            `./assets/images/${pictureColor}/${currArray[indexTrack]}.png`;
        console.log('object', pictureColor);
    }
});
prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener('click', function () {
    if (indexTrack > 0) {
        indexTrack--;
        loader === null || loader === void 0 ? void 0 : loader.classList.remove('hide');
        const pictureTitle = currArray[indexTrack];
        let pictureColor = pictureTitle.split('__')[0];
        flagshipImage.src =
            `./assets/images/${pictureColor}/${currArray[indexTrack]}.png`;
    }
});
flagshipImage === null || flagshipImage === void 0 ? void 0 : flagshipImage.addEventListener('load', function () {
    loader === null || loader === void 0 ? void 0 : loader.classList.add('hide');
    console.log(loader);
});
