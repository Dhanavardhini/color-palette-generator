const generateBtn = document.getElementById("generateBtn") as HTMLButtonElement;
const paletteContainer = document.getElementById("paletteContainer") as HTMLDivElement;

function getRandomColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generatePalette(): void {
  paletteContainer.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;

    const hexText = document.createElement("span");
    hexText.innerText = color;

    box.appendChild(hexText);
    box.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
      alert(`Copied ${color} to clipboard!`);
    });

    paletteContainer.appendChild(box);
  }
}

generateBtn.addEventListener("click", generatePalette);

// Generate on load
generatePalette();
