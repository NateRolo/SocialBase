import { getFirestore, collection, doc, setDoc, getDocs, query, where } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js';
import { app } from './firebase_API.js';
import { addCopyTextFunction, assignButtonId, assignHashtagDivId, assignSubPanelId, assignCaptionDivId, copyText, initializeVariables } from './copyText.js';

// gets snapshot of entire collection 
const db = getFirestore(app);
const postsSnap = await getDocs(collection(db, "posts"));

// adds objects to array 
var postsArray = [];
postsSnap.forEach((doc) => {
    postsArray.push({
        id: doc.id,
        data: doc.data()
    })
})

console.log(postsArray[0].data);

// populate template with data from array
async function populateAccordian(array) {
    let postTemplate = document.getElementById("postsTemplate");

    for (let i = 0; i < array.length; i++) {
        let thisPost = array[i];
        var fileName = thisPost.data.filename;
        var filePosted = thisPost.data.datePosted;
        var archivedStatus = thisPost.data.archived;
        var igCaption = thisPost.data.igdata[0];
        var igHashtags = thisPost.data.igdata[1];
        var igViews = thisPost.data.igdata[2];
        var igLikes = thisPost.data.igdata[3];
        var igComments = thisPost.data.igdata[4];
        var igShares = thisPost.data.igdata[5];

        let newPost = postTemplate.content.cloneNode(true);

        newPost.querySelector('.fileNumber').innerHTML = fileName;
        newPost.querySelector('.fileNumber').setAttribute("id", fileName);
        newPost.querySelector('.filePostedDate').innerHTML = filePosted;
        if (archivedStatus) {
            newPost.querySelector('.archive.button').classList.toggle('stored');
        }
        newPost.querySelector('.caption.info.instagram').insertAdjacentHTML("beforeend", igCaption);
        newPost.querySelector('.hashtags.info.instagram').insertAdjacentHTML("beforeend", igHashtags);
        newPost.querySelector('.views').insertAdjacentHTML("beforeend", igViews);
        newPost.querySelector('.likes').insertAdjacentHTML("beforeend", igLikes);
        newPost.querySelector('.comments').insertAdjacentHTML("beforeend", igComments);
        newPost.querySelector('.shares').insertAdjacentHTML("beforeend", igShares);

        document.getElementById('content').appendChild(newPost);
    }

}

await populateAccordian(postsArray).then(() =>{
    initializeVariables();
});

var accordians = document.getElementsByClassName("accordian");
var downChevrons = document.getElementsByClassName("chevronDown");
var upChevrons = document.getElementsByClassName("chevronUp");
var archiveButtons = document.querySelectorAll(".button.archive");

var igButtons = document.querySelectorAll(".socials.instagram");
var ytButtons = document.querySelectorAll(".socials.youtube");
var fbButtons = document.querySelectorAll(".socials.facebook");
var ttButtons = document.querySelectorAll(".socials.tiktok");

var pageElements = accordians.length;

// Open panel if accordian clicked
for (let i = 0; i < pageElements; i++) {
    accordians[i].addEventListener("click", function () {
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
for (let i = 0; i < pageElements; i++) {
    accordians[i].setAttribute("id", "accordian" + i);
}

// set stop propogation for all buttons 
for (let i = 0; i < pageElements; i++) {
    igButtons[i].setAttribute("onclick", "event.stopPropagation()");
    ytButtons[i].setAttribute("onclick", "event.stopPropagation()");
    fbButtons[i].setAttribute("onclick", "event.stopPropagation()");
    ttButtons[i].setAttribute("onclick", "event.stopPropagation()");
    archiveButtons[i].setAttribute("onclick", "event.stopPropagation()");
}

// set button to green when stored
for (let i = 0; i < pageElements; i++) {
    archiveButtons[i].addEventListener("click", function () {
        archiveButtons[i].classList.toggle("stored");
    })
}
