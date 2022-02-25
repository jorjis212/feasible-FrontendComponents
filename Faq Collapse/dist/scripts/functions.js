
export function removeClassFromNodelists(nodeLists, className) {
    nodeLists.forEach(item => {
        const logoContainer = item.querySelector('.faq__logo');
        item.parentNode.classList.remove(className);
        logoContainer.src = './assets/Faq/plus-logo.svg';
        if (item.querySelector('.highlight'))
            item.querySelector('.highlight').remove();

    });
}

export function addHighlight(base) {
    let highlight = document.createElement('div');
    highlight.classList.add('highlight');
    highlight.style.width = base.clientHeight * 1.18 + 'px';
    highlight.style.height = base.clientHeight + 'px';
    base.appendChild(highlight);
}