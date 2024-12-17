const filters = document.getElementById("filters");

function openFilterWindow() {
    filters.classList.replace("closeFilter", "openFilter");
};

function closeFilterWindow() {
    filters.classList.replace("openFilter", "closeFilter");
};

function filterWindows() {
    
};

document.getElementById("filterLabel").addEventListener("click", () => {
    if (filters.classList.contains("closeFilter")){
        openFilterWindow();
        console.log("filter function ran");
    } else {
        closeFilterWindow();
    }
});
