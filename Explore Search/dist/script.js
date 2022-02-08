const btn = document.querySelector(".btn");

btn.onclick = function () {
    this.parentNode.classList.add("active");
    document.querySelector(".input").focus();
};