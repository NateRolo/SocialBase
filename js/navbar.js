const filters = document.getElementById("filters");

function openFilterWindow() {
    filters.classList.replace("closeFilter", "openFilter");
};

function closeFilterWindow() {
    if (filters.classList.contains("openFilter")){ 
    filters.classList.replace("openFilter", "closeFilter");
    }
};

document.getElementById("filterLabel").addEventListener("click", () => {
    if (filters.classList.contains("closeFilter")){
        openFilterWindow();
        console.log("filter function ran");
    } else {
        closeFilterWindow();
    }
});


// edit to match my elements

// window.onclick = function(e){
//     if (!e.target.matches('.dropdown') && 
//           dropDownWindow.classList.contains('dropdown__window--active')){
//         dropDownWindow.classList.remove('dropdown__window--active')
//    }
//  }