var accordians = document.getElementsByClassName("accordian");
var downChevrons = document.getElementsByClassName("chevronDown");
var upChevrons = document.getElementsByClassName("chevronUp");


// Open panel if accordian clicked
for (let i = 0; i < accordians.length; i++){
    accordians[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        panel.classList.toggle("active");
        
        // toggle downChevron
        var downChevron = downChevrons[i];
        downChevron.classList.toggle("hide");

        // toggle upChevron
        var upChevron = upChevrons[i];
        upChevron.classList.toggle("hide");
    })
};

// Assign unique id per accordian
for (let i = 0; i < accordians.length; i++){
    accordians[i].setAttribute("id", "accordian" + i);
}


