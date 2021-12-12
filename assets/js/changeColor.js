function initChangeColor() {
    const backgroundTemplate = document.querySelector("[data-background]");
    const inputColor = document.querySelector('[data-input="color"]');

    inputColor.addEventListener('input', () => {
        backgroundTemplate.style.backgroundColor = inputColor.value;
    })
}

export default initChangeColor;