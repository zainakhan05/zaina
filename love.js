function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerText = "🌸";
    document.body.appendChild(flower);

    let startPosition = Math.random() * window.innerWidth;
    flower.style.left = `${startPosition}px`;
    flower.style.animationDuration = `${3 + Math.random() * 5}s`;

    setTimeout(() => {
        flower.remove();
    }, 8000);
}

setInterval(createFlower, 300);