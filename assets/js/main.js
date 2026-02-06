// Listen for sticky note interaction
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(adjustPostItSizing, 100);
    
    var stickyInput = document.getElementById("postit-input");
    
    stickyInput.addEventListener("input", adjustPostItSizing);
    window.addEventListener("resize", adjustPostItSizing);
    
    function adjustPostItSizing() {
        var maxHeight = parseInt(getComputedStyle(stickyInput.parentElement).height) * .97;
        var fontSize = maxHeight / 7.75;
        
        stickyInput.style.height = maxHeight + "px";
        stickyInput.style.fontSize = fontSize + "px";
        console.log("adjusting sticky size to ", fontSize, " px");
    }
});