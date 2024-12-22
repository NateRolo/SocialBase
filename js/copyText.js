// subPanels
var igSubPanels = document.querySelectorAll(".subPanel.instagram");
var ytSubPanels = document.querySelectorAll(".subPanel.youtube");
var ttSubPanels = document.querySelectorAll(".subPanel.tiktok");
var fbSubPanels = document.querySelectorAll(".subPanel.facebook");

// captions
var igCaptions = document.querySelectorAll(".caption.info.instagram");
var ytCaptions = document.querySelectorAll(".caption.info.youtube");
var ttCaptions = document.querySelectorAll(".caption.info.tiktok");
var fbCaptions = document.querySelectorAll(".caption.info.facebook");

//hashtags
var igHashtags = document.querySelectorAll(".hashtags.info.instagram");
var ytHashtags = document.querySelectorAll(".hashtags.info.youtube");
var ttHashtags = document.querySelectorAll(".hashtags.info.tiktok");
var fbHashtags = document.querySelectorAll(".hashtags.info.facebook");

// subPanel buttons
var igCopy = document.querySelectorAll(".copy.instagram");
var ytCopy = document.querySelectorAll(".copy.youtube");
var ttCopy = document.querySelectorAll(".copy.tiktok");
var fbCopy = document.querySelectorAll(".copy.facebook");


// copy function
async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log("Text copied");
    }
    catch (err) {
        console.error("Failed to copy:", err);
    }
}

// Assign id to each subPanel
for (let i = 0; i < pageElements; i++){
    igSubPanels[i].setAttribute("id", "igSubPanel-" + i);
    ytSubPanels[i].setAttribute("id", "ytSubPanel-" + i);
    ttSubPanels[i].setAttribute("id", "ttSubPanel-" + i);
    fbSubPanels[i].setAttribute("id", "fbSubPanel-" + i);
}

// Assign id to each caption div
for (let i = 0; i < pageElements; i++){
    igCaptions[i].setAttribute("id", "igCaption-" + i);
    // ytCaptions[i].setAttribute("id", "ytCaption-" + i);
    // ttCaptions[i].setAttribute("id", "ttCaption-" + i);
    // fbCaptions[i].setAttribute("id", "fbCaption-" + i);
}

// Assign id to each hashtag div
for (let i = 0; i < pageElements; i++){
    igHashtags[i].setAttribute("id", "igHashtag-" + i);
    // ytHashtag[i].setAttribute("id", "ytHashtag-" + i);
    // ttHashtag[i].setAttribute("id", "ttHashtag-" + i);
    // fbHashtag[i].setAttribute("id", "fbHashtag-" + i);
}
 
// Assign id to each button 
for (let i = 0; i < pageElements; i += 3) {
    igCopy[i].setAttribute("id", "igCopyCaption-" + i);
    igCopy[i + 1].setAttribute("id", "igCopyHashtags-" + i);
    igCopy[i + 2].setAttribute("id", "igCopyAll-" + i);
}

// Assign copy text buttons (instagram only)
for (let i = 0; i < pageElements; i++) {
    let thisCaption = document.getElementById("igCaption-" + i).textContent;
    let thisHashtag = document.getElementById("igHashtag-" + i).textContent;
    let allData = thisCaption + "\n" + thisHashtag;

    let copyCaptionButton = document.getElementById("igCopyCaption-" + i);
    copyCaptionButton.addEventListener("click", () => 
        copyText(thisCaption));

    let copyHashtagButton = document.getElementById("igCopyHashtags-" + i);
    copyHashtagButton.addEventListener("click", () =>
        copyText(thisHashtag));

    let copyAllButton = document.getElementById("igCopyAll-" + i);
    copyAllButton.addEventListener("click", () =>
        copyText(allData));

}



// alert function for buttons
function buttonAlert(platform) {
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
        buttonAlert("Instagram");
    })
    ytButtons[i].addEventListener("click", function () {
        buttonAlert("Youtube");
    })
    fbButtons[i].addEventListener("click", function () {
        buttonAlert("Facebook");
    })
    ttButtons[i].addEventListener("click", function () {
        buttonAlert("TikTok");
    })
}


