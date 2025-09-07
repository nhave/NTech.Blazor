export function adjustPosition(selector, x, y) {
    const menu = document.querySelector(selector);
    if (!menu) return { x, y };

    const rect = menu.getBoundingClientRect();
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    let newX = x;
    let newY = y;

    if (x + rect.width > winWidth) {
        newX = winWidth - rect.width - 20;
    }
    if (y + rect.height > winHeight) {
        newY = winHeight - rect.height - 20;
    }

    return { x: newX, y: newY };
}

export function lockScroll() {
    document.body.style.overflow = 'hidden';
}

export function unlockScroll() {
    document.body.style.overflow = '';
}