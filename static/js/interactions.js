const emailButtons = document.querySelectorAll(".contact-item.email");
const toast = document.getElementById("copiedToast");

emailButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const email = btn.dataset.email;

        navigator.clipboard.writeText(email);

        toast.innerHTML = `<i class="fa-solid fa-check"></i> Correo copiado`;
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);
    });
});
