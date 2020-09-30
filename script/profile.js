let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;"; 
});