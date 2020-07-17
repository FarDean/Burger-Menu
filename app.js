const menBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menBtn.addEventListener("click",() => {
    if(!menuOpen) {
        menBtn.classList.add("open");
        menuOpen = true;
    }else {
        menBtn.classList.remove("open");
        menuOpen = false;
    }
});
