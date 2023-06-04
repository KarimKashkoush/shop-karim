let scroll = document.querySelector(".scroll");
scroll.onclick = function () {
window.scrollTo({
    top: 0,
    behavior: "smooth",
});
};