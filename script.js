document.addEventListener('DOMContentLoaded', () => {
    const flowers = document.querySelectorAll('.flower');
    setInterval(() => {
        flowers.forEach(flower => {
            flower.style.transform = `translateY(${Math.random() * 50 - 25}px)`;
        });
    }, 500);
});