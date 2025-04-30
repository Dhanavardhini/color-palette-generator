var generateBtn = document.getElementById("generateBtn");
var paletteContainer = document.getElementById("paletteContainer");
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function generatePalette() {
    paletteContainer.innerHTML = "";
    var _loop_1 = function (i) {
        var color = getRandomColor();
        var box = document.createElement("div");
        box.className = "color-box";
        box.style.backgroundColor = color;
        var hexText = document.createElement("span");
        hexText.innerText = color;
        box.appendChild(hexText);
        box.addEventListener("click", function () {
            navigator.clipboard.writeText(color);
            alert("Copied ".concat(color, " to clipboard!"));
        });
        paletteContainer.appendChild(box);
    };
    for (var i = 0; i < 5; i++) {
        _loop_1(i);
    }
}
generateBtn.addEventListener("click", generatePalette);
// Generate on load
generatePalette();
