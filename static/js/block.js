document.addEventListener("DOMContentLoaded", () => {
    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none"; 
    document.body.style.msUserSelect = "none";      
    document.addEventListener("contextmenu", (e) => e.preventDefault());
});