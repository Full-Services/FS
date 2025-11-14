document.addEventListener("DOMContentLoaded", () => {
    const card = document.getElementById("card");
    if (!card) return;

    function toggleFlip() {
        card.classList.toggle("flipped");
    }

    let startX = 0, startY = 0;

    card.addEventListener("pointerdown", (e) => {
        startX = e.clientX;
        startY = e.clientY;
    });

    card.addEventListener("pointerup", (e) => {
        const dx = Math.abs(e.clientX - startX);
        const dy = Math.abs(e.clientY - startY);

        // Si no hubo movimiento significativo
        if (dx < 20 && dy < 20) {
            toggleFlip();
        }
    });
});
