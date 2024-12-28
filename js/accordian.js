import { getFirestore, collection, doc, setDoc, getDoc } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js';
import { app } from './firebase_API.js';

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

// get likes
const db = getFirestore(app);
const docRef = doc(db, "posts", "testPost1");




// populate likes to appropriate panel 
async function populateLikes() {
    try {
        const likesSection = document.getElementsByClassName("likes");
        const doc = await getDoc(docRef);
        console.log("Cached document data:", doc.data());
        for (let i = 0; i < likesSection.length; i++) {
            likesSection[i].insertAdjacentHTML("beforeend", doc.data().likes);
        }
    }
    catch (e) {
        console.log("Error: ", e);
    }
};

populateLikes();