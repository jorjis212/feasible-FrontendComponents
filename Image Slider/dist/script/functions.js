export class Ripple {
    constructor(e, rplClr) {
        this.rippleColor = rplClr;
        this.event = e;
    }
    createRipple() {
        const button = this.event.currentTarget;
        //check & remove operation on existing ripple 
        const existingRipple = button.querySelector('span.ripple');
        if (existingRipple) {
            existingRipple.remove();
        }
        //create circle 
        const circle = document.createElement('span');
        circle.style.left =
            `${this.event.clientX - button.offsetLeft}px`;
        circle.style.top =
            `${this.event.clientY - button.offsetTop}px`;
        circle.classList.add('ripple');
        //check if color parsing 
        if (this.rippleColor) {
            circle.style.background = this.rippleColor;
        }
        button.appendChild(circle);
    }
}
export function generateNameArr(name, iteration) {
    let returnArr = [];
    while (iteration >= 1) {
        returnArr.unshift(`${name}__${iteration}`);
        iteration--;
    }
    return returnArr;
}
export function removeClassFromArr(className, arr) {
    for (let item of arr) {
        if (item.classList.contains(className)) {
            item.classList.remove(className);
        }
    }
}
