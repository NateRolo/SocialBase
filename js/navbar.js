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
       
    } else {
        closeFilterWindow();
    }
});

