const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        const parent = this.parentElement;
        const panel = this.nextElementSibling;
        const arrow = this.querySelector('.arrow');
        
        parent.classList.toggle("active");
        this.classList.toggle("active");
        arrow.classList.toggle("active");

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}