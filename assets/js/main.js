// Listen for sticky note interaction
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(adjustStickySizing, 100);
});

var stickyInput = document.getElementById("sticky-input");

stickyInput.addEventListener("input", adjustStickySizing);
window.addEventListener("resize", adjustStickySizing);

function adjustStickySizing() {
    var maxHeight = parseInt(getComputedStyle(stickyInput.parentElement).height) * .97;
    var fontSize = maxHeight / 7.75;

    stickyInput.style.height = maxHeight + "px";
    stickyInput.style.fontSize = fontSize + "px";
}