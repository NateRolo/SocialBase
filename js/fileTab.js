var accordians = document.getElementsByClassName("accordian");
var downChevrons = document.getElementsByClassName("chevronDown");
var upChevrons = document.getElementsByClassName("chevronUp");
var archived = document.querySelectorAll(".icon.archive");

var igButtons = document.querySelectorAll(".socials.instagram");
var ytButtons = document.querySelectorAll(".socials.youtube");
var fbButtons = document.querySelectorAll(".socials.facebook");
var ttButtons = document.querySelectorAll(".socials.tiktok");

const pageElements = accordians.length;

// Open panel if accordian clicked
for (let i = 0; i < pageElements; i++){
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
for (let i = 0; i < pageElements; i++){
    accordians[i].setAttribute("id", "accordian" + i);
}

// alert function for buttons
function copyButton(platform) {
    var copiedPlatform;
    switch (platform) {
        case "Instagram":
            copiedPlatform = "Instagram";
            break;
        case "Youtube":
            copiedPlatform = "Youtube";
            break;
        case "Facebook":
            copiedPlatform = "Facebook";
            break;
        case "TikTok":
            copiedPlatform = "TikTok";
            break;
        default: 
            alert("No text was copied");
    }
    alert(copiedPlatform + " metadata was copied!");
}

// Social media platform event listeners
for (let i = 0; i < pageElements; i++) {
    igButtons[i].addEventListener("click", function () {
        copyButton("Instagram");
    })
    ytButtons[i].addEventListener("click", function () {
        copyButton("Youtube");
    })
    fbButtons[i].addEventListener("click", function () {
        copyButton("Facebook");
    })
    ttButtons[i].addEventListener("click", function () {
        copyButton("TikTok");
    })
}

// set stop propogation for all buttons 
for (let i = 0; i < pageElements; i++) {
    igButtons[i].setAttribute("onclick", "event.stopPropagation()");
    ytButtons[i].setAttribute("onclick", "event.stopPropagation()");
    fbButtons[i].setAttribute("onclick", "event.stopPropagation()");
    ttButtons[i].setAttribute("onclick", "event.stopPropagation()");
}
