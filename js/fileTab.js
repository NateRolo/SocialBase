var accordians = document.getElementsByClassName("accordian");

for (let i = 0; i < accordians.length; i++){
    accordians[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        panel.classList.toggle("active");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
};

