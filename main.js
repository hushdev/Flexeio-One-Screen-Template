var downloadBtn = document.querySelector(".downloadBtn");
var closeBtn = document.querySelector(".close");
var modal = document.querySelector(".modal-wrap");

downloadBtn.addEventListener("click", function() {
    modal.classList.add("modal-active");
});

closeBtn.addEventListener("click", function() {
    modal.classList.add("modal-hide");
    setTimeout(function() {
        modal.classList.remove("modal-active");
        modal.classList.remove("modal-hide");
    }, 650);
})