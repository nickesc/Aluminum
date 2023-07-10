const sideBar = document.getElementById("sideBar");
const sideBarOverlay = document.getElementById("sideBarOverlay");


function showSideBar(){
    sideBar.classList.remove("hiddenLeft");
    sideBarOverlay.classList.remove("noDisplay");
}

function hideSideBar(){
    sideBar.classList.add("hiddenLeft");
    sideBarOverlay.classList.add("noDisplay");
}

function _showSideBar(){
    showSideBar();
}

function _hideSideBar(){
    hideSideBar();
}

function redirectToSource(){
    window.location.href = "https://github.com/nickesc/Aluminum";
}

function _githubButton(){
    redirectToSource();
}
