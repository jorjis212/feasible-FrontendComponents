'use strict';
let blurriness = 25;
const background = document.querySelector('.background');
const loadingText = document.querySelector('.loading-text');
const btn = document.querySelector('.btn');
function wringing(blur, timing) {
    let opacity = 1, initial = 0;
    const blurFragment = (blur * 10) / (100 * 10);//for accuracy
    const opacityFragment = (opacity * 10) / (100 * 10);

    let start = setInterval(reveal, timing);

    function reveal() {
        if (initial >= 100)
            clrInt(start);

        loadingText.innerHTML = initial + '%';
        opacity =
            (opacity - opacityFragment < 0) ? 0 : opacity - opacityFragment;
        loadingText.style.opacity = opacity;

        blur = (blur - blurFragment < 0) ? 0 : blur - blurFragment;
        background.style.filter = `blur(${blur}px)`;

        initial++;
    }
    function clrInt(id) {
        clearInterval(id);
    }
}
background.style.filter = `blur(${blurriness}px)`;


btn.onclick = function () {
    loadingText.classList.add('active');
    this.style.display = 'none';
    wringing(blurriness, 30);
};