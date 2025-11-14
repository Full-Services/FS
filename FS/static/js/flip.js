document.addEventListener("DOMContentLoaded", () => {
    const card = document.getElementById("card");
    if (!card) return;

    const front = card.querySelector(".card-front");
    const back = card.querySelector(".card-back");

    function toggleFlip() {
        const flipped = card.classList.toggle("flipped");

        // Accesibilidad
        card.setAttribute("aria-pressed", flipped);
        if (front) front.setAttribute("aria-hidden", flipped);
        if (back) back.setAttribute("aria-hidden", !flipped);
    }

    // Evitar flips si se hace clic en un elemento interactivo
    function shouldIgnoreFlip(event) {
        return Boolean(
            event.target.closest(".contact-item") ||
            event.target.closest("a") ||
            event.target.closest("button")
        );
    }

    // CLICK
    card.addEventListener("click", (e) => {
        if (shouldIgnoreFlip(e)) return;
        toggleFlip();
    });

    // TECLADO (enter / space)
    card.addEventListener("keydown", (e) => {
        const onInteractive =
            document.activeElement.closest(".contact-item");
        if (onInteractive) return;

        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleFlip();
        }
    });

    // TOUCH CONTROL (tocar sin arrastrar)
    let startX = 0,
        startY = 0;

    card.addEventListener(
        "touchstart",
        (e) => {
            const t = e.touches[0];
            startX = t.clientX;
            startY = t.clientY;
        },
        { passive: true }
    );

    card.addEventListener(
        "touchend",
        (e) => {
            const t = e.changedTouches[0];
            const dx = Math.abs(t.clientX - startX);
            const dy = Math.abs(t.clientY - startY);

            if (dx < 12 && dy < 12) {
                const el = document.elementFromPoint(t.clientX, t.clientY);
                if (
                    el &&
                    (el.closest(".contact-item") ||
                        el.closest("a") ||
                        el.closest("button"))
                ) {
                    return;
                }
                toggleFlip();
            }
        },
        { passive: true }
    );
});
