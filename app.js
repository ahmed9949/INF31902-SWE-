document.addEventListener('DOMContentLoaded', function () {
    Array.from(document.querySelectorAll('.card input')).forEach((input, i) => {
        input.addEventListener('keyup', () => {
            const caret = input.closest('.card').querySelector('.bi-caret-down-fill');
            caret.style.transform = input.value.length > 0 ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });
});