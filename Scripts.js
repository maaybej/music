document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1');
    title.style.opacity = 0;

    let fadeEffect = setInterval(() => {
        if (!title.style.opacity) {
            title.style.opacity = 1;
        }
        if (title.style.opacity < 1) {
            title.style.opacity = parseFloat(title.style.opacity) + 0.01;
        } else {
            clearInterval(fadeEffect);
        }
    }, 50);
});
