export function clickAnimation(e) {
    if(!e.classList.contains('svg') || e.classList.contains('animate-click')) return
    e.classList.toggle('animate-click')
    let t = setInterval(() => {
        clearInterval(t)
        e.classList.toggle('animate-click')
    }, 750);
}